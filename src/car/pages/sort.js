import React, {useState, useEffect} from 'react'
import {deepCopy} from  '../../common/util'

var c_Num = [10,3,2,4,5,6,1];
//sort排序
function sort(){
    var [ num, setNum ] =  useState(c_Num);
    /**
     * 插入排序:
     * 时间复杂度:指执行算法所需要的计算工作量，它考察当输入值大小趋近无穷时的情况，一般情况下，
     * 算法中基本操作重复执行的次数是问题规模 n 的某个函数。
     *
     */
    const insertSort = (obj)=>{
        /**
         * 1.插入排序原则:
         *  1)选择数据一个一个比较，比它大就交换
         *  2)索引递增
         */
        var obj = JSON.parse(JSON.stringify(obj));

        for(var i = 1; i < obj.length; i++){

            //从第二位获取
            var element = obj[i];
            for(var j = i-1; j >= 0; j--){
                let temp =  obj[j];
                if(temp > element){
                    obj[j+1] = temp;
                }else{
                    break;
                }
            }
            //将最后一个值恢复到最初值
            obj[j+1] =  element;
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
