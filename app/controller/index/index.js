'usestrict';
const egg = require('egg');
module.exports = class IndexController extends egg.Controller {
  async index() {
    const bannerList = await this.service.main.getBannerList();
    // console.log('-------bannerList', bannerList);
    // const userInfo = await this.service.main.getUserInfo();
    // console.log('-------userInfo', userInfo);
    await this.ctx.render('index/index.js', { bannerList });
  }
};
