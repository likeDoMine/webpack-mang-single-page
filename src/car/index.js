/**
* @project:页面js主引文件
* @author: leinov
* @date: 2018-10-08
*/

import React from "react";
import ReactDOM from "react-dom";
import Router  from './router/index'
import App from './pages/app.js'
import "./index.scss";

ReactDOM.render(<Router />, document.getElementById("root"));
