/**
 * @project: 关于页面逻辑
 * @date: 2018-10-08
 */

import React, { Component } from "react";
import Nav from '../../common/component/nav';
import {Link} from 'react-router-dom';
import  aboutpic from '../images/about.jpg'
export default class App extends Component {
  render() {

  	return (
  		<div>
  			<Nav />
  			<div className="about">
               {/* <Link to={{path:'/sec'}}><img src={aboutpic}/></Link>*/}
                <Link to='/sec'><p>and this is about page</p></Link>
        </div>
      </div>
    );
  }
}
