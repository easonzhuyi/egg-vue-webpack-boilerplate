const { pick, isEmpty } = require('lodash');
module.exports = () => {
  return async function notFoundHandler(ctx, next) {
    const usefulHeader = pick(ctx.response.headers, ['set-cookie']);
    console.log('-----ctx.response.headers', ctx.response.headers);
    if (!isEmpty(usefulHeader)) {
      ctx.set(usefulHeader);
    }
    await next();
    if (ctx.status === 404 && !ctx.body) {
      if (ctx.acceptJSON) {
        ctx.body = { error: 'Not Found !' };
      } else {
        ctx.redirect('/notfound');
      }
    }
  };
};
