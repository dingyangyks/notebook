# position属性 

 CSS中的position是用来设置元素的**定位类型**。  
 它可能的值可以是：
  * position：static；(默认值)
  * position：absolute；(绝对定位)
  * position：relative；(相对定位)
  * position：fixed；(固定定位)  
 
 首先，要知道一个概念**文档流**  
  文档流简单的说就是文档中元素的排列方式，像文章一样从上到下从左往右的依次排列，所以称为文档流。  
  在文档流里，**块级元素**会独占一行，**行内元素**会从左往右依次排列。 排列如图所示，对行内元素设置宽高，内外边距都是无效的： 
    
  ![图片](http://www.lvyestudy.com/App_images/lesson/cj/12-1-1.png)    

## 1.position：static；
  它是一个元素定位类型的默认值，即按照正常文档流定位时的位置，如果一个元素没有设置position属性，那么他的值就为默认的static，
## 2.position：absolute；绝对定位    
 * 首先要记住，**绝对定位会使元素脱离文档流**，他会凌驾于正常文档流之上，不会在撑开body。  
  
 * 绝对定位是相对与父元素定位的，但是这个父元素的position必须不是static才可以。它从它的父级元素开始查找position，如果父级元素的position值为static就跳过继续向上查找。 

 如下代码：  
 ```html
    <div id="div3">
            <div class="div2"></div>
            <div class="div2">
                <div id="div1"></div>
            </div>
            <div class="div2"></div>
    </div>
 ```  
 以上的html布局我们可以知道，div1的父级元素是div2，div2的父级元素是div3.
 ```css
        #div3{
            position:absolute;
            left:10px;
            top:10px;
            ...
        }
        .div2{
            position: static;
            ...
        }
        #div1{
            position: absolute;
            top: 10px;
            left: 10px;
            ...
        }
 ```
  重点的CSS代码如上，他的效果如下：
  ![图片](https://github.com/dingyangyks/notebook/blob/master/img/QQ%E5%9B%BE%E7%89%8720170717194337.png?raw=true)   
 >从结果上来看：  
   1.首先div1脱离了文档流，而且并没有根据它的父级元素div2来定位，而是根据`position：absolute；`的div3来进行定位的。  
   2.div3也是绝对定位，它也脱离了文档流，所以此时body的高度为0，没有撑开body，而他是相对于html文档来进行定位的。   
 **所以不能把aabsolute简单的理解为是相对于父元素定位的** 

 * 如果只设置`position：absolute；`而不设置left，top等值时，元素的位置依然停留在static的位置，当设置left，top等值时才会开始定位。**注意：虽然此时处在static的默认位置上，但是他已经脱离文档流。** 如果此时存在margin，则会在默认位置上偏移。如果存在left，top等值则会按照正常绝对定位来定位。

 * 绝对定位会让行内元素变为块级元素，例如span元素，它是行内元素，设置宽高，内外边距都是无效的，但是加上`position：absolute；`后就可以设置，因为它已经变成了块状元素。  

 * absolute还可以用来控制一个元素的显示与隐藏，而且它的性能更优于`display：none/block`，block只适用于显示块级元素，如果用block显示行内元素(span)就会导致行内元素换行。
 ```css
        .hidden{
            position:absolute;
            top:-9999em;
        }

        .hidden{
            position:absolute;
            visibility:hidden;
        }

        .hidden{
            position:absolute;
            clip: rect(1px, 1px, 1px, 1px);
        }
  ``` 
  以上方法也能控制一个元素的显示与隐藏。 

## 3.position：relative；相对定位 
 相对定位是不脱离文档流的，它是相对于自己以前的位置进行偏移，这个以前的位置指的是它在正常文档流中的static的位置，偏移后之前的位置仍然为它保留着，**其他文档结构并不会因为偏移了就改变**  
 它的作用是在父元素添加相对定位，用来限制absolute的活多范围
## 4.position：fixed；固定定位
 配合left top等值，相对于屏幕保持不动进行定位。