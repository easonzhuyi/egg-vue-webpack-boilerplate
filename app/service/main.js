'use strict';
const egg = require('egg');
// const { forEach, trim, omit } = require('lodash');
const axiosRequest = require('../web/framework/network/serverRequest.js');
module.exports = class ProductService extends egg.Service {
  constructor(ctx) {
    super(ctx);
    this.ctx = ctx;
  }
  async getBannerList() {
    const res = await axiosRequest.get('product/hot/query/all?page=1&rows=5');
    await this.ctx.helper.mergeAxiosHeaders(res.headers);
    // console.log('banner', res);
    return (res.data && res.data.resultContent && res.data.resultContent.products && res.data.resultContent.products.rows) || null;
  }
  // async getUserInfo() {
  //   const res = await axiosRequest.get('user/info', { withCredentials: true });
  //   return res.data;
  // }
};
