'use strict';
const egg = require('egg');
module.exports = class ProductService extends egg.Service {
  constructor(ctx) {
    super(ctx);
    this.ctx = ctx;
  }
  getStatus(json = {}) {
    return json;
  }
  getInfo(json = {}) {
    return json;
  }
};
