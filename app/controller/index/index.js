'usestrict';
const egg = require('egg');
module.exports = class IndexController extends egg.Controller {
  async index() {
    const result = this.service.auth.getStatus();
    await this.ctx.render('index/index.js', result);
  }
};
