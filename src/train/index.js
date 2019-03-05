/**
* @project:页面js主引文件
* @author: leinov
* @date: 2018-10-08
*/

import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Router from './router/index'
function *generatorT(){
    var url =  'https://api.github.com/users/github';
    var result = yield fetch(url);
    //console.log("result", result)
}
generatorT();

ReactDOM.render(<Router />, document.getElementById("root"));
