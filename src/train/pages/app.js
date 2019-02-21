/**
 * @project: 关于页面逻辑
 * @author: leinov
 * @date: 2018-10-08
 */

import React, { Component,useState, useEffect } from "react";
import Nav from '../../common/component/nav';
import  aboutpic from '../images/about.jpg'
import {Link}  from 'react-router-dom';

import { useSpring, animated,path, Donut} from 'react-spring'

export default function app(){
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });
    const propsLine = useSpring({ number: 1, from: { number: 0 } });

  	return (
  		<div>
  			<Nav />
  			<div className="about">
  				<img src={aboutpic} />
                <Link to='/sec'><p>and this is about page</p></Link>
                <animated.div style={props}>I will fade in</animated.div>
                <animated.span>{propsLine.number}</animated.span>

            </div>
      </div>
    );
}
