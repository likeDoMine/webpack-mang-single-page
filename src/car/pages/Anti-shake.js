import React, { useState, useEffect } from 'react'

/**
 * 做一个防抖测试:
 * 防止频繁执行一个动作
 */
//制定一个防抖的算法
// 第二版
function debounce(func, wait, immediate) {

    var timeout;
    return function () {
        var context = this; //这里this也是没有的了,undefined, 因为全局方法，严格模式下，this为undefined
        var args = arguments;

        if (timeout) clearTimeout(timeout);
        // console.log("我会执行几遍");
        //这里是延迟执行，由于上一次还没有执行就已经被清除了，所以会等最后一次执行之后执行
        timeout = setTimeout(function(){
            func.apply(context, args);
        }, wait);
    }
}

/**
 * 节流: 每隔一段时间，只执行一次事件
 *  执行某个动作的时候，要先判断执行的频率是够在我们控制的时间内
 *  两种实现的方法
 * @returns {*}
 * @constructor
 */



function Anti_shake (){

    const [dec, useDec] =  useState(0); //设置初始值

    return <div id='container' style={{"height":'100%'}} >
        <input type="text" onChange={debounce(()=>{useDec(dec+1)},1000, true)}/>
        <div>{dec}</div>
    </div>
}

export default Anti_shake;



