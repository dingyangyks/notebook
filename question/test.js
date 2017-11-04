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


var str1 = 'cat, bat, sat, fat';
var reg1 = /.at/g;
console.log(str1.match(reg1));
// var result = reg1.exec(str1);
// console.log(result[0])
// console.log(result.index)
// console.log(reg1.lastIndex);
// result = reg1.exec(str1);
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(reg1.lastIndex);