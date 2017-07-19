# flex box 弹性盒子模型

* 布局的传统解决方案，基于盒状模型，依赖 display 属性 + position属性 + float属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。

* 2009年，W3C 提出了一种新的方案----Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。

## flex box 是什么？

* Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

* **任何一个容器都可以指定为 Flex 布局。**，`display：flex;`

* 行内元素也可以使用 Flex 布局。`display：inline-flex;`

* Webkit 内核的浏览器，必须加上-webkit前缀。
```css
.box{
    display: -webkit-flex; /* Safari */
    display: flex;
}
```
* **注意，设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。**  

## 基本概念

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。如下图：  
![图片](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png)

## 容器属性  

1. `flex-direction`:决定主轴的方向（即项目的排列方向）。他有四个可能的值：
    * row（默认值）：主轴为水平方向，起点在左端。
    * row-reverse：主轴为水平方向，起点在右端。
    * column：主轴为垂直方向，起点在上沿。
    * column-reverse：主轴为垂直方向，起点在下沿  

2. `flex-wrap`:默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。他有三个肯能的值：
    * nowrap（默认）：不换行
    * wrap：换行，向下换行
    * wrap-reverse：换行，向上换行

3. `lex-flow`:是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`。

4. `justify-content`:定义了项目在主轴上的对齐方式。 
    * flex-start（默认值）：左对齐
    * flex-end：右对齐
    * center： 居中
    * space-between：**两端对齐，项目之间的间隔都相等。**
    * space-around：**每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍**  
    ![PHOTO](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png)

5. `align-items`:定义项目在交叉轴上如何对齐
    * flex-start：交叉轴的起点对齐。
    * flex-end：交叉轴的终点对齐。
    * center：交叉轴的中点对齐。
    * baseline: 项目的第一行文字的基线对齐。
    * stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
    ![PHOTO](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png)   
    它可能取5个值。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下  

6. `align-content`:定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
    * flex-start：与交叉轴的起点对齐。
    * flex-end：与交叉轴的终点对齐。
    * center：与交叉轴的中点对齐。
    * space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
    * space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
    * stretch（默认值）：轴线占满整个交叉轴。  
    ![PHOTO](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png)  


## 项目上的属性

1. `order`:定义项目的排列顺序。数值越小，排列越靠前，默认为0。

2. `flex-grow`:定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。  
   * 如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。  
   * 如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

3. `flex-shrink`:定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小 
    * 如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。
    * 如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。**负值对该属性无效。**

4. `flex-basis`:定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
    * 它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。

5. `flex`属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选。
    * 该属性有两个快捷值：`auto (1 1 auto)` 和 `none (0 0 auto)`。建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

6. `align-self`属性允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为auto，表示继承父元素的`align-items`属性，如果没有父元素，则等同于stretch。该属性可能取6个值，除了auto，其他都与align-items属性完全一致。

**本文来自于阮一峰老师的[Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool)**

**[Flex 布局教程：实例篇](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)**




