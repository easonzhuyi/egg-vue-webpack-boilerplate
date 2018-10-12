'usestrict';
const egg = require('egg');
module.exports = class MiddleController extends egg.Controller {
  async notfound() {
    await this.ctx.render('middle/notfound.js');
  }
};
