/**
 * @project: 关于页面逻辑
 * @date: 2018-10-08
 */

import React, { useState, useEffect,useContext,useReducer  } from 'react';
import Nav from '../../common/component/nav';
import Friends from '../../common/component/FriendListItem';
import {Link} from 'react-router-dom';
import  aboutpic from '../images/about.jpg'

/**
 * useState 是 State Hook 的 API。
 * 入参是 initialState，返回一个 数组，第一值是 state，第二个值是改变 state 的函数。
 *
 * @returns {*}
 * @constructor
 */
/**
 * 这里抽离一个自定义的组件(hooks的插销)
 * @returns {*}
 * @constructor
 */
function useFriendStatus(status){
    const [color, setColor] =  useState(0);
    useEffect(()=>{
        setColor(status);
        return ()=>{

        }
    })
    return color;
}

/**
 * 想要操作多个对象,在hooks中需要借助多个useReducer
 * @returns {*}
 * @constructor
 */
const initialState = {count: 0, time:0};

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error();
    }
}

function App(){

    const status = useFriendStatus(1);

    /*const [count, setCount] = useState(()=>{
        //console.log("我的执行");
        return 0;
    });*/
    // let  [time, setInter] = useState(1)
    /**
     * 1.第一个参数是执行的方法
     * 2.第二个参数是代表只有某些参数发生改变的时候。 这个方法就会执行
     */
    useEffect(()=>{
       // console.log("当我们----------")
        // Similar to componentDidMount and componentDidUpdate:
       // document.title = `You clicked ${count} times`;
        // setCount(count + 1);
        //return setCount(count + 1);
       /*setInter(()=>{
            setInterval(()=>{
                console.log("时间")
            },300)
        });*/
        //const context = useContext();
        //console.log("context", context);

        return function cleanup() {
            // Similar to componentWillUnMount。Named as clear up effect
            //clearInterval(time);
            console.log("清除计数器等，避免会内存泄露")
        }
    })
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <p>You clicked {state.count} times</p>
            <button onClick={() =>  dispatch({type: 'increment'})}>
                Click me
            </button>
            <Link to='/sec'><p>我要跳转</p></Link>
            <Friends friend={{"name":'11',id:'1'}}></Friends>
            {status?'我在线':'我不在线'}
        </div>
    );
}

export default  App;

