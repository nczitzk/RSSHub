import got from '@/utils/got';
import { load } from 'cheerio';
import timezone from '@/utils/timezone';
import { parseDate } from '@/utils/parse-date';

export default async (ctx) => {
    const { category = '' } = ctx.req.param();
    const limit = ctx.req.query('limit') ? Number.parseInt(ctx.req.query('limit'), 10) : 30;

    const rootUrl = 'https://newxinpi.cs.com.cn';

    const categories = {
        '': {
            name: '中国资本市场',
            apiUrl: 'xinpi/v1/all/1.json',
            url: rootUrl,
        },
        jijin: {
            name: '基金',
            apiUrl: 'jijin/v1/new/1.json',
            url: new URL('fund/L2_info.html', rootUrl).href,
        },
        zhaiquan: {
            name: '债券',
            apiUrl: 'zhaiquan/v1/new/1.json',
            url: new URL('shenshiZhaiJ.html', rootUrl).href,
        },
    };

    const apiUrl = new URL(categories[category].apiUrl, rootUrl).href;
    const currentUrl = categories[category].url;

    const {
        data: {
            data: { data: response },
        },
    } = await got(apiUrl);

    const items = response.slice(0, limit).map((item) => ({
        title: item.f002v,
        link: item.f003v,
        category: [item.seccode, item.secname],
        pubDate: timezone(parseDate(item.f001d), +8),
        enclosure_url: item.f003v,
        enclosure_type: `application/${item.f003v.split(/\./).pop()}`,
    }));

    const { data: currentResponse } = await got(currentUrl);

    const $ = load(currentResponse);

    const author = '中证网';
    const title = '信息披露平台';
    const image = new URL('images/none.png', currentUrl).href;
    const icon = new URL('favicon.ico', rootUrl).href;

    ctx.set('data', {
        item: items,
        title: `${author} - ${categories[category].name}${title}`,
        link: currentUrl,
        description: $('meta[name="Description"]').prop('content'),
        language: $('html').prop('lang'),
        image,
        icon,
        logo: icon,
        subtitle: $('meta[name="Keywords"]').prop('content'),
        author,
    });
};
