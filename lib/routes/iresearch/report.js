import cache from '@/utils/cache';
import got from '@/utils/got';
import { load } from 'cheerio';
import { art } from '@/utils/render';
import * as path from 'node:path';
import { parseDate } from '@/utils/parse-date';
import timezone from '@/utils/timezone';

export default async (ctx) => {
    const { category } = ctx.req.param();
    const limit = ctx.req.query('limit') ? Number.parseInt(ctx.req.query('limit'), 10) : 30;

    const rootUrl = 'https://www.iresearch.com.cn';
    const rootPicUrl = 'https://pic.iresearch.cn';
    const apiCategoryUrl = new URL('api/json/report/irsclass.json', rootUrl).href;
    const apiReportUrl = new URL('api/Detail/reportM', rootUrl).href;
    const apiUrl = new URL('api/products/GetReportList', rootUrl).href;

    const { data: categoryResponse } = await got(apiCategoryUrl);

    const categories = JSON.parse(categoryResponse.trim()).map((c) => ({
        id: c.id,
        name: c.name,
    }));

    const selected = category ? categories.find((c) => c.name === category || c.id === category) : undefined;

    const currentUrl = new URL(`report.shtml${selected ? `?classId=${selected.id}` : ''}`, rootUrl).href;

    const { data: response } = await got(apiUrl, {
        searchParams: {
            classId: selected?.id ?? '',
            fee: 0,
            date: '',
            lastId: '',
            pageSize: limit,
        },
    });

    let items = response.List.slice(0, limit).map((item) => ({
        title: item.title,
        link: item.VisitUrl,
        author: item.Author,
        category: [...new Set([item.industry, ...item.Keyword])].filter(Boolean),
        guid: `iresearch.${item.Id}`,
        pubDate: timezone(parseDate(item.Uptime), +8),
        newsid: item.NewsId,
    }));

    items = await Promise.all(
        items.map((item) =>
            cache.tryGet(item.link, async () => {
                const { data: detailResponse } = await got(apiReportUrl, {
                    searchParams: {
                        id: item.newsid,
                        isfree: 0,
                    },
                });

                const data = detailResponse.List[0];

                item.title = data.Title;
                item.description = art(path.join(__dirname, 'templates/report.art'), {
                    images: Array.from({ length: data.PagesCount }, (_, index) => ({
                        src: new URL(`rimgs/${item.newsid}/${index + 1}.jpg`, rootPicUrl).href,
                    })),
                    description: data.Content + data.ReportList.replaceAll('\r\n', '<br>'),
                });
                item.category = [...new Set([...item.category, data.industry, ...data.keywords.split(/,/)])].filter(Boolean);
                item.pubDate = timezone(parseDate(data.Uptime), +8);

                delete item.newsid;

                return item;
            })
        )
    );

    const { data: currentResponse } = await got(currentUrl);

    const $ = load(currentResponse);

    const author = $('title').text();
    const icon = new URL('favicon.ico', rootUrl).href;

    ctx.set('data', {
        item: items,
        title: `${author} | 最新报告${selected ? ` - ${selected.name}` : ''}`,
        link: currentUrl,
        language: 'zh-cn',
        icon,
        logo: icon,
        author,
        allowEmpty: true,
    });
};
