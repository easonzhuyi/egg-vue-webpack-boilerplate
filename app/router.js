'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.index.index.index);
  // router.get('/product', controller.index.index.product);
  router.get('/auth/signin', controller.auth.index.signin);
  router.get('/auth(/.+)?', controller.auth.index.home);
  router.get('/notfound', controller.middle.index.notfound);
};
