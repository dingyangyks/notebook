
# HTML
## 三栏布局 
1.利用position定位
 左右盒子利用position：absolute配合LRTB进行定位；
 中间自适应的盒子利用左右边距确定来定位；
 ```css
    #adaptBox{
                position: absolute;
                left: 240px;/*左右边距确定*/
                right: 190px;
                width: auto;
                height:auto;
                border: 1px solid black;
                background-color: #fff;
    }
 ```
2.利用float定位
 左右盒子利用float，一个左浮动一个右浮动就能确定其位置
 ```css
  #leftBox{
            border: 1px solid black;
            background-color: #fff;
            float:left;
            width:200px;
            height:auto;
        }
  #rightBox{
            float:right;
            width: 120px;
            height: 800px;
            border: 1px solid black;
            background-color: #fff;
        }
 ```
 中间自适应盒子利用左右已经确定的盒子所产生的边距，通过margin来自适应其位置
 ```css
 #adaptBox{
            margin: 0px 140px 0 220px;
            border: 1px solid black;
            background-color: #fff;
        }
 ```
