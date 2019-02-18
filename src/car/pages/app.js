/**
 * @project: 关于页面逻辑
 * @date: 2018-10-08
 */

import React, { useState, useEffect  } from 'react';
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
function App(){
    const [count, setCount] = useState(()=>{
        //console.log("我的执行");
        return 0;
    });
    let  [time, setInter] = useState(()=>{
        return null;
    })

    useEffect(()=>{
        //console.log("我执行了没有。。。。")
        // Similar to componentDidMount and componentDidUpdate:
        document.title = `You clicked ${count} times`;
        // setCount(count + 1);
        //return setCount(count + 1);
       /*setInter(()=>{
            setInterval(()=>{
                console.log("时间")
            },300)
        });*/

        return () => {
            // Similar to componentWillUnMount。Named as clear up effect
            //clearInterval(time);
        }
    })

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(()=>{
                return count + 1
            })}>
                Click me
            </button>
            <Link to='/sec'><p>我要跳转</p></Link>
            <Friends friend={{"name":'11',id:'1'}}></Friends>
        </div>
    );
}

export default  App;
/*export default class App extends Component {
  render() {

  	return (
  		<div>
  			<Nav />
  			<div className="about">
               {/!* <Link to={{path:'/sec'}}><img src={aboutpic}/></Link>*!/}
                <Link to='/sec'><p>and this is about page</p></Link>
        </div>
      </div>
    );
  }
}*/
