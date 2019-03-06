const Koa = require('koa');
const app = new Koa();
const path =  require("path");
const serve = require('koa-static');
const views = require('koa-views');
const fs = require('fs');
const maxFile =  require('./maxFile');

//获取文件的测试(最大文件)
maxFile();

// 1.主页静态网页 把静态页统一放到public中管理
app.use(serve(path.join(__dirname,'../dist/')));

app.use(views(path.resolve('./dist/car'), { map: { html: 'html' } }))

/*app.use(async function(ctx) {
   /!* if(method === 'GET'){
        //这里做一个处理
        if(url === "/"){
           // res.redirect(path.resolve(__dirname+"/dist", 'car', 'index.html'))
        }
    }*!/
    ctx.body = 'Hello World';
});*/

/*
app.use(async ctx => {
    var str = renderToString(<App></App>)
    await ctx.render('index', {
        root: str
    })
})

*/


app.listen(3000);
