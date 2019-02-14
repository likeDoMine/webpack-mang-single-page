/*
   遍历文件目录
 */
const fs =  require("fs");

/**
 * 【遍历某文件下的文件目录】
 */
module.exports =  function getFilePath(path){
    let arr = [];
    let existPath = fs.existsSync(path); //是否存在目录
    if(existPath){
        let readdirSync = fs.readdirSync(path); //获取目录下的所有文件
        readdirSync.map((item)=>{
            let currentPath =   path + '/'+item;    //  path路径下的文件
            let isDirector =    fs.statSync(currentPath).isDirectory();  //判断是不是一个文件夹
            if(isDirector && item !== 'common'){// component目录下为组件 需要排除
                arr.push(item);
            }
        })
        return arr;
    }
}
