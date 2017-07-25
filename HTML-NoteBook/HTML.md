
# HTML
## 三栏布局 
1. 利用position定位
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
2. 利用float定位
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
3. 能自适应屏幕尺寸的三栏布局
**在设置各种尺寸上，尽量用百分数表示，这样就可以自适应尺寸**；  
中间三栏应该是等高列：**`overflow：hidden`配合较大的内边距和负外边距可以实现等高列，一般正文最长所以让他自适应正文**
代码如下：  
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style type="text/css">

        .wrapper{
            width: 95%;
            background-color: #aaa;
            margin: 0 auto;
            height: auto;
        }
        .left {
            float: left;
            width: 15%;
            height: auto;
            margin-right:2%;
            background-color: wheat;
            margin-bottom: -1000px;
            padding-bottom: 1020px;
        }

        .right {
            width:  13%;
            height: auto;
            float: right;
            margin-left: 2%;
            /*等高列*/
            margin-bottom: -1000px;
            padding-bottom: 1020px;
            background-color: darkgoldenrod;
        }

        .main {
            height: 200px;
            overflow: hidden;
            background-color: cornflowerblue;
        }
        .header{
            width: 100%;
            height: 150px;
            background-color: saddlebrown;
            margin: 10px 0;
        }

        .footer{
            width: 100%;
            height: 100px;
            background-color: sandybrown;
            margin: 10px 0;
        }
        .content{
            /*配合较大的内边距和负外边距可以实现等高列，一般正文最长所以让他自适应正文*/
            overflow: hidden;
        }
    </style>
</head>

<body>
    <div class="wrapper">
        <div class="header"></div>
        <div class="content">
            <div class="left">
                <h1>导航栏</h1>
            </div>
            <div class="right">
                <h1>相关说明</h1>
            </div>
            <div class="main">
            </div>
        </div>
        <div class="footer"></div>
    </div>
</body>

</html>
```
这个布局三栏都是自适应的，左右栏不固定。   
这个布局**缺点**是无法预先加载，当内容较多时影响用户体验，且字体大小不会自适应，而是换到下一行  



## 圣杯布局
圣杯布局也是三栏布局的一种，其思想是利用浮动和负外边距进行布局，这回让左右侧栏固定，中间自适应。  

**切记布局时一定要把中间自适应部分放在最前** 因为中间盒子是要被优先渲染嘛~并且设置其自适应，也就是width:100%。 

代码如下：  
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style type="text/css">
        body{
            /*为了不使布局混乱 加上最小宽度，小于这个宽度后会出现滚动条*/
            min-width: 700px;
        }
        .header {
            width: 100%;
            background-color: seagreen;
        }

        .header h1 {
            margin: 0;
        }

        .container {
            height: 200px;
            overflow: hidden;
            padding: 0 100px 0 200px;
            background-color: orange;
        }

        .middler {
            /*100%相对于父元素的content 不包括padding*/
            width: 100%;
            height: 200px;
            background-color: saddlebrown;
            float: left;
        }

        .left {
            width: 200px;
            height: 200px;
            background-color: salmon;
            float: left;
            /*这里的100%是相对于父元素的内容宽度，不包括padding*/
            margin-left: -100%;
            position: relative;
            /*更据尺寸进行移动*/
            left: -210px;
        }

        .right {
            width: 100px;
            height: 200px;
            background-color: sandybrown;
            float: left;
           /*这里的100px是右边栏的自身宽度*/
            margin-left: -100px;
            position: relative;
            /*更据尺寸进行移动*/
            right: -110px;
        }

        .footer {
            width: 100%;
            background-color: brown;
        }
    </style>
</head>

<body>
    <div class="header">
        <h1>header内容</h1>
    </div>
    <div class="container">
        <div class="middler">大家可以看到，三栏并没有在父元素的一行显示，就是因为中间盒子我们给了百分之百的宽度。所有左右两个盒子才会被挤下来。 那么如何让它们呈现出一行三列的效果呢？那就要让左边的盒子要到中间盒子的最左边，右边的盒子到中间盒子的最右边。换个想法，如果中间盒子不是100%的宽度，那么按照文档流，左边的盒子一定会在中间盒子的后面显示，接着显示右边的盒子。但是现在中间盒子是满屏了的，所以左右两个盒子被挤到下一行显示。我们要做到的是让左右两个盒子都上去。此时，CSS的负边距(negativemargin)该上阵了。 第四步：利用负边距布局 1.让左边的盒子上去 需要设置其左边距为负的中间盒子的宽度，也就是.l{margin-left:-100%;}。这样左盒子才可以往最左边移动。 2.让右边的盒子上去
        需要设置其左边距为负的自己的宽度，也就是.right {margin-left：-200px;}。这样右盒子才可以在一行的最右边显示出自己。 第五步：看此时的效果图 作者：森西悠然 链接：http://www.jianshu.com/p/f9bcddb0e8b4來源：简书 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
        </div>
        <div class="left"></div>
        <div class="right"></div>
    </div>
    <div class="footer">footer内容</div>
</body>
</html>
```

它的关键部分：在中间部分即`container`中，`middler，left，right`都是采用了`float：left`，这样如果宽度足够的话，这三个部分会在一排统一向左浮动。但是`middler`设置了宽度100%，所以左右的块就被挤到了下一行。   

![图片](https://github.com/dingyangyks/notebook/blob/master/img/%E5%9C%A3%E6%9D%AF%E5%B8%83%E5%B1%80.png?raw=true)  

此时给`container`设置你想要布局的内边距（左右栏的宽度加上缝隙），**如果不设置父元素的padding就让左右栏就位，这样会导致左右栏压着文字，因为没有padding的话，`middler`的宽度是父元素的100%**,所以加上padding就会看到左右元素会和middler一样移动到如图位置：  

![图片](https://github.com/dingyangyks/notebook/blob/master/img/Screenshot%20from%202017-07-25%2014-46-29.png?raw=true)

这时，想要左右元素到指定的位置就需要依靠负外边距，关键代码如下：
```css
.left{
    /*相对于父元素的内容宽度 不包括padding*/
    margin-left: -100%;
    position: relative;
    left: -210px;
    }
.right{
    /*这里的100px是右侧栏的自身宽度*/
    margin-left: -100px;
    position: relative;
    right: -110px;
}

```

这样一个圣杯布局的三栏就好了：
![photo](https://github.com/dingyangyks/notebook/blob/master/img/Screenshot%20from%202017-07-25%2014-47-40.png?raw=true)
