const httpProxy = require('http-proxy-middleware');
const k2c = require('koa2-connect');

// function relayRequestHeaders(proxyReq, req) {
//   Object.keys(req.headers).forEach(function(key) {
//     console.log('proxyReq', proxyReq);
//     proxyReq.setHeader(key, req.headers[key]);
//   });
// }

// function relayResponseHeaders(proxyRes, req, res) {
//   Object.keys(proxyRes.headers).forEach(function(key) {
//     console.log(key);
//     res.setHeader(key, proxyRes.headers[key]);
//   });
//   console.log(res);
// }

module.exports = () => {
  const proxyInstance = k2c(httpProxy({
    target: 'https://young-uat.juntianbroker.com',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '',
    },
    // onProxyReq: relayRequestHeaders,
    // onProxyRes: relayResponseHeaders
  }));

  return async function(ctx, next) {
    if (/^\/api\/.*/.test(ctx.request.url)) {
      proxyInstance(ctx, next);
    } else {
      await next();
    }
  };
};
