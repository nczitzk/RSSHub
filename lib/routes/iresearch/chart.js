import got from '@/utils/got';
import { load } from 'cheerio';
import { art } from '@/utils/render';
import * as path from 'node:path';
import { parseDate } from '@/utils/parse-date';
import timezone from '@/utils/timezone';

export default async (ctx) => {
    const { category } = ctx.req.param();
    const limit = ctx.req.query('limit') ? Number.parseInt(ctx.req.query('limit'), 10) : 100;

    const rootUrl = 'https://www.iresearch.com.cn';
    const apiCategoryUrl = new URL('api/json/report/irsclass.json', rootUrl).href;
    const apiUrl = new URL('api/products/getdatasapi', rootUrl).href;

    const { data: categoryResponse } = await got(apiCategoryUrl);

    const categories = JSON.parse(categoryResponse.trim()).map((c) => ({
        id: c.id,
        name: c.name,
    }));

    const selected = category ? categories.find((c) => c.name === category || c.id === category) : undefined;

    const currentUrl = new URL(`report.shtml?type=4${selected ? `&classId=${selected.id}` : ''}`, rootUrl).href;

    const { data: response } = await got(apiUrl, {
        searchParams: {
            rootId: 14,
            channelId: selected?.id ?? '',
            userId: '',
            lastId: '',
            pageSize: limit,
        },
    });

    const items = response.List.slice(0, limit).map((item) => ({
        title: `${item.Title} - ${item.sTitle}`,
        link: new URL(`chart/detail?id=${item.Id}`, rootUrl).href,
        description: art(path.join(__dirname, 'templates/chart.art'), {
            images: [
                {
                    src: item.SmallImg,
                    alt: item.Title,
                },
                {
                    src: item.BigImg,
                    alt: item.sTitle,
                },
            ],
            newsId: item.NewsId,
        }),
        author: item.Author,
        category: [...new Set([item.sTitle, item.industry, ...item.Keyword])].filter(Boolean),
        guid: `iresearch.${item.Id}`,
        pubDate: timezone(parseDate(item.Uptime), +8),
        newsid: item.NewsId,
    }));

    const { data: currentResponse } = await got(currentUrl);

    const $ = load(currentResponse);

    const author = $('title').text();
    const icon = new URL('favicon.ico', rootUrl).href;

    ctx.set('data', {
        item: items,
        title: `${author} | 研究图表${selected ? ` - ${selected.name}` : ''}`,
        link: currentUrl,
        language: 'zh-cn',
        icon,
        logo: icon,
        author,
        allowEmpty: true,
    });
};
