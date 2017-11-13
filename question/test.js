// function merge (left,right) {   
//     var result = [];
//     while (left.length > 0 && right.length > 0){
//         if (left[0] < right[0]) {
//         result.push(left.shift());
//         } else {
//             result.push(right.shift());
//         }
//     }
//     // console.log(result.concat(left).concat(right));
//     console.log(right)
//     // console.log(left,right)
//     return result.concat(left).concat(right);
// }
// // merge([7,8,9,],[4,5,6,10]);

// function mergeSort (items) {
//     if (items.length === 1) {
//         return items;
//     }

//     var middle = Math.floor(items.length / 2);
//     var left = items.slice(0,middle)
//     var right = items.slice(middle);
//     // console.log(left,right);
//     return merge(mergeSort(left),mergeSort(right));
// }

// mergeSort([5,6,7,8,5,1,24,45])

// var str = 'mom and dad and baby';
// var reg = /mom( and dad( and baby)?)?/gi;
// var res = reg.exec(str)

// console.log(reg.exec(str));
// console.log(res[0]);
// console.log(res[1]);
// console.log(res[2]);


// var str1 = 'cat, bat, sat, fat';
// var reg1 = /.at/g;
// console.log(str1.shift());
// var result = reg1.exec(str1);
// console.log(result[0])
// console.log(result.index)
// console.log(reg1.lastIndex);
// result = reg1.exec(str1);
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(reg1.lastIndex);

// var start = +new Date();
// for(var i = 0; i < 1000; i++){} 
// var stop = +new Date();
// console.log(stop - start);

// var obj = new Object();

// function foo(){

// }

// foo.prototype = {
//     name:'ding',
//     age:23
// }

// console.log(foo._proto_)

// var a = 10;
// function foo() {
//     console.log(a);
// }

// function bar(x) {
//     var a = 20;
//     x();
// }

// bar(foo);

// function Faa(){
//     this.name = 'ding';
//     this.age = 24;
//     console.log(this)
// }
// Faa()

// var obj = {
//     x: 10,
//     fn: function () {
//         console.log(this);
//         console.log(this.x);
//     }
// }

// obj.fn();//this:obj x:10
// var fn1 = obj.fn;
// fn1();// this:window x:undefined  不是作为谁的属性调用的 所以this指向window
// //...........................................................
// var a = 10;
// function fn() {
//     console.log(a);
// }

// function show(f) {
//     var a = 20;
//     (function () {
//         f();//fn()只是在show()的作用域里调用 fn()实在全局下创建的 所有变量应该在全局环境下去寻找
//         console.log('fasf' + a)
//     })();

// }
// show(fn);

// function test() {
//     var max = 10;
//     return function inner(x) { // inner在test内部创建　在创建它的函数中去寻找变量
//         if (x > max) {
//             console.log(x);
//         }
//     };
// }

// var f1 = test();
// var max = 100;
// f1(15);

// function loop() {
//     var result = new Array();

//     for (var i = 0; i < 10; i++) {
//         result[i] = function () {
//             return i;
//         };
//     }
//     return i;
// }

// console.log(loop());

// function newloop() {
//     var result = new Array();

//     for (var i = 0; i < 10; i++) {
//         result[i] = function (num) {
//             return function () {
//                 return num;
//             };
//         }(i);
//     }
//     return result;
// }
// console.log(newloop()[5]());

// function something() {
//     for (var i = 0; i < 10; i++) {
//         result = i
//     }
//     return result
// }

// console.log('fasf'+something()); //9

// function something1() {
//     for (var i = 0; i < 10; i++) {

//     }
//     return i
// }

// console.log(something1()); //10

// function something2() {
//     for (var i = 0; i < 10; i++) {
//         (function () {
//             var b = i
//             console.log('arr'+b)
//         })()
//     }
//     // return 'asfas'
// }

// something2(); //0-9
// // console.log(something2());//0-9 undefined 因为没有返回值
//***************************************************************** */
// function something3(){
//     'use strict';
//     for(let i = 0; i < 10; i++){
//         console.log(i);
//     }
// }
// something3();

// function add(){
//     'use strict';
//     var a = 10;
//     let b = 100;
//     console.log(a);
//     console.log(b);
// }
// add()

// function vartest(){
//     var x = 1;
//     if(x){
//         var x = 2;
//         console.log(x);
//     } 
//     console.log(x);
// }

// vartest();

// function lettest(){
//     'use strict';
//     let x = 1;
//     if(x){
//         let x = 2;
//         console.log(x);
//     } 
//     console.log(x);
// }

// lettest();

// console.log(abc);
// var abc = 110;

// function aaa(){
//     var a = b = 10;
// }
// aaa();
// console.log(a);//报错`a is not defined 变量a由var定义,是局部变量,所以在外面访问不到
// console.log(b); 

// var a = 20;
// function aaa(){
//     console.log(a);
//     var a = 10;
// }
// aaa();

// var a = 10;
// function aaa(){
//     bbb();
//     console.log(a);

//     function bbb(){
//         var a = 20;
//     }
// }//10
// var a = 10;
// function aaa(a){
//     console.log(a);
//     var a = 20;
// }
// aaa(a);

// var a = 5;
// var b = a;
// b +=3;
// console.log(a);

// var a = [1,2,3];
// var b = a;
// b.push(4);
// console.log(a);

// var a = 10;
// function aaa(a){
//     a += 3;
// }
// aaa(a);
// console.log(a);

// var a = 10;
// function aaa(a){
//     a += 3;
//     console.log(a);

// }
// aaa(a);
// console.log(a);

// var a = [1,2,3];
// function aaa(a){
//     a.push(4)
//     console.log(a);//13
// }
// aaa(a);
// console.log(a);10

// var a = [1,2,3];
// function aaa(a){
//     a = [1,2,3,4]
//     console.log(a);//[1,2,3,4]
// }
// aaa(a);
// console.log(a);//[1,2,3]


// 私有变量
// function Person(name){
//     this.getName = function(){
//         return name;
//     };
//     this.setName = function(value){
//         name = value;
//     };
// }

// var  person = new Person('ding');
// console.log(person.getName());
// person.setName('qi');
// console.log(person.getName());

// function MyObject(){
//     //私有变量和方法
//     var p = 10;
//     function pFunc(){
//         return false;
//     }

//     this.publicMethod = function(){
//         p++;
//         return pFunc();
//     };
// }

// var my = new MyObject();//每创建一个实例 都会创建一次私有变量和方法
// console.log(my.publicMethod());


// // 静态私有变量
// (function(){
//     var privateVar = 10;
//     function privateFun(){
//         return false;
//     }

//     MyObj = function(){};

//     MyObj.prototype.public = function(){
//         privateVar++;
//         return privateFun();
//     };
// })();

// var myobj1 = new MyObj();//这样创建一个实例,包含一个访问私有变量和方法的一个特权方法,
// var myobj2 = new MyObj();
// console.log(myobj1.public());
// console.log(myobj2.public());

// (function(){
//     var name = '张';
//     Person1 = function(value){
//         name = value;
//     };

//     Person1.prototype.getName = function () {
//         return name;
//     };

//     Person1.prototype.setName =function(value){
//         name = value;
//     };
// })()

// var per1 = new Person1();
// console.log(per1.getName());//ding
// per1.setName('long');
// console.log(per1.getName());//long

// var per2 = new Person1('xu');
// console.log(per1.getName());//xu
// console.log(per2.getName());//xu

// //per1,per2都是Person1的实例,都继承Person1原型上的方法,可以访问到getName和setName,getName又可以访问到私有作用域的name
// //************************************************* */
// Person2 = function(value){
//     name = value;//这个name是全局的name
// };

// Person2.prototype.getName = function () {
//     return name;
// };

// Person2.prototype.setName =function(value){
//     name = value;
// };

// var per3 = new Person1('ding');
// console.log(per3.getName());//ding
// per3.setName('long');
// console.log(per3.getName());//long

// var per4 = new Person1('xu');
// console.log(per4.getName());//xu
// console.log(per3.getName());//xu



// 继承
// function Aaa(){
//     this.property = true;
// }//Aaa是Object的实例

// //在原型上添加一个方法
// Aaa.prototype.getAaaValue = function () {
//     return this.property;
// }

// Aaa.myself = function () {
//     this.name = 'ding';
// }

// console.log(Aaa);

// function Bbb(){
//     this.Bbbproperty = false;
// }

// //继承
// Bbb.prototype = new Aaa();

// Bbb.prototype.getBbbValue = function() {
//     return this.Bbbproperty;
// }

// var instance = new Bbb();//定义了一个Bbb的实例
// console.log(instance.getAaaValue());
// console.log(instance.getBbbValue());
// console.log(instance)

// var str = 'asdfssaaasasasasaa';
// var json = {};

// for (var i = 0; i < str.length; i++) {
//         if(!json[str.charAt(i)]){
//                 json[str.charAt(i)] = 1;
//         }else{
//                 json[str.charAt(i)]++;
//         }
// };
// var iMax = 0;
// var iIndex = '';
// for(var i in json){
//         if(json[i]>iMax){
//                 iMax = json[i];
//                 iIndex = i;
//         }
// }
// console.log('出现次数最多的是:'+iIndex+'出现'+iMax+'次');

// //继承
// function Person(name){
//         this.name = name;
// }

// Person.prototype.showName = function(){
//         console.log(this.name);
// }

// function Worker(name, job){
//         Person.apply(this,arguments)
//         this.job = job;
// }
// for(var i in Person.prototype){
//         Worker.prototype = Person.prototype;
// }
// new Worker('sl', 'coders').showName();

// //编写一个方法 求一个字符串的字节长度;
// //假设一个中文占两个字节
// var str = '22两是';

// console.log(getStrlen(str))

// function getStrlen(str){
//         var json = {len:0};
//         var re = /[\u4e00-\u9fa5]/;
//         for (var i = 0; i < str.length; i++) {
//                 if(re.test(str.charAt(i))){
//                         json['len']++;
//                 }
//         };
//         return json['len']+str.length;
// }
// //变量提升
// function testvo(name,age){
//     var a = 1;
//     var b = function (){
//         return 2;
//     }
//     function C(){
//         return 3;
//     }
//     var c = 4;
// }

// console.log(testvo('ding',21))

// // this 指向
// var point = {
//     x:0,
//     y:0,
//     moveTo:function(x,y){
//         this.x = this.x + x;
//         this.y = this.y + y;
//         console.log(this.x,this.y,this);
//     }
// };
// point.moveTo(1,2)

// //
// function Point(x,y){
//     this.x = x;
//     this.y = y;
// }

// var np = new Point(1,1);
// console.log(np.x);
// var p = Point(2,2);
// // console.log(p.x);报错
// console.log(global.x);
// //使用new操作符是构造函数式，即通过new运算符调用构造函数Function来创建函数
// //不使用 new 并不是实例化，只是调用函数把返回值赋给变量。

// for (var i = 0; i < 5; i++) {
//         !function(i) {
//                 setTimeout(function () {
//                         console.log(new Date, i);
//                 }, 1000);
//         }(i);
// }

// console.log(new Date, i);

// function Elem(id) {
//         this.elem = document.getElementById(id);
// }

// Elem.prototype.html = function (val) {
//         var elem = this.elem;
//         if(val) {
//                 elem.innerHTML = val;
//                 return this;
//         } else {
//                 return elem.innerHTML;
//         }
// }

// Elem.prototype.on = function (type,fn) {
//         var elem = this.elem;
//         elem.addEventListener(type,fn);
// console.log(new Date());

// 获取横杠链接的日期
function dateFormat() {
        var date = new Date();
        var year = date.getFullYear();

        var month = date.getMonth() + 1;
        if (month < 10) {
                month = '0' + month;
        }

        var day = date.getDate();
        if (day < 10) {
                day = '0' + day;
        }

        var result = year + '-' + month + '-' + day;
        console.log(result);
}
dateFormat();

// 长度一致的随机数
function sameLen() {
        var num = Math.random();
        num = num + '';
        num = num.slice(0, 7);
        console.log(num);
}
sameLen();


