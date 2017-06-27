# javascript
1.**删除子节点**；  
  删除子节点：`removeChild()`:从子节点删除某一个节点  
  长辈节点元素.removeChild(要删除的子节点)；  
  * 如果删除成功，可返回删除的子节点；
  * 如果失败会返回null；
  但是删除后的子节点只是不在DOM树中，但是任然储存在内从中，以后还可访问到。
  * 如果想彻底删除在需要把删除的子节点赋值为null；
  ```js
  var oUl=document.getElementById("div1");
  var x=oUl.removeChild(oUl..childnodes[0]);
  x=null;//彻底删除
  ```
**值得注意的一点是,在移除子节点时，子节点的下标会随删除节点而发生变化**  
如果要用for循环删除所有节点，
```js
for(var i=0;i<oli.length;i++){
    oUl.removeChild(oUl..childnodes[i]);
}
```
这样的结果会发现第一次遍历完**只会删除0,2,4,6**  
这种原因是：每一次删除一个节点后所有的节点下标都会变化，当第二次删除时i=1，此时本来的第一位数字（0）已经被删除，此时的第一位下标为0数字为（1），下标为2的数字是2，所有会删除2，而不是1。  
去除所有节点的方法：  
A.正序删除会出现问题，我们就逆序删除:
```js
for(var i=oli.length-1;i>=0;i--){
    oUl.removeChild(oUl..childnodes[i]);
}
```
B.


