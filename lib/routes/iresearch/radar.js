module.exports = {
    'iresearch.com.cn': {
        _name: '艾瑞咨询',
        www: [
            {
                title: '最新报告',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-zui-xin-bao-gao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isReport = !url.searchParams.get('type');
                    const id = url.searchParams.get('classId');

                    return isReport ? `/iresearch/report${id ? `/${id}` : ''}` : undefined;
                },
            },
            {
                title: '研究图表',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-yan-jiu-tu-biao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isChart = url.searchParams.get('type') === '4';
                    const id = url.searchParams.get('classId');

                    return isChart ? `/iresearch/chart${id ? `/${id}` : ''}` : undefined;
                },
            },
            {
                title: '周度市场观察',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-zhou-du-shi-chang-guan-cha',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isWeekly = url.searchParams.get('type') === '3';
                    const id = url.searchParams.get('classId');

                    return isWeekly ? `/iresearch/weekly${id ? `/${id}` : ''}` : undefined;
                },
            },
            {
                title: '最新报告 - 媒体文娱',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-zui-xin-bao-gao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isReport = !url.searchParams.get('type');

                    return isReport ? '/iresearch/report/媒体文娱' : undefined;
                },
            },
            {
                title: '最新报告 - 广告营销',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-zui-xin-bao-gao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isReport = !url.searchParams.get('type');

                    return isReport ? '/iresearch/report/广告营销' : undefined;
                },
            },
            {
                title: '最新报告 - 游戏行业',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-zui-xin-bao-gao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isReport = !url.searchParams.get('type');

                    return isReport ? '/iresearch/report/游戏行业' : undefined;
                },
            },
            {
                title: '最新报告 - 视频媒体',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-zui-xin-bao-gao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isReport = !url.searchParams.get('type');

                    return isReport ? '/iresearch/report/视频媒体' : undefined;
                },
            },
            {
                title: '最新报告 - 消费电商',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-zui-xin-bao-gao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isReport = !url.searchParams.get('type');

                    return isReport ? '/iresearch/report/消费电商' : undefined;
                },
            },
            {
                title: '最新报告 - 电子商务',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-zui-xin-bao-gao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isReport = !url.searchParams.get('type');

                    return isReport ? '/iresearch/report/电子商务' : undefined;
                },
            },
            {
                title: '最新报告 - 消费者洞察',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-zui-xin-bao-gao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isReport = !url.searchParams.get('type');

                    return isReport ? '/iresearch/report/消费者洞察' : undefined;
                },
            },
            {
                title: '最新报告 - 旅游行业',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-zui-xin-bao-gao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isReport = !url.searchParams.get('type');

                    return isReport ? '/iresearch/report/旅游行业' : undefined;
                },
            },
            {
                title: '最新报告 - 汽车行业',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-zui-xin-bao-gao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isReport = !url.searchParams.get('type');

                    return isReport ? '/iresearch/report/汽车行业' : undefined;
                },
            },
            {
                title: '最新报告 - 教育行业',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-zui-xin-bao-gao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isReport = !url.searchParams.get('type');

                    return isReport ? '/iresearch/report/教育行业' : undefined;
                },
            },
            {
                title: '最新报告 - 企业服务',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-zui-xin-bao-gao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isReport = !url.searchParams.get('type');

                    return isReport ? '/iresearch/report/企业服务' : undefined;
                },
            },
            {
                title: '最新报告 - 网络服务',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-zui-xin-bao-gao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isReport = !url.searchParams.get('type');

                    return isReport ? '/iresearch/report/网络服务' : undefined;
                },
            },
            {
                title: '最新报告 - 应用服务',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-zui-xin-bao-gao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isReport = !url.searchParams.get('type');

                    return isReport ? '/iresearch/report/应用服务' : undefined;
                },
            },
            {
                title: '最新报告 - AI大数据',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-zui-xin-bao-gao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isReport = !url.searchParams.get('type');

                    return isReport ? '/iresearch/report/AI大数据' : undefined;
                },
            },
            {
                title: '最新报告 - 人工智能',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-zui-xin-bao-gao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isReport = !url.searchParams.get('type');

                    return isReport ? '/iresearch/report/人工智能' : undefined;
                },
            },
            {
                title: '最新报告 - 物流行业',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-zui-xin-bao-gao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isReport = !url.searchParams.get('type');

                    return isReport ? '/iresearch/report/物流行业' : undefined;
                },
            },
            {
                title: '最新报告 - 金融行业',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-zui-xin-bao-gao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isReport = !url.searchParams.get('type');

                    return isReport ? '/iresearch/report/金融行业' : undefined;
                },
            },
            {
                title: '最新报告 - 支付行业',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-zui-xin-bao-gao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isReport = !url.searchParams.get('type');

                    return isReport ? '/iresearch/report/支付行业' : undefined;
                },
            },
            {
                title: '最新报告 - 房产行业',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-zui-xin-bao-gao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isReport = !url.searchParams.get('type');

                    return isReport ? '/iresearch/report/房产行业' : undefined;
                },
            },
            {
                title: '最新报告 - 医疗健康',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-zui-xin-bao-gao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isReport = !url.searchParams.get('type');

                    return isReport ? '/iresearch/report/医疗健康' : undefined;
                },
            },
            {
                title: '最新报告 - 先进制造',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-zui-xin-bao-gao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isReport = !url.searchParams.get('type');

                    return isReport ? '/iresearch/report/先进制造' : undefined;
                },
            },
            {
                title: '最新报告 - 新能源',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-zui-xin-bao-gao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isReport = !url.searchParams.get('type');

                    return isReport ? '/iresearch/report/新能源' : undefined;
                },
            },
            {
                title: '最新报告 - 区块链',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-zui-xin-bao-gao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isReport = !url.searchParams.get('type');

                    return isReport ? '/iresearch/report/区块链' : undefined;
                },
            },
            {
                title: '最新报告 - 其他',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-zui-xin-bao-gao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isReport = !url.searchParams.get('type');

                    return isReport ? '/iresearch/report/其他' : undefined;
                },
            },
            {
                title: '研究图表 - 媒体文娱',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-yan-jiu-tu-biao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isChart = url.searchParams.get('type') === '4';

                    return isChart ? '/iresearch/chart/媒体文娱' : undefined;
                },
            },
            {
                title: '研究图表 - 广告营销',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-yan-jiu-tu-biao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isChart = url.searchParams.get('type') === '4';

                    return isChart ? '/iresearch/chart/广告营销' : undefined;
                },
            },
            {
                title: '研究图表 - 游戏行业',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-yan-jiu-tu-biao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isChart = url.searchParams.get('type') === '4';

                    return isChart ? '/iresearch/chart/游戏行业' : undefined;
                },
            },
            {
                title: '研究图表 - 视频媒体',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-yan-jiu-tu-biao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isChart = url.searchParams.get('type') === '4';

                    return isChart ? '/iresearch/chart/视频媒体' : undefined;
                },
            },
            {
                title: '研究图表 - 消费电商',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-yan-jiu-tu-biao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isChart = url.searchParams.get('type') === '4';

                    return isChart ? '/iresearch/chart/消费电商' : undefined;
                },
            },
            {
                title: '研究图表 - 电子商务',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-yan-jiu-tu-biao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isChart = url.searchParams.get('type') === '4';

                    return isChart ? '/iresearch/chart/电子商务' : undefined;
                },
            },
            {
                title: '研究图表 - 消费者洞察',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-yan-jiu-tu-biao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isChart = url.searchParams.get('type') === '4';

                    return isChart ? '/iresearch/chart/消费者洞察' : undefined;
                },
            },
            {
                title: '研究图表 - 旅游行业',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-yan-jiu-tu-biao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isChart = url.searchParams.get('type') === '4';

                    return isChart ? '/iresearch/chart/旅游行业' : undefined;
                },
            },
            {
                title: '研究图表 - 汽车行业',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-yan-jiu-tu-biao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isChart = url.searchParams.get('type') === '4';

                    return isChart ? '/iresearch/chart/汽车行业' : undefined;
                },
            },
            {
                title: '研究图表 - 教育行业',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-yan-jiu-tu-biao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isChart = url.searchParams.get('type') === '4';

                    return isChart ? '/iresearch/chart/教育行业' : undefined;
                },
            },
            {
                title: '研究图表 - 企业服务',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-yan-jiu-tu-biao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isChart = url.searchParams.get('type') === '4';

                    return isChart ? '/iresearch/chart/企业服务' : undefined;
                },
            },
            {
                title: '研究图表 - 网络服务',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-yan-jiu-tu-biao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isChart = url.searchParams.get('type') === '4';

                    return isChart ? '/iresearch/chart/网络服务' : undefined;
                },
            },
            {
                title: '研究图表 - 应用服务',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-yan-jiu-tu-biao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isChart = url.searchParams.get('type') === '4';

                    return isChart ? '/iresearch/chart/应用服务' : undefined;
                },
            },
            {
                title: '研究图表 - AI大数据',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-yan-jiu-tu-biao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isChart = url.searchParams.get('type') === '4';

                    return isChart ? '/iresearch/chart/AI大数据' : undefined;
                },
            },
            {
                title: '研究图表 - 人工智能',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-yan-jiu-tu-biao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isChart = url.searchParams.get('type') === '4';

                    return isChart ? '/iresearch/chart/人工智能' : undefined;
                },
            },
            {
                title: '研究图表 - 物流行业',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-yan-jiu-tu-biao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isChart = url.searchParams.get('type') === '4';

                    return isChart ? '/iresearch/chart/物流行业' : undefined;
                },
            },
            {
                title: '研究图表 - 金融行业',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-yan-jiu-tu-biao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isChart = url.searchParams.get('type') === '4';

                    return isChart ? '/iresearch/chart/金融行业' : undefined;
                },
            },
            {
                title: '研究图表 - 支付行业',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-yan-jiu-tu-biao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isChart = url.searchParams.get('type') === '4';

                    return isChart ? '/iresearch/chart/支付行业' : undefined;
                },
            },
            {
                title: '研究图表 - 房产行业',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-yan-jiu-tu-biao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isChart = url.searchParams.get('type') === '4';

                    return isChart ? '/iresearch/chart/房产行业' : undefined;
                },
            },
            {
                title: '研究图表 - 医疗健康',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-yan-jiu-tu-biao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isChart = url.searchParams.get('type') === '4';

                    return isChart ? '/iresearch/chart/医疗健康' : undefined;
                },
            },
            {
                title: '研究图表 - 先进制造',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-yan-jiu-tu-biao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isChart = url.searchParams.get('type') === '4';

                    return isChart ? '/iresearch/chart/先进制造' : undefined;
                },
            },
            {
                title: '研究图表 - 新能源',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-yan-jiu-tu-biao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isChart = url.searchParams.get('type') === '4';

                    return isChart ? '/iresearch/chart/新能源' : undefined;
                },
            },
            {
                title: '研究图表 - 区块链',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-yan-jiu-tu-biao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isChart = url.searchParams.get('type') === '4';

                    return isChart ? '/iresearch/chart/区块链' : undefined;
                },
            },
            {
                title: '研究图表 - 其他',
                docs: 'https://docs.rsshub.app/routes/other#ai-rui-zi-xun-yan-jiu-tu-biao',
                source: ['report.shtml'],
                target: (_, url) => {
                    url = new URL(url);
                    const isChart = url.searchParams.get('type') === '4';

                    return isChart ? '/iresearch/chart/其他' : undefined;
                },
            },
        ],
    },
};
