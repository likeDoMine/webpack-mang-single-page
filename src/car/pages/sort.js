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
     * 最好情况：数组升序排列，时间复杂度为：O(n)
     * 最坏情况：数组降序排列，时间复杂度为：O(n²)
     * 插入排序是稳定的算法
     * 优势:
     *  当数组是快要排序好的状态或者问题规模比较小的时候，插入排序效率更高。
     * 这也是为什么 v8 会在数组长度小于等于 10 的时候采用插入排序。。
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

    /**
     * 快速排序
     *
     * 选择一个元素作为"基准"
     * 小于"基准"的元素，都移到"基准"的左边；大于"基准"的元素，都移到"基准"的右边。
     * 对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。
     */
    const fastSort = (arr)=>{

        //console.log(arr.push(100));
      /**
       * 这里不能直接修改arr的值
       * @type {any}
       */
       var arr = JSON.parse(JSON.stringify(arr));

        // 交换元素
        function swap(arr, a, b) {
            var temp = arr[a];
            arr[a] = arr[b];
            arr[b] = temp;
        }

        /**
         * @param arr： 完整数组
         * @param left  :左边第一个索引
         * @param right ：数组的长度
         * @returns {*}
         */
        function partition(arr, left, right) {
            //第一个值 如果是上面的数组，则就是10
            var pivot = arr[left];  //10
            //索引值0
            var storeIndex = left;

            /**
             *  i: 从第二个开始;
             *  依次与第一个比较
             */
            for (var i = left + 1; i <= right; i++) {

                //3<10 //交换循序
                if (arr[i] < pivot) {
                    swap(arr, ++storeIndex, i);
                }
            }

            swap(arr, left, storeIndex);

            return storeIndex;
        }

        function sort(arr, left, right) {

            /**
             * 验证索引left必须小于right;
             * 证明：整个数组存在，并且长度至少大于1
             */
            if (left < right) {

                //管理从第一个位置开始的索引(元素开始的位置)
                var storeIndex = partition(arr, left, right);

                //得到的中间位置出来的左边开始排序
                sort(arr, left, storeIndex - 1);

                //storeIndex到最右边之间的元素依次排序
                sort(arr, storeIndex + 1, right);
            }

        }

        /**
         * 这里传入q
         * 1.arr: 起始数组
         */
        sort(arr, 0, arr.length - 1);
        return arr;
    }


    useEffect(() => {

    });

    return <div>
        <div onClick={()=>setNum((num)=>{return insertSort(num);})}>{c_Num.join(",")}插入排序{num.join(",")}</div>
        <div onClick={()=>setNum((num)=>{return fastSort(num)})}>{c_Num.join(",")}快速排序{num.join(",")}</div>
    </div>
}

export default sort;
