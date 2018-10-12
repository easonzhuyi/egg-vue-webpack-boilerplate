'use strict';
const egg = require('egg');
module.exports = class AuthController extends egg.Controller {
  async signin(ctx) {
    await ctx.renderClient('auth/home/signin.js', {});
  }
  async home(ctx) {
    const url = ctx.url.replace(/\/auth/, '');
    await ctx.render('auth/home/home.js', { ctx, url });
  }
  async detail(ctx) {
    const id = ctx.query.id;
    ctx.body = {};
    const result = this.service.auth.getInfo();
    await this.ctx.renderClient('auth/home/detail.js', result);
  }
};
