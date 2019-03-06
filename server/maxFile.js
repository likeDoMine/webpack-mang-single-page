const path =  require('path');
const fs = require('fs');
var co = require('co')
//正常的获取文件
function cGetMaxFile (filePath, cb){
    fs.readdir(filePath, (err, files)=>{
        //console.log("file", err,files);
        //如果err 报错的话，则return、
        if(err) return cb(err);

        var counter = files.length-1; //读取的文件的个数
        var stats = []; //具体的详情， 用来存储

        files.forEach((file, index)=>{
            //每一个文件依次去获取文件信息
            fs.stat(path.join(filePath, file), function(er, stat){
                if(er){ return cb(er)}
                stats[index] =  stat;    //存储每一个文件的具体信息

                //代表是最后一个文件时，则执行筛选工作
                if(index === counter-1 ){
                    //首先要判断读取到的路径是不是文件,是文件才读取信息
                    let largest = stats.filter(function(stat) { return stat.isFile() }).reduce(function (prev, next){
                        if(prev.size > next.size) return prev;
                        return next;
                    })

                    //得到值成功回调
                    cb(null,largest )
                }
            })
        })
    })
}

//通过promise验证
function pGetMaxFile(filePath){
    //第一步需要去获取文件列表
    const readDir =  function (dir){
        return new Promise((resolve, reject)=>{
            fs.readdir(dir,(err, files)=>{
                if(err) reject(err);
                //得到所有文件的路径集合
                resolve(files);
            })
        })
    }
    //第二部需要去获取单个文件的具体大小详情
    const stat =  function (path){
        return new Promise((resolve, reject)=>{
            //获取单个文件的具体信息
            fs.stat(path,(err,stat)=>{
                if(err) reject(err);
                resolve(stat);
            })
        })

    }

    return readDir(filePath)
    .then(files=>{
        //得到了所有的文件，
        //需要想办法把所有的文件转化成文件详情数组，然后返回
        let promises =  files.map((file)=>stat(path.join(filePath, file)))
        return Promise.all(promises).then((stats)=>{
            //这里就会得到所有的file的详情， 然后进行比较
            return {stats}
        })
    }).then(({stats})=>{
        let largest = stats.filter((stat)=>{return stat.isFile()})
        .reduce((prev, next)=>{
            if(prev.size > next.size) return prev;
            return next;
        })
        return largest
    })
}

//Generator： 调用

function *gGetMaxFile(filepath){
    //第一步需要去获取文件列表
    const readDir =  function (dir){
        return new Promise((resolve, reject)=>{
            fs.readdir(dir,(err, files)=>{
                if(err) reject(err);
                //得到所有文件的路径集合
                resolve(files);
            })
        })
    }
    //第二部需要去获取单个文件的具体大小详情
    const stat =  function (path){
        return new Promise((resolve, reject)=>{
            //获取单个文件的具体信息
            fs.stat(path,(err,stat)=>{
                if(err) reject(err);
                resolve(stat);
            })
        })
    }

    const files =  yield readDir(filepath);
    const stats =  yield files.map((file)=>{
        return stat(path.join(filepath, file));
    })

    let largest = stats
    .filter(function(stat) { return stat.isFile() })
    .reduce((prev, next) => {
        if (prev.size > next.size) return prev
        return next
    })
    return largest;

}


//Async测试
async function aGetMaxFile(filePath){
    //读取文件路径
    const readDir =  (filePath)=>{
        return new  Promise((resolve, reject)=>{
            fs.readdir(filePath,(err, files)=>{
                if(err) reject(err);
                resolve(files);
            })
        })
    }

    //根据文件路径获取文件详细信息
    const stat =  (filePath)=>{
        return new Promise((resolve, reject)=>{
            fs.stat(filePath,(err, stat)=>{
                if(err) reject(err);
                resolve(stat);
            })
        })
    }

    //依次获取

    let files = await  readDir(filePath);
    let promises= files.map((file)=>stat(path.join(filePath,file)));

    let stats =  await  Promise.all(promises);
    let largest =  stats.filter((stat)=>{return stat.isFile()})
    .reduce((prev, next)=>{
        if(prev.size>next.size) return prev;
        return next;
    })
    return largest;
}


const PromiseTest = ()=>{
    //常规的回调函数
    /*cGetMaxFile('./dist/train', (err, file)=>{
        //成功调用并得到对象
        console.log("err", err, file);
    })*/
   /* pGetMaxFile('./dist/train').then((data)=>{
        console.log("data", data);
    });*/
   //通过这样的方式来调用
    /*co(gGetMaxFile,'./dist/train' ).then((data)=>{
        console.log("data", data);
    }).catch(function(error) {
        console.log(error);
    });*/

    //aGetMaxFile
    aGetMaxFile('./dist/train').then((maxfile)=>{
        console.log("maxFile", maxfile);
    }).catch(function(error) {
        console.log(error);
    });
}

module.exports = PromiseTest
