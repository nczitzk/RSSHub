const got = require('@/utils/got');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');
const timezone = require('@/utils/timezone');
const { parseDate } = require('@/utils/parse-date');

module.exports = async (ctx) => {
    const id = ctx.params.id || '159301';

    const rootUrl = 'http://opinion.people.com.cn';
    const currentUrl = `${rootUrl}/GB/${id.replace(/-/g, '/')}/index.html`;

    const response = await got({
        method: 'get',
        url: currentUrl,
        responseType: 'buffer',
    });

    const $ = cheerio.load(iconv.decode(response.data, 'gbk'));

    const list = $('.bor ul li a, .t11 a, .abl')
        .slice(0, ctx.params.limit ? parseInt(ctx.params.limit) : 20)
        .map((_, item) => {
            item = $(item);

            return {
                title: item.text(),
                link: `${rootUrl}${item.attr('href')}`,
            };
        })
        .get();

    const items = await Promise.all(
        list.map((item) =>
            ctx.cache.tryGet(item.link, async () => {
                const detailResponse = await got({
                    method: 'get',
                    url: item.link,
                    responseType: 'buffer',
                });

                const data = iconv.decode(detailResponse.data, 'gbk');
                const content = cheerio.load(data);

                content('.section-common-share-wrap').remove();

                item.description = content('.rm_txt_con').html();
                item.author = content('.author').text().replace(/■/, '').trim();
                item.pubDate = timezone(parseDate(data.match(/(\d{4}年\d{2}月\d{2}日\d{2}:\d{2}) | 来源：/)[1], 'YYYY年MM月DD日hh:mm'), +8);

                return item;
            })
        )
    );

    ctx.state.data = {
        title: `${$('title').text().replace(/--/g, ' - ')}`,
        link: currentUrl,
        item: items,
    };
};
