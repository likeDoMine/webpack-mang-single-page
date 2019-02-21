/**
 * @project: 关于页面逻辑
 * @date: 2018-10-08
 */

import React, { useState, useEffect, useRef } from "react";
import Nav from '../../common/component/nav';
import {Link} from 'react-router-dom';

export default function App (){
    const inputEl = useRef(null);
    /**
     * 1. 防抖
     *   触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
     * * 思路：
     *   每次触发事件时都取消之前的延时调用方法
     * @param fn
     * @returns {Function}
     */
    const debounce =  (fn)=>{
        let timeout = null; // 创建一个标记用来存放定时器的返回值
        return function () {
            clearTimeout(timeout); // 每当用户输入的时候把前一个 setTimeout clear 掉
            timeout = setTimeout(() => { // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
                fn.apply(this, arguments);
            }, 500);
        };
    }

    const sayHi = ()=>{
        console.log('防抖成功');
    }

    const throttle = (fn)=>{
        let canRun = true;  //通过闭包保存一个标记
        return function (){
            if(!canRun) return; //在函数开头判断标记是否为true, 不为true则return
            canRun = false;
            setTimeout(()=>{
                //将外部传入的函数的执行放在setTimeout中
                fn.apply(this, arguments);
                // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。
                // 当定时器没有执行的时候标记永远是false，在开头被return掉
                canRun =  true;
            },500)
        }
    }

    const throttleSayHi = (e)=>{
        console.log(e.target.innerWidth, e.target.innerHeight);
    }

    useEffect(()=>{
        //console.log("inputEl",inputEl);
        //做input的处理
        if(inputEl.current){
           // console.log("inputEl",inputEl);
            inputEl.current.addEventListener('input', debounce(sayHi))
        }
        /**
         * 验证节流处理
         */
        window.addEventListener("resize", throttle(throttleSayHi));
    })



    const onButtonClick = () => {
        // `current` points to the mounted text input element
        inputEl.current.focus();
    };

    return (
        <div>
            <div className="about">
                我是train
                <p>and this is about page</p>
                <input type='text'  ref={inputEl} />
                <button onClick={onButtonClick}>Focus the input</button>
            </div>
        </div>
    );
}
