import React, {useState, useEffect} from'react';
const  ArrayRepeat =  ()=>{
    let x = 'Hi', y = 'Kevin';
    const [str, revertStr] = useState();
    const message =  (literals, ...values)=>{
        //debugger;
        let result = literals.reduce((prev, next, i) => {
           // debugger
            let value = values[i - 1];
           // console.log(prev + value + next);
            return prev + value + next;
        })
        //console.log("result", result);
    }
    useEffect(()=>{
       // console.log("111")
        //采用模板消息调用
        //message`${x}, I am ${y}`
    });
    const  forOf = (obj, cb)=>{
        let iterable, result;
        if(typeof obj[Symbol.iterator] != 'function')throw new TypeError(result + " is not iterable");
        if(typeof cb !== 'function') throw new TypeError("cb must be callable");

        iterable =  obj[Symbol.iterator]();
        result = iterable.next();	//next执行的就是默认迭代器，如果不存在的话就会返回undefined
        while (!result.done) {
            cb(result.value);
            result = iterable.next();   //每一步去执行，则result就会被重新赋值，
        }
    }

    const ForOf = ()=>{
        //for..of测试
        /*const obj={
            value: 1
        }*/
        const obj= ["red", "green", "blue"];
        //自己的
        /*for(let value of obj){
            console.log("value",value); //得到正确答案
        }*/
        forOf([1,2,3],(data)=>console.log("data",data)) //得到每一个值
    }
    const TestLoop = ()=>{
        var colors = ["red", "green", "blue"];
        let keys = colors.keys()// Array Iterator
        let values =  colors.values();
        let  entries =  colors.entries()
    }

    function *generatorT(){
        //console.log("有没有我");
        var url =  'https://api.github.com/users/github';
        var result = yield fetch(url);
    }

    function gen(){
        const g =  gen();
        const result =  g.next();

        result.value.then(function(data){
            return data.json();
        }).then(function(data){
            g.next(data);
        });
    }

    return <div>
        <div>数组去重demo</div>
        <div onClick={()=>{ForOf()}}> for ... of循环测试</div>
        <div onClick={()=>{TestLoop()}}>entries, keys, values</div>
        <div onClick={()=>{gen()}}>generatorT</div>
    </div>
}

export default ArrayRepeat;


