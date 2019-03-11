/**
* @project:页面js主引文件
* @author: leinov
* @date: 2018-10-08
*/

import React from "react";
import ReactDOM from "react-dom";
import Router  from './router/index'
import App from './pages/app.js'
import "./index.less";

/**
 * review题
 * https://zhuanlan.zhihu.com/p/29599545    常见问题
 *  https://zhuanlan.zhihu.com/p/57380636   react面试题
 *  高级前端公众号中的面试题也还是很牛逼
 */
ReactDOM.render(<Router/>, document.getElementById("root"));
