* 1  ***如下代码打印出什么?每次打印的时间间隔是多少?***
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