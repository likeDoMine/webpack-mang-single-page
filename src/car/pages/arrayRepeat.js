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

    twoSum(nums, target) {
        var start = 0 ;     //开始的索引
        var i = 1;  //执行开始的索引
        var result = [];

        if(!nums.length || typeof target === 'undefined'){
            return;
        }

        //开始轮训
        while(start <= nums.length - 1){

            if(nums[start] + nums[i] === target){
                result.push(start, i);
                break;
            }
            i++;
            if(i == nums.length){
                start = ++start;
                i = start+1;
            }
        }
        return result;
    };

    /**
     *类型判断
     * 1. javascript原来的类型
     * Undefined、Null、Boolean、Number、String、Object
     *  Object有分Function Array, Date, RegExp, Error等
     * 2.
     * typeof:
     * Object.prototype.toString.call()
     */
    Type(){
        //先测试基本类型验证
        var number = 1;          // prototype: [object Number]; typeof: 'number'
        var string = '123';      // prototype: [object String]; typeof: 'string'
        var boolean = true;      // prototype: [object Boolean];    typeof: 'boolean'
        var und = undefined;     // prototype: [object Undefined];  typeof: 'undefined'
        var nul = null;          // prototype: [object Null];   typeof: 'object'
        var obj = {a: 1}         // prototype: [object Object]; typeof: 'object'
        var array = [1, 2, 3];   // prototype: [object Array];  typeof: 'object'
        var date = new Date();   // prototype: [object Date];   typeof: 'object'
        var error = new Error(); // prototype: [object Error];  typeof: 'object'
        var reg = /a/g;          // prototype: [object RegExp]; typeof: 'object'
        var func = function a(){}; // prototype: [object Function]; typeof: 'function'

        let data = [number, string, boolean,und,nul, obj, array, date, error, reg,func];
        data.map((item,index)=>{
            //console.log(index, typeof item);
            this.typeFunc(item);
        })
    }

    typeFunc(obj){
        //普通类型用typeof, 引用类型用toString
        if(obj === null){
            return obj + "";
        }
        var class2type = {};

        // 生成class2type映射
        "Boolean Number String Function Array Date RegExp Object Error".split(" ").map(function(item, index) {
            class2type["[object " + item + "]"] = item.toLowerCase();
        })

        let type =  typeof obj === 'object' || typeof obj === 'function' ? class2type[Object.prototype.toString.call(obj)] || "object" : typeof obj;
        console.log(type);
    }

    //纯粹的对象
    //就是该对象是通过 "{}" 或 "new Object" 创建的，该对象含有零个或者多个键值对。
    isPlainObject(){



            // 上节中写 type 函数时，用来存放 toString 映射结果的对象
            var class2type = {};

            // 相当于 Object.prototype.toString
            var toString = class2type.toString;

            // 相当于 Object.prototype.hasOwnProperty
            var hasOwn = class2type.hasOwnProperty;
            var proto, Ctor;



            // 排除掉明显不是obj的以及一些宿主对象如Window
            if (!obj || toString.call(obj) !== "[object Object]") {
                return false;
            }

            /**
             * getPrototypeOf es5 方法，获取 obj 的原型
             * 以 new Object 创建的对象为例的话
             * obj.__proto__ === Object.prototype
             */
            proto = Object.getPrototypeOf(obj);

            // 没有原型的对象是纯粹的，Object.create(null) 就在这里返回 true
            if (!proto) {
                return true;
            }

            /**
             * 以下判断通过 new Object 方式创建的对象
             * 判断 proto 是否有 constructor 属性，如果有就让 Ctor 的值为 proto.constructor
             * 如果是 Object 函数创建的对象，Ctor 在这里就等于 Object 构造函数
             * hasOwn =  Function.prototype.toString
             */
            Ctor = hasOwn.call(proto, "constructor") && proto.constructor;

            // 在这里判断 Ctor 构造函数是不是 Object 构造函数，用于区分自定义构造函数和 Object 构造函数
            return typeof Ctor === "function" && hasOwn.toString.call(Ctor) === hasOwn.toString.call(Object);
    }

    //判断是不是空对象
    isEmptyObject(obj){
        var name;
        for ( name in obj ) {
            return false;
        }
        return true;


        console.log(isEmptyObject({})); // true
        console.log(isEmptyObject([])); // true
        console.log(isEmptyObject(null)); // true
        console.log(isEmptyObject(undefined)); // true
        console.log(isEmptyObject(1)); // true
        console.log(isEmptyObject('')); // true
        console.log(isEmptyObject(true)); // true
    }

    //判断是不是window对象
    isWindow( obj ) {
        return obj != null && obj === obj.window;
    }

    //函数柯里化
   curry(fn) {
        var args = [].slice.call(arguments,1);

        return function() {
            var newArgs = args.concat([].slice.call(arguments));
            return fn.apply(this, newArgs);
        };
    };

    add(a, b) {
        return a + b;
    }

    testCurry(){
        var addCurry = this.curry(this.add, 1, 2);
        console.log("test1",addCurry);

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
            <div onClick={()=>{this.twoSum([0,4,3,0],0)}}>两个数的和</div>
            <div onClick={()=>{this.Type()}}>类型判断</div>
           {/* <div onClick={()=>{this.isPlainObject()}}></div>*/}
           <div onClick={()=>{this.testCurry()}}>函数柯里化</div>
        </div>
    }
}
