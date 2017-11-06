```js
function something() {
    for (var i = 0; i < 10; i++) {
        result = i
    }
    return result
}
console.log(something()); //9
```
对于上一段代码,最后结果只有一个9,这是因为结果是在循环结束后返回的,所有最后一次result是9


```js
function something1() {
    for (var i = 0; i < 10; i++) {
        var result = i;
     }
     return i
}
console.log(something1()); //10
```
对于这一段代码,最后结果只返回了一个10,这是因为`i++`这一条语句是在`i < 10`这个判断条件以前执行的,所以循环停止的时候i已经变成了10,只是没有执行循环体,所以返回的是10,此时result等于9


```js
var list = document.getElementById('list');
var item = list.getElementsByTagName('li');
for (var i = 0; i < 5; i++) {
    (function (i) {
        item[i].addEventListener('click', function () {
            console.log(i + 1)
        });
    })(i);

    //for (var i = 0; i < 5; i++) {
    //    item[i].addEventListener('click', function () {
    //         console.log(i + 1)
    //    });
    //}
}
```
对于上段代码，目的是为了点击长度为５的列表，点击列表打印出相应的列表编号．在这里使用了闭包．如果不使用闭包会是每次点击都显示６.
分析：如果不使用闭包，***js事件处理器在线程空闲时间不会运行，导致最后运行的时候输出的都是i最后的值***

使用闭包的话，闭包把变量i保存了起来
