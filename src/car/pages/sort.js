import React, {useState, useEffect} from 'react'
import {deepCopy} from  '../../common/util'

var c_Num = [10,3,2,4,5,6,1];
//sort排序
function sort(){
    var [ num, setNum ] =  useState(c_Num);
    /**
     * 插入排序
     */
    const insertSort = (obj)=>{
        /**
         * 1.插入排序原则:
         *  1)选择数据一个一个比较，比它大就交换
         *  2)索引递增
         */
        var obj = JSON.parse(JSON.stringify(obj));
        for(var i = 1; i < obj.length; i++){

            var element = obj[i];
            for(var j = i - 1; j >= 0; j--){
                var tmp = obj[j];
                var order = tmp - element;
                if (order > 0) {
                    obj[j + 1] = tmp;
                } else {
                    break;
                }
            }
            obj[j + 1] = element;
        }
        return obj;
    }

    useEffect(() => {

    });

    return <div>
        <div onClick={()=>setNum((num)=>{return insertSort(num);})}>{c_Num.join(",")}插入排序{num.join(",")}</div>
    </div>
}

export default sort;
