import React,{ useState, useEffect } from 'react'

export default function upload(){

    this.state = {}

    const chooseImg = (e)=>{
        //获取文件对象，files是文件选取控件的属性，存储的是文件选取控件选取的文件对象，类型是一个数组
        var fileObj = e.target[0];
        //创建formdata对象，formData用来存储表单的数据，表单数据时以键值对形式存储的。
        var formData = new FormData();
        formData.append('file', fileObj);

    }

    return(<div>
        <form action="" enctype="multipart/form-data" method="post">
            <a>
                <span>修改头像</span>
                <input type="file"  accept="image/png,image/jpeg" onChange={(e)=>{chooseImg(e)}}/>
            </a>
        </form>
        <img src="" alt=""/>
    </div>)
}

