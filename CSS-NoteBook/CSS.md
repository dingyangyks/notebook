# CSS  
## **position定位**  
1.position：absolute；绝对定位  
  position：absolute脱离文本流，不会撑开body；相对于父元素定位， **不受父元素padding的影响**   
  * 如果存在父元素，父元素要设置position属性（absolute/relative），且要设置lrtb值，缺一不可，才能使子元素进入父元素内部。

  * 如果不存在父元素， position：absolute是以浏览器左上角为坐标原点开始定位而不是body；但是当body的margin：0；时body等于浏览器窗口。

  * 如果存在LRTB，则不受父元素padding的影响，  
  ```css
     #div1{
        position: absolute;
        left: 0px;
        top: 0px;
        width: 150px;
        height: 150px;
        background-color: red;
        }
    body{
        padding: 10px
        }
  ```
  结果如下：
   ![图片](https://ooo.0o0.ooo/2017/06/26/5950c2fb096e0.png)

  如果不存在，则受padding影响。
  ```css
     #div1{
        position: absolute;
        /*left: 0px;
        top: 0px;*/
        width: 150px;
        height: 150px;
        background-color: red;
        }
    body{
        padding: 10px
        }
  ```
  结果如下：    
  ![图片](https://ooo.0o0.ooo/2017/06/26/5950c2331ceef.png)  
  
2.position：relative；相对定位   
position：relative不脱离文本流，会撑开body；相对于父元素定位，  
**受父元素padding的影响** 
*  无论父级存在不存在，无论有没有TRBL，均是以父级的左上角进行定位，但是父级的Padding属性会对其影响。

* 如果父元素不存在，则父元素默认为body，此时会以body的左上角为原点进行定位，如果body存在margin则不是浏览器的左上角为原点。

* 如果用position来布局页面，父级元素的position属性必须为relative，而定位于父级内部某个位置的元素，最好用 absolute，因为它不受父级元素的padding的属性影响，当然你也可以用position，不过到时候计算的时候不要忘记padding的值    

3.position：staic；静态定位  
指定元素使用正常的布局行为，即元素在文档流中当前的布局位置。此时 top, right, bottom, left 和 z-index 属性无效。
  
4.position：fixed；固定定位   
相对于浏览器窗口定位，且不会随着滚动条的移动而变化

## 利用hover改变其他元素  
 用`hover`不单单可以改变使用它的元素，还可以改变其他元素；不过是有限定条件的：  
 * 要改变得元素是使用`hover`的子元素
 * 要改变得元素是使用`hover`的兄弟元素，且放置在使用`hover`元素的后  边
 如下面的例子
    ```html
    <style>
        #a:hover {color : #FFFF00;}
        #a:hover > #b:first-child{color : #FF0000;}    
        #a:hover > #b{color : #FF00FF;}  
        #a:hover + #c{color : #00FF00;}
        #a:hover + #c > #b{color : #0000FF;}
    </style>
    <div id='a'>元素1
    <div id='b'>元素2</div>
    <div id='b'>元素2</div>
    </div>
    <div id='c'>元素3
    <div id='b'>元素2</div>
    </div>
    ```
    
  `>` 表示父子关系,`+` 表示兄弟关系，  
  ```css
        #e:hover + #f{
            color : #0000FF;
        }
        #f:hover + #e{/*指向后年改不了前面  为啥*/
            color : #0000FF;
        }
  ```  

  ```html
    <div id='e'>元素22222</div>
    <div id='f'>元素333333</div>
  ```  
  用`+`这样写，会产生，滑动到前一个元素会改变后一个元素的样式，**但反之却不行**