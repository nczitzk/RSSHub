export default (router) => {
    router.get('/chart/:category?', './chart');
    router.get('/report/:category?', './report');
    router.get('/weekly/:category?', './weekly');
};
