/*
    线上程序
 */
var express =  require("express");  //定义一个服务
var app =  express();
var http =  require("http");    //建立http协议
var port =  '3118';             //定义一个端口
const opn =  require('opn');    //在浏览器中打开 下面执行
const path =  require('path');
//启动压缩
var compression =  require("compression");
app.use(compression());

//静态页面路径
app.use(express.static('./dist'));
app.set('port', port);
//设置模板
app.get('*', function (req, res,next){
    let pathArray =  req.path.split("/"),pathName='';
    for(let i = 0; i < pathArray.length; i++){
        if(pathArray[i]){
            pathName =  pathArray[i];
            break;
        }
    }
    res.sendFile(path.resolve(__dirname+"/dist", pathName, 'index.html'))
})

app.use('/api/wxjs', function(req, res, next){

})
//启动server
var server = http.createServer(app);
server.listen(port);



function onListening() {
    console.log(`server port 3118 listening and open browser with http://localhost:${port}....` );
    opn(`http://localhost:${port}`,"chrome");
}

//监听服务
server.on("listening", onListening);

