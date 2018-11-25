const getFilePath =  require('./getFilePath');

//主要是可以所有的entry,配置
module.exports =  function getEnty(path){
    let entry = {};
    getFilePath(path).map((item)=>{
        entry[`${item}/${item}`] = `${path}/${item}/index.js`
    });
    return entry;
}