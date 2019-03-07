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
            repeatArray: ['1','4','6','10','4','4','1']
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
    unqique(arr, isSorted){
        var newArr =  [];
        var middleVal;
        arr.map((item,index)=>{
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
    }

    render(){
        var {repeatArray} =  this.state;
        return <div>
                <div>数组去重</div>
                <div onClick={()=>{this.clearRepeat1()}}>1.数组的传统去重</div>
                <div onClick={()=>{this.sortArrayRepeat()}}>2.数组排序去重</div>
            <div onClick={()=>{this.unqique(repeatArray.sort(), true)}}>数组合并1,2</div>
        </div>
    }
}
