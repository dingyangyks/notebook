# RegExp类型
RegExp类型是引用类型的一种,用于支持正则表达式

## 实例方法

### `exec()`
`exec()`接受一个参数,即要应用的模式的字符串,返回包含第一个与正则表达式匹配的数组,在没有匹配项的时候会返回`null`.

***虽然返回的数组是Array的实例,但是包含两个额外的属性`index`和`input`***
* `index`表示匹配项在字符串的位置
* `input`表示引用正则表达式的字符串

注意:
1. 只返回能够匹配的第一项,返回结果性质是数组
2. 只返回与正则表达式匹配的一段,而不是返回整个字符串.
3. 如果返回结果有多项,除了第一项其他项是与正则匹配的捕获组的字符串
4. 如果在正则表达式中设置了全局标示,也只返回一个匹配项
    * 在***不设置***全局标示的情况下,在同一个字符串上多次调用`exec()`将始终返回第一个匹配项
    * 在***设置***全局表好似的情况下,在同一个字符串上多次调用`exec()`,都会在每次调用时在字符串中继续查找新的匹配项
5. `lastIndex`是正则表达式上的属性,在***全局匹配模式***下,`lastIndex`的值每次在调用`exec()`后都会***增加***,在***非全局匹配***模式下则***不变***


```js
var str = 'mom and dad and baby';
var reg = /mom( and dad( and baby)?)?/gi;
var res = reg.exec(str)

console.log(res[0]);//'mom and dad and baby'
console.log(res[1]);//' and dad and baby'
console.log(res[2]);//' and baby'


var str1 = 'cat, bat, sat, fat';
var reg1 = /.at/g;
var result = reg1.exec(str1);//第一次调用
console.log(result[0])//cat
console.log(result.index)//0
console.log(reg1.lastIndex);//3
result = reg1.exec(str1);//第二次调用
console.log(result);//[ 'bat', index: 5, input: 'cat, bat, sat, fat' ]
console.log(result[0]);//bat
console.log(result.index);//5
console.log(reg1.lastIndex);//8
```

### `test()`

`test()`接受一个字符串参数，与正则匹配返回ture,否则返false

# 基本包装类型中的String

##字符串的模式匹配方法

### `match()`

`match()` 接受一个参数:一个正则表达式或者RegExp对象
返回一个数组,第一项是与整个模式匹配的字符串,之后的每一项(如果有)保存着与正则表达式中捕获组匹配的字符串

### `search()`

`search()`接受一个参数和`match()`相同
返回字符串中与正则表达式第一个匹配项的索引,***如果没有找到返回-1***


### `replace()`
                                                                                                
`replace()`用于替换指定字符串,接受两个参数,第一个参数:正则表达式或者字符串(该字符串不会转换成正则表达式);第二个参数可以是一个字符串或者一个函数.  
返回替换后的字符串                                                                                                                                                                                                                                                                

* 如果第一个参数是字符串,则替换第一个字符串
* 如果想替换所有的字符串,第一个参数必须是一个正则表达式,***而且要指定全局匹配***

### `split()`

`split()` 指定分隔符,将一个字符串分割成多个子字符串,并将结果放在数组中返回
可接受两个参数,分割符和指定的数组大小.


