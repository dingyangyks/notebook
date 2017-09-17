function merge (left,right) {   
    var result = [];
    while (left.length > 0 && right.length > 0){
        if (left[0] < right[0]) {
        result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    console.log(result.concat(left).concat(right));
    // console.log(left,right)
    // console.log(result);
    return result.concat(left).concat(right);
}
// merge([7,8,9,],[4,5,6,10]);

function mergeSort (items) {
    if (items.length === 1) {
        return items;
    }

    var middle = Math.floor(items.length / 2);
    var left = items.slice(0,middle)
    var right = items.slice(middle);
    // console.log(left,right)
    return merge(mergeSort(left),mergeSort(right));
}

mergeSort([5,6,7,8,5,1,24,45])