const Koa = require('koa');
const app = new Koa();
const path =  require("path");
const serve = require('koa-static');

// 1.主页静态网页 把静态页统一放到public中管理
// 3.分配路由
//console.log("_firName", __dirname);
app.use(serve(path.join(__dirname,'../dist/')));

/*app.use(async function({method,url, req, res}) {

    /!*if(method === 'GET'){
        //这里做一个处理
        if(url === "/"){
            //res.redirect(path.resolve(__dirname+"/dist", 'car', 'index.html'))
        }
    }*!/
    ctx.body = 'Hello World';
});*/

app.listen(3000);
