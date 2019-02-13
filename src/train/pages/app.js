/**
 * @project: 关于页面逻辑
 * @author: leinov
 * @date: 2018-10-08
 */

import React, { Component } from "react";
import Nav from '../../common/component/nav';
import  aboutpic from '../images/about.jpg'
import {Link}  from 'react-router-dom';

export default class App extends Component {
  render() {
  	return (
  		<div>
  			<Nav />
  			<div className="about">
  				<img src={aboutpic} />
                <Link to='/sec'><p>and this is about page</p></Link>
        </div>
      </div>
    );
  }
}
