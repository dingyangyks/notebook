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

var a = [1,2,3];
function aaa(a){
    a = [1,2,3,4]
    console.log(a);//[1,2,3,4]
}
aaa(a);
console.log(a);//[1,2,3]