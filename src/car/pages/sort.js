import React, {useState, useEffect} from 'react'

//sort排序
function sort(){
    let [ num, setNum ] =  useState([10,3,2,4,5,6,1]);
    const c_Num =  num.concat();
    /**
     * 插入排序
     */
    const insertSort = ()=>{
        /**
         * 1.插入排序原则:
         *  1)选择数据一个一个比较，比它大就交换
         *  2)索引递增
         */
        for(var i = 1; i < num.length; i++){

            var element = num[i];
            for(var j = i - 1; j >= 0; j++){
                var tmp = num[j];
                var order = tmp - element;
                if (order > 0) {
                    num[j + 1] = tmp;
                } else {
                    break;
                }
            }
        }
        return num;
    }

    return <div>
        <div onClick={()=>{setNum(this.insertSort)}}>{c_Num}插入排序{num}</div>
    </div>
}
