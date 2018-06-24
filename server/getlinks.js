




let koa = require('koa');
const router = require('koa-router')();
let app = new koa();

app.use((ctx, next) => {
    router.get('/', function (ctx, next) {
        ctx.body = 'this a users response!';
    });
    next(); // next不写会报错
    console.log(5)
});

app.use((ctx, next) => {
    console.log(2)
    next();
    console.log(4)
});

app.use((ctx, next) => {
    // router.get('/', function (ctx, next) {
    //     ctx.body = 'this a users response!';
    // });
    ctx.body = 'this a users response!';
});

app.listen(2999);