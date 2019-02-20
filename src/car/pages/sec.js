/**
 * @project: 关于页面逻辑
 * @date: 2018-10-08
 */

import React, {useState, useEffect } from "react";
import Nav from '../../common/component/nav';
import {Link} from 'react-router-dom';
import { useSpring, animated as anim } from 'react-spring'
import '../common/css/index.less'

export  default function App(){
    const [users, setUsers] =  useState([]);    //设置初始化值
    useEffect(()=>{
        fetch("https://api.github.com/users")
        .then(response => response.json())
        .then(data => {
           // console.log("data", data);
            setUsers(data);
        });
    },[])

    return <div>
        {users.map(user => (
            <div key={user.id} className="card">
                <h5>{user.login}</h5>
            </div>
        ))}
    </div>
}
