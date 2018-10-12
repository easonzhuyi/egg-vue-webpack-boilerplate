'use strict';
const { forEach, trim, omit } = require('lodash');

module.exports = {
  /**
   * merge the cookies (contain setCookie, expires...).
   * @method Helper#paraseCookieFragment
   * @param {String} name - cookie Name
   *
   * @example
   * ```js
   */
  paraseCookieFragment(cookieString) {
    const optionList = cookieString.split(';');
    const [key, value] = optionList[0].split('=');
    const remainOptionList = optionList.slice(1);
    const options = {};
    forEach(remainOptionList, (item) => {
      const [optionKey, optionValue] = trim(item).split('=');
      if (optionKey === 'Expires') {
        options[optionKey.toLowerCase()] = new Date(optionValue);
      } else {
        options[optionKey.toLowerCase()] = optionValue;
      }
    });
    console.log('-----options', options);
    this.ctx.cookies.set(key, value, {
      ...options,
      overwrite: true,
      // httpOnly: false,
      signed: false,
    });
  },
  /**
   * axios gateway. reset cookies.
   * @method Helper#mergeAxiosHeader
   * @param {Object} axios response headers
   *
   * @example
   * ```js
   */
  mergeAxiosHeaders(headers) {
    // console.log('------headers', headers);
    const usefulHeader = omit(headers, ['content-type']);
    // console.log('------usefulHeader', usefulHeader);
    this.ctx.set(usefulHeader);
    // this.ctx.response.headers = res.headers;

    const responseCookie = headers['set-cookie'];
    // console.log('---- responseCookie', responseCookie);
    for (let i = 0; i < responseCookie.length; i++) {
      this.paraseCookieFragment(responseCookie[i]);
      // let oneCookie = responseCookie[i];
      // oneCookie = oneCookie.split(';');
      // const oneCookieArr = oneCookie[0].split('=');
      // console.log('------oneCookieArr', oneCookieArr);
      // this.ctx.cookies.set(oneCookieArr[0], oneCookieArr[1], {
      //   overwrite: true,
      //   httpOnly: false,
      //   signed: false,
      // });
    }
  },
};
