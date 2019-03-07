import React from 'react'

/**
 * 数组去重的方法
 */
export default class ArrayRepeat extends React.Component{
    /**
     * 传统的数组去重
     * @returns {*}
     */
    constructor(){
        super();
        this.state = {
            repeatArray: [1,'A','a']||['1','4','6','10','4','4','1','a','A']
        }
    }

    clearRepeat1(){
        let ar =  [];
        this.state.repeatArray.map((item)=>{
            if(ar.indexOf(item)  === -1){
                ar.push(item);
            }
        })
    }

    //排序后去重数组
    sortArrayRepeat(){
        var arr = [];
        var sortedArray = this.state.repeatArray.concat().sort();   //对数组排序
        var seen;
        for (var i = 0, len = sortedArray.length; i < len; i++) {
            // 如果是第一个元素或者相邻的元素不相同
            if (!i || seen !== sortedArray[i]) {
                arr.push(sortedArray[i])
            }
            seen = sortedArray[i];
        }
    }

    //合并数组去重:1) 没有排序的用indexOf去重 2)去重了的用排序去重的方式
    /**
     * @param arr 需要去重的数组
     * @param isSorted  是否存在排序完成
     * @param iteratee 对数据进行处理,如果是字符串把字符串转化成小写去重
     */
    unqique(arr, isSorted, caseSensitive, iteratee){
        var newArr =  [];
        var middleVal;
        arr.map((item,index)=>{
            if(caseSensitive){
                item =  iteratee(item);
            }
            //这里首先验证是否为排序了，如果排序了则走排序(一定是排序了的数组)
            if(isSorted){
                if(!index ||  middleVal !== item){
                    newArr.push(item);
                }
                middleVal =  item;
            }

            if(newArr.indexOf(item) === -1){
                newArr.push(item);
            }
        })

        console.log(newArr);
    }

    //采用filter过滤数组
    filterArr(arr, isSort){
        /*
            item: 每一个元素
            index: 每一个元素对应的索引
            arr: 数组
         */

        let newArr =  arr.filter((item, index, arr)=>{

            if(isSort){
                //如果index为0||当前元素不等于上一个元素，就返回当前元素
                return !index || item !== arr[index - 1]
            }
            /**
             * arr.indexOf(item): 这个返回的是查到的最近的元素。
             * repeatArray: ['1','4','6','10','4','4','1','a','A']
             * 比如4 最近当前的元素的索引为1, 索引为1的4号此时
             * arr.indexOf(4)： 1; 此时正好索引也为轮训也为1表示目前是唯一的可以返回
             * 如果index为4号位置，此时arr.indexOf(4) === 1; 所以不会返回
             */
            return arr.indexOf(item) === index;
        })
    }

    /**
     * 对象的方式对数组去重
     * @constructor
     */

    /*ObjectClearArr(){

    }*/

    /**
     *  Es6的方式去重，
     *  Set：它的元素本身就是不让重复
     */

    Es6ClearArr(arr){
        return Array.from(new Set(arr))||[...new Set(arr)];
    }

    render(){
        var {repeatArray} =  this.state;
        return <div>
                <div>数组去重</div>
                <div onClick={()=>{this.clearRepeat1()}}>1.数组的传统去重</div>
                <div onClick={()=>{this.sortArrayRepeat()}}>2.数组排序去重</div>
            <div onClick={()=>{this.unqique(repeatArray, true, true,(item)=>{return typeof item == 'string' ? item.toLowerCase(): item})}}>数组合并1,2</div>
            <div onClick={()=>{this.filterArr(repeatArray)}}>filter的方式数组去重</div>
            {/*<div onClick={()=>{this.ObjectClearArr()}}>Object 键值对</div>*/}
            <div onClick={()=>{this.Es6ClearArr()}}>Es去重Set, Map</div>
        </div>
    }
}
