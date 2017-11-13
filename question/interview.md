* 1  ***如下代码打印出什么?每次打印的时间间隔是多少?***  
[链接](http://www.jb51.net/article/109005.htm)

```js
for (var i = 0; i < 5; i++) {
 setTimeout(function() {
  console.log(new Date, i);
 }, 1000);
}

console.log(new Date, i);
```
解:打印结果为5个时间+6个5结果为:
```js
Thu Nov 09 2017 23:07:14 GMT+0800 (CST) 5
*****************************************
Thu Nov 09 2017 23:07:15 GMT+0800 (CST) 5
Thu Nov 09 2017 23:07:15 GMT+0800 (CST) 5
Thu Nov 09 2017 23:07:15 GMT+0800 (CST) 5
Thu Nov 09 2017 23:07:15 GMT+0800 (CST) 5
Thu Nov 09 2017 23:07:15 GMT+0800 (CST) 5
```
过程为先直接打印出第一个结果,1秒钟后,然后几乎同时打印出剩下的结果

```js
for (var i = 0; i < 5; i++) {
        !function(i) {
                setTimeout(function () {
                        console.log(new Date, i);
                }, 1000);
        }(i);
}

console.log(new Date, i);
```
使用闭包可以先打印出5,1秒钟后同时打印出01234

http://blog.csdn.net/zp1996323/article/details/51322464
http://blog.csdn.net/zp1996323/article/details/51322464

* 2.***解释清楚 `null` 和 `undefined`***

`null`表示一个标识被赋值了，且该标识赋值为“空值”,从逻辑角度来看，null值表示空对象指针；

`undefined`表示声明了标识，但没有给标识赋值。

* 3.***js在什么时候会进行隐式类型转换，转换的结果？***

数值运算
if
.调用方法或属性
!和!!





