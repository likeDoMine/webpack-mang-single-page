import React, {useState, useEffect} from'react';
const  ArrayRepeat =  ()=>{
    let x = 'Hi', y = 'Kevin';
    const [str, revertStr] = useState();
    const message =  (literals, ...values)=>{
        //debugger;
        let result = literals.reduce((prev, next, i) => {
           // debugger
            let value = values[i - 1];
            console.log(prev + value + next);
            return prev + value + next;
        })
        console.log("result", result);
    }
    useEffect(()=>{
       // console.log("111")
        message`${x}, I am ${y}`
    });



    return <div>
        <div>数组去重demo</div>
         <div></div>
    </div>
}

export default ArrayRepeat;


