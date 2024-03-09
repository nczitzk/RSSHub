import cache from '@/utils/cache';
import got from '@/utils/got';
import { load } from 'cheerio';
import timezone from '@/utils/timezone';
import { parseDate } from '@/utils/parse-date';
import { art } from '@/utils/render';
import * as path from 'node:path';

export default async (ctx) => {
    const { category = 'news/All' } = ctx.req.param();
    const limit = ctx.req.query('limit') ? Number.parseInt(ctx.req.query('limit'), 10) : 15;

    const rootUrl = 'http://www.a9vg.com';
    const currentUrl = new URL(`list/${category}`, rootUrl).href;

    const { data: response } = await got(currentUrl);

    const $ = load(response);

    let items = $('a.a9-rich-card-list_item')
        .slice(0, limit)
        .toArray()
        .map((item) => {
            item = $(item);

            const image = item.find('img.a9-rich-card-list_image');
            const title = item.find('div.a9-rich-card-list_label').text();

            return {
                title,
                link: new URL(item.prop('href'), rootUrl).href,
                description: art(path.join(__dirname, 'templates/description.art'), {
                    images: image
                        ? [
                              {
                                  src: image.prop('src'),
                                  alt: title,
                              },
                          ]
                        : undefined,
                }),
                pubDate: timezone(parseDate(item.find('div.a9-rich-card-list_infos').text()), +8),
            };
        });

    items = await Promise.all(
        items.map((item) =>
            cache.tryGet(item.link, async () => {
                const { data: detailResponse } = await got(item.link);

                const content = load(detailResponse);

                content('ignore_js_op img, p img').each((_, el) => {
                    el = content(el);

                    el.parent().replaceWith(
                        art(path.join(__dirname, 'templates/description.art'), {
                            images: el.prop('file')
                                ? [
                                      {
                                          src: el.prop('file'),
                                          alt: el.next().find('div.xs0 p').first().text(),
                                      },
                                  ]
                                : undefined,
                        })
                    );
                });

                item.title = content('h1.ts, div.c-article-main_content-title').first().text();
                item.description = art(path.join(__dirname, 'templates/description.art'), {
                    description: content('td.t_f, div.c-article-main_contentraw').first().html(),
                });
                item.author =
                    content('b a.blue').first().text() ||
                    content(
                        content('span.c-article-main_content-intro-item')
                            .toArray()
                            .filter((i) => content(i).text().startsWith('作者'))
                            .pop()
                    )
                        .text()
                        .split(/：/)
                        .pop();
                item.pubDate = timezone(
                    parseDate(
                        content('div.authi em')
                            .first()
                            .text()
                            .trim()
                            .match(/发表于 (\d+-\d+-\d+ \d+:\d+)/)?.[1] ?? content('span.c-article-main_content-intro-item').first().text(),
                        ['YYYY-M-D HH:mm', 'YYYY-MM-DD HH:mm']
                    ),
                    +8
                );

                return item;
            })
        )
    );

    const title = $('title').text();
    const image = new URL('images/logo.1cee7c0f.svg', rootUrl).href;
    const icon = new URL($('link[rel="shortcut icon"]').prop('href'), rootUrl).href;

    ctx.set('data', {
        item: items,
        title,
        link: currentUrl,
        description: $('meta[name="description"]').prop('content'),
        language: $('html').prop('lang'),
        image,
        icon,
        logo: icon,
        subtitle: $('meta[name="keywords"]').prop('content'),
        author: title.split(/-/).pop(),
        allowEmpty: true,
    });
};
