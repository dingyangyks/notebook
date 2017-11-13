// 一个可以遍历数组和对象的函数，类似于foreach
// 重写数组的几个迭代方法
var arr = [9, 1,98, 2, 3, 4, 5];
Array.prototype._foreach = function (fn) {
   var array = this;
   var index,item;
   for(index = 0; index < array.length; index++){
       item = array[index];
       fn(item, index, array)
   }
};

Array.prototype._map = function (fn) {
    var array = this;
    var arr = [];
    var index,item;
    for(index = 0; index < array.length; index++) {
        item = array[index];
        arr.push(fn(item, index, array));
    }
    return arr;
}

Array.prototype._every = function (fn) {
    var array = this;
    var index,item;
    for(index = 0; index < array.length; index++) {
        item = array[index];
        if(!fn(item, index, array)){
            return false;
        }
    }
    return true;
};


Array.prototype._some = function (fn) {
    var array = this;
    var index,item;
    for(index = 0; index < array.length; index++) {
        item = array[index];
        if(fn(item, index, array)){
            return true;
        } 
    }
    return false;
};

Array.prototype._filter = function (fn) {
    var array = this;    
    var index,item;
    var arr = [];
    for(index = 0; index < array.length; index++) {
        item = array[index];
        if(fn(item, index, array)){
            arr.push(item);
        }
    }
    return arr;
}

Array.prototype._push = function (a) {
    this[this.length] = a;
}


// 遍历对象属性
var obj = {
    x:100,
    y:200,
    z:300
};
var key;
for(key in obj){
    if(obj.hasOwnProperty(key)) {
        // console.log(key,obj[key]);
    }
}

// 既可以遍历数组也可以遍历对象
function objAndArr (fn,obj) {
    var key;
    if(obj instanceof Array) {
        obj.forEach(function(item,index,array) {
            fn(item,index,array);
        })
    } else {
        for(key in obj) {
            if(obj.hasOwnProperty(key)){
                fn(key,obj[key]);
            }
        }
    }
}
objAndArr(function(key,val){
    console.log(key,val);
},obj)


var obj = {a:1};
console.log(obj.a);//1
console.log(obj['a']);//1
console.log(obj[a]);//a is not defined


