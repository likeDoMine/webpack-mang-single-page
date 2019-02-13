/**
 * @project: 关于页面逻辑
 * @date: 2018-10-08
 */

import React, { Component } from "react";
import Nav from '../../component/nav';
import {Link} from 'react-router-dom';
export default class App extends Component {
  render() {
  	return (
  		<div>
  			{/*<Nav />*/}
  			<div className="about">
                我是sec
          <p>and this is about page</p>
        </div>
      </div>
    );
  }
}
