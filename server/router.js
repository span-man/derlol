const router = require('koa-router')();
const allFunc = require('./allFunc.js')

router.get('/', function (ctx, next) {
    ctx.body = '111111111111';
});
router.post('/userLogin', async (ctx, next) => {
    console.log(ctx.request.body);
    let reqBody = ctx.request.body;
    ctx.body = await allFunc.userLogin(reqBody);
});
router.get('/getlinks', async (ctx, next) => {
    let reqBody = ctx.request.body;
    ctx.body = await allFunc.getLinks(reqBody);
});

module.exports = router;