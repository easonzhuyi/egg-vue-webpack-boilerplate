'usestrict';
const egg = require('egg');
module.exports = class productController extends egg.Controller {
  async index(ctx) {
    const result = this.service.product.getProductList();
    await this.ctx.render('product/index.js', result);
  }

  async client() {
    const id = this.ctx.query.id;
    const result = this.service.product.getProductDetail(id);
    await this.ctx.render('product/detail.js', result);
  }

};
