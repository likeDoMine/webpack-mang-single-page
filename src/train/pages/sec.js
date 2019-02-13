/**
 * @project: 关于页面逻辑
 * @date: 2018-10-08
 */

import React, { Component } from "react";
import Nav from '../../common/component/nav';
import {Link} from 'react-router-dom';
export default class App extends Component {
  render() {
  	return (
  		<div>
  			<div className="about">
             我是train
          <p>and this is about page</p>
        </div>
      </div>
    );
  }
}
