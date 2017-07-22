# 选项卡功能（for循环嵌套）
难了我许久的选项卡功能终于在今天被我攻破了，之前总是想这个功能怎么控制表头和内容都改变，总是不清楚到底该是什么逻辑，今天终于弄明白了，实际上**利用js中的for循环**就可以轻易实现。

我理解的逻辑是这样的：  
1. 如果要控制两个元素的变化就要使用for循环嵌套，
2. 外层的循环控制一个元素的变化，内层的循环控制另一个元素的变化
3. 两层循环用`index`传递参数，

> 利用自定义属性`index`可以返回一个数组的索引值。如`arr[i].index =i`。               

4. 选项卡还有许多细节问题：   
    * 移出标题栏，还未进入子菜单，子菜单就消失。  
      **解决办法：** 引入计时器，然移出标题栏后延迟消失，注意关闭计时器  
5. 要用好`this`，理解`this`
6. 理清楚元素变化的逻辑，
    * **鼠标进入标题栏会发生什么**    
    * **鼠标移出标题栏会发生什么**  
    * **鼠标进入选项会发生什么**  
    * **鼠标移出选项会发生什么**  
7. 理清楚层级关系


具体代码如下：
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style type="text/css">
        #header {
            list-style: none;
            font-size: 0;
            color: #fff;
            width: 336px;
            padding: 0;
            cursor: pointer;
        }

        ul {
            list-style: none;
            padding: 0;
        }

        .pro {
            display: inline-block;
            width: 100px;
            height: 17px;
            border: 1px solid black;
            background-color: sandybrown;
            text-align: center;
            padding: 5px;
            font-size: 15px;
        }


        .desk {
            width: 334px;
            height: 190px;
            border: 1px solid tomato;
            border-top: none;
            display: none;
        }

        .desk>ul {
            white-space: nowrap;/*强制不换行*/
            margin: 0;
        }

        .desk>ul>li {
            padding: 10px;
            color: #f5dfb7;
            background-color: #a35835;
            border-bottom: 1px solid #e7af99;
            cursor: pointer;
        }

        .desk>ul>li:hover {
            background-color: #e7af99;
            color: #a35835;
        }

        .show {
            display: block;
        }

        p {
            position: relative;
            left: 0;
            margin: 0;
            padding: 0;
            text-overflow: ellipsis;
            overflow: hidden;
            /*文本框溢出显示省略号，和overflow：hidden配合使用*/
        }
    </style>
</head>

<body>
    <div>
        <ul id="header">
            <li class="pro">陕 西</li>
            <li class="pro">江 西</li>
            <li class="pro">湖 南</li>
        </ul>
    </div>
    <div class="desk">
        <ul class="oul">
            <li>
                <p>汉中：我的家乡，山青水秀，鸟语花香，是一个适合养老的地方。</p>
            </li>
            <li>
                <p>西安：是一座古城，它是十三朝古都，历史悠久，文化厚重。</p>
            </li>
            <li>
                <p>安康：和汉中同属于陕南，靠经重庆，坐火车去西安要经过安康。</p>
            </li>
            <li>
                <p>咸阳：也是座古都，有咸阳宫，阿房宫，可是最后被项羽烧毁了。</p>
            </li>
            <li>
                <p>延安：红色革命根据地，是当时共产党养精蓄锐的地方。</p>
            </li>
        </ul>
    </div>
    <div class="desk">
        <ul class="oul">
            <li>
                <p>南昌：江西的省会，张恩桐上学的地方，也是我的回忆之地。</p>
            </li>
            <li>
                <p>上饶：那里有三清山，我和张恩桐一起去爬过，是段美好的记忆。</p>
            </li>
            <li>
                <p>九江：据说是一个美丽的小城，我从那里经过过。</p>
            </li>
            <li>
                <p>景德镇：那里盛产瓷器，是中国的瓷器之都，在国外，景德镇也非常有名。</p>
            </li>
            <li>
                <p>新余：出土过大量石器、陶器表明，远在5000年前的新石器时代，先人就在这里繁衍生息。</p>
            </li>
        </ul>
    </div>
    <div class="desk">
        <ul class="oul">
            <li>
                <p>长沙：湖南省的省会，今年六月我去找过刘丽，橘子洲头和臭豆腐还不错</li>
            <li>
                <p>怀化：张恩桐曾经在那里呆过，我也去找过她，不过记忆不怎么美好。</li>
            <li>
                <p>靖州：怀化的一个小县城，我最痛苦的回忆吧，那个时候我什么都不懂。</li>
            <li>
                <p>邵阳，史称“宝庆”。隶属于湖南省，位于湘中偏西南，资江上游；。</li>
            <li>
                <p>张家界：的地层复杂多样，造化了当地的特色景观。主要有山地、岩溶、丘陵、岗地和平原等。</li>
        </ul>
    </div>
    <script type="text/javascript">
        window.addEventListener('load', function () {
            var provs = document.getElementsByClassName('pro');
            var city = document.getElementsByClassName('desk');

            var oul = document.getElementsByClassName('oul');
            var ap = document.getElementsByTagName('p');
            for (var i = 0; i < ap.length; i++) {
                ap[i].title = ap[i].innerHTML;
            }
            
            //操作标题栏
            for (var i = 0; i < provs.length; i++) {
                provs[i].index = i;//加入自定义属性 传递参数
                var timer = null;
                //鼠标进入标题栏
                provs[i].addEventListener('mouseover', function () {
                    clearInterval(timer);//关闭定时器 以免下次进入时仍然用的上一个计时器
                    //变色
                    for (var i = 0; i < provs.length; i++) {
                        provs[i].style.backgroundColor = "";//先把所有样式清空
                    }
                    //如果不写this而写arr[i]谁知道要改变的是哪个 i并不确定
                    this.style.backgroundColor = "#a35835";//然后再给滑过的元素设置样式 //用this保持同步 this=当前的provs[i]

                    //显示对应的desk
                    for (var j = 0; j < city.length; j++) {
                        city[j].classList.remove('show');//先把所有有关的类名清空
                    }
                    city[this.index].classList.add('show');//然后再给划过的元素设置类名
                })
                
                //鼠标移除标题栏
                provs[i].addEventListener('mouseout', function () {
                    //延迟消失
                    timer = setInterval(function () {
                        //恢复标题栏颜色
                        for (var i = 0; i < provs.length; i++) {
                            provs[i].style.backgroundColor = "";//先把所有样式清空
                        }
                        //隐藏desk
                        for (var j = 0; j < city.length; j++) {
                            city[j].classList.remove('show');
                        }
                    }, 1000)
                })
            }

            //操作desk
            for (var j = 0; j < city.length; j++) {
                city[j].index = j
                city[j].classList.remove('show');
                //鼠标移入desk
                city[j].addEventListener('mouseover', function () {
                    clearInterval(timer);//关闭定时器 以免下次进入时仍然用的上一个计时器
                    this.classList.add('show');//用this保持同步 this=当前的city[i]
                    for (var i = 0; i < provs.length; i++) {
                        provs[i].style.backgroundColor = "";//鼠标移入desk 先把表头颜色清空
                    }
                    provs[this.index].style.backgroundColor = "#a35835";//在设置表头颜色
                })
                //鼠标移除desk
                city[j].addEventListener('mouseout', function () {
                    this.classList.remove('show');//用this保持同步 this=当前的city[j]
                    for (var i = 0; i < provs.length; i++) {
                        provs[i].style.backgroundColor = "";//鼠标从desk移出时 恢复颜色
                    }
                })
            }
        })
    </script>
</body>
</html>
```  