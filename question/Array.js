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



