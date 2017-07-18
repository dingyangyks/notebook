# CSS  
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