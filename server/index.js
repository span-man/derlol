let koa = require('koa');
const router = require('koa-router')();
let app = new koa();
const allFunc = require('./allFunc.js')

// 我们可以用下面的中间件理解app.use(cors({}))
app.use(async (ctx, next) => {
    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
    ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");
    ctx.set("Content-Type", "application/json;charset=utf-8");
    ctx.set("Access-Control-Allow-Credentials", true);
    ctx.set("Access-Control-Max-Age", 300);
    ctx.set("Access-Control-Expose-Headers", "myData");

    await next();
})


// 添加路由
router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>index page</h1>'
})

router.post('/userLogin', async (ctx, next) => {
    ctx.response.body = allFunc.userLogin()
})

router.get('/getLinks', async (ctx, next) => {
    ctx.response.body = allFunc.getLinks()
})

app.use(router.routes());

app.use((ctx, next) => {
    next(); // next不写会报错
    console.log(2)
});

app.use((ctx, next) => {
    console.log(1)
});

app.listen(2999,()=>{
    console.log('ok~')
});