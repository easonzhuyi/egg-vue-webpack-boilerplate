'use strict';
const egg = require('egg');
module.exports = class ProductService extends egg.Service {
  constructor(ctx) {
    super(ctx);
    this.ctx = ctx;
  }
  getProductList(json = {}) {
    return json;
  }
  getProductDetail(json) {
    return json.id;
  }
};
