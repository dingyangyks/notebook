# javascript
## 1.删除子节点；   
  删除子节点：`removeChild()`:从子节点删除某一个节点  
  长辈节点元素.removeChild(要删除的子节点)；  
  * 如果删除成功，可返回删除的子节点；
  * 如果失败会返回null；
  但是删除后的子节点只是不在DOM树中，但是任然储存在内从中，以后还可访问到。
  * 如果想彻底删除在需要把删除的子节点赋值为null；
  ```js
  var oUl=document.getElementById("div1");
  var x=oUl.removeChild(oUl..childnodes[0]);
  x=null;//彻底删除
  ```
 **值得注意的一点是,在移除子节点时，子节点的下标会随删除节点而发生变化**  
 如果要用for循环删除所有节点，
    ```js
    for(var i=0;i<oli.length;i++){
        oUl.removeChild(oUl..childnodes[i]);
    }
    ```
    这样的结果会发现第一次遍历完**只会删除0,2,4,6**  
    这种原因是：每一次删除一个节点后所有的节点下标都会变化，当第二次删除时i=1，此时本来的第一位数字（0）已经被删除，此时的第一位下标为0数字为（1），下标为2的数字是2，所有会删除2，而不是1。  
    去除所有节点的方法：  
    A.正序删除会出现问题，我们就逆序删除:  
    
    ```js
    for(var i=oli.length-1;i>=0;i--){
        oUl.removeChild(oUl..childnodes[i]);
    }
    ```
B.  
## 2.感受作用域  
 ```js
    var a=5;
    !function add(){
        a=a+1;
        var b=3;
        console.log(b);
    }();
    !function add1(){
        a=a+2;
    }();
    console.log(a);
 ```  
 结果是a=8，b=3；体会作用域的取值和作用域中值得变化，局部函数能访问全局中的参数，且经过局部函数的操作能改变全局参数的值，并返回给全局参数。  
## 3.简单运动  
1.最原始的简单写法（有多处bug）
 ```js
 function startmove(){
            setInterval(function(){
                odiv.style.left=odiv.offsetLeft+10+"px";
            },30) 
        }
 ```
  该代码会产生如下问题：  
  * 运动不会体质
  * 多次点击按钮会导致速度越来越快
  * 取某些速度的值会导致不会停止
  * 停止后继续点击会继续移动  
  解决方案如下：
  ```js
    var timer=null;/*先把定时器存为null，方便以后关掉*/
        function startmove(){
           var odiv=document.getElementById("div1");
           clearInterval(timer);/*在执行运动前关掉定时器就不会导致多次点击速度越来越快*/
           /*把计时器记录下来*/
           timer = setInterval(function(){
                if(parseInt(odiv.style.left)>=300){/*注意odiv.style.left是带px单位的*/
                    clearInterval(timer);/*关闭计时器即可停止 clearInterval是关掉下一次计时，所有再次点击还会运动一次*/
                }else{/*把运动条件放在else里面即可解决停止后再点击会继续运动的问题 这样就会使停止和运动对立起来*/
                    odiv.style.left=odiv.offsetLeft+1+"px";
                }
            },30) 
        }
  ```
## 4.classList属性
   作用：返回元素的类名，只读的，不过可以通过add()，remove()修改  
   他所拥有的属性：length(长度) value(值)  
   方法：  
   `add()` 在元素中添加一个或多个类名    
   `remove()` 移除一个或者多个类名 **移除不存在的类名时不会报错**  
   `contains` 返回布尔值，判断类名是否存在  
   `toggle(class,true/false)` 在元素中切换类名 第一个参数：要移除或添加的类名，添加返回true，移除返回false 第二个参数可选，布尔值，用于强制是否移除或者添加。  
   实例代码：
   ```html
   <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <div class="item SSSS"></div>
    <script type="text/javascript">
        var adiv=document.getElementsByClassName('item')[0];
        var x=adiv.classList
        x.add("dddd","sadsadasd");
        // x.remove("item");
        x.toggle("item");
        x.toggle("ggggg");
        x.toggle("eweqweqw",false);//强制添加不上
        console.log(x.contains("dddd"));
        console.log(adiv.classList)
    </script>
    </body>
    </html>
   ```  
## 5.各种数据转换为布尔值的规则  
 
| 数据类型 | 转换为true |转换为false |  
|---------| ---------: | :-------: |
|Boolean  |    true    |   false   |
|string   | 任何空字符创|''(空字符串)|
|Number   | 任何非零数字（包括无穷)|0/NAN|
|object   | 任何对象    | null |
|Undefined|    ——      | undefined|


## 6.break continue return的区别  
 **break**  
  用于跳出循环，跳出该次循环结束后，强制执行循环后的代码，
   ```js
    var num = 0;
    !function () {
        for (var i = 1; i < 10; i++) {
            if (i % 5 === 0) {
                break;
            }
            num++;
        }
    }();
    console.log(num) //4
   ```          
   上面的代码的break的作用就是在当i=5时，终止循环不执行接下来的循环,且连接下来的num++都没有执行，**它只能跳出一层循环**             
 **continue**
  用于跳出正在循环的循环，开始进行下一次循环 ，
  上面的代码把break改为continue
  ```js
   var num = 0;
    !function () {
        for (var i = 1; i < 10; i++) {
            if (i % 5 === 0) {
                continue;
            }
            num++;
        }
    }();
    console.log(num) //8
  ```   
   只换了关键词，换成continue后结果大大不同，如果没有关键字，循环会执行9次，但是当存在continue时，当i=5时（i任然会循环++），会在num自加前跳出第五次循环，然后执行第6次，所以num最后一共循环了8次，

 **return**   
  return语句会终止函数的执行并返回函数的值
  ```js
    var num=0;
    function add(){
        num++;
        return num;
    }
    console.log(add())//1
  ```
  在函数中return会返回指定的值，如没有return或者return后面的值则会返回undefined；
  ```js
    var num=0;
    function add(){
        num++;
        return;
    }
    console.log(add())//undefined
  ```
## 7.`undefined` 和 `null`;
`undefined`和`null`都属于基本类型，但是是有区别的,用途完全不同。  

**`undefined`:**  
1. 在定义一个变量时，并未对其初始化，则会自动赋值`undefined`，
```js
var a;
alert(a == undefined);//true
```

2. 对于未声明的变量，用`typeof`检测时会返回`undefined`，
```js
var a;

alert(typeof a); //undefinde
alert(typeof b); //b没有定义，返回undefined
```


**`null：`**   
1. `null`类型是一个空对象指针，所以用`typeof`检测会返回`object`，
```js
var a = null;
alert(typeof a); //object
```
2. **如果定义的变量在将来准备保存一个对象，则最好把该变量初始化为`null`，这样将来只要检测是否为null值就知道是否已经保存了一个对象的引用**  
3. `undefined`是派生自`null`的，所以对他们进行相等性测试则会返回`true`，**但是他们不全等**
```js
alert(null == undefined);//true
alert(null === undefined);// false
```

## 8.数值转换
有三个函数可以把非数值转换为数值，`Number()`，`parseInt()`,`parseFloat()`
### `Number()`的转换规则：
1. 如果是数字值，则简单的传入和返回
2. 如果是`Boolean`值，`true`和`false`分别被转换成1和0；
3. 如果是`null`，则返回0；
4. **如果是`undefined`，则返回`NaN`**；
5. 如果是字符串，遵循下列规则：    
   * 如果字符串只包含数字，转换为相应的十进制数值；**注意：前导的0会被忽略，如011会被转化为11**；
   * 如果字符串包含有效的浮点格式，则转化为相应的浮点数值，同样忽略前导的0；
   * 如果字符串中包含有效的十六进制数，则转换为相应的十进制整数值
   * 如果字符串是空，则转换为0；
   * 如果字符串中包含除上述格式外的字符，则转换为`NaN`；
   * 如果字符串中包含运算操作符，则会先按上述规则进行转换，然后返回运算结果； 
6. 如果是对象，则调用对象的`valueOf()`方法，然后按上述规则转换，如果转换结果是`NaN`，则调用对象的`toString()`方法，然后按上述规则转换。

### `parseInt()`的转换规则：
1. 它会忽略字符串前面的空格，直至找到第一个非空格字符；
2. 如果第一个字符不是数字或者负号，则会返回`NaN`；
3. 转换空字符串时返回`NaN`，**注意：这是和`Number()`的区别**；
4. `parseInt()`方法可以接受两个参数，第二个参数是可选参数，是转换时使用的进制，如2, 8,10,16，默认十进制；
5. `parseInt()`方法转换小数时会忽略小数点及其后面的值，
6. 如果见面有前导的0，**则不会被忽略**，例如`parseInt(030)`会被解析称八进制24，所以在使用该方法时最好带上第二个参数；

### `parseFloat()`的转换规则：
1. 和`parseInt()`方法类似，只是在字符串中的第一个小数点是有效的；
2. 他和`parseInt()`的区别在于，他会忽略前导0；
3. `parseFloat()`他只有一个参数，所以**智能解析十进制，十六进制始终会被解析成0**

## 9. `document.write()`和`innerHTML`的区别：
>`document.write()`是直接写入到页面的内容流，如果在写之前没有调用`document.open()`, 浏览器会自动调用open。每次写完关闭之后重新调用该函数，会导致页面被重写。  
`innerHTML`则是DOM页面元素的一个属性，代表该元素的html内容。你可以精确到某一个具体的元素来进行更改。如果想修改document的内容，则需要修改`document.documentElement.innerElement`。  
`innerHTML`很多情况下都优于`document.write()`，其原因在于其允许更精确的控制要刷新页面的那一个部分。
`document.write()`会重绘整个页面，而`innerHTML`是可以重绘页面的某一部分

## 10. `attrbitues`和`Property`的区别
[链接](http://web.jobbole.com/83129/)

