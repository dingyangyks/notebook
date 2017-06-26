# Noetbook
## CSS  
### **position定位**  
1.position：absolute；绝对定位  
  position：absolute脱离文本流，不会撑开body；相对于父元素定位， **不受父元素padding的影响**   
  * 如果存在父元素，父元素要设置position属性（absolute/relative），且要设置lrtb值，缺一不可，才能使子元素进入父元素内部。

  * 如果不存在父元素， position：absolute是以浏览器左上角为坐标原点开始定位而不是body；但是当body的margin：0；时body等于浏览器窗口。

  * 如果存在LRTB，则不受父元素padding的影响，  
  ```css
     #div1{
        position: absolute;
        left: 0px;
        top: 0px;
        width: 150px;
        height: 150px;
        background-color: red;
        }
    body{
        padding: 10px
        }
  ```
  结果如下：
   ![图片](https://ooo.0o0.ooo/2017/06/26/5950c2fb096e0.png)

  如果不存在，则受padding影响。
  ```css
     #div1{
        position: absolute;
        /*left: 0px;
        top: 0px;*/
        width: 150px;
        height: 150px;
        background-color: red;
        }
    body{
        padding: 10px
        }
  ```
  结果如下：    
  ![图片](https://ooo.0o0.ooo/2017/06/26/5950c2331ceef.png)  
  
2.position：relative；相对定位   
position：relative不脱离文本流，会撑开body；相对于父元素定位，  
**受父元素padding的影响** 
*  无论父级存在不存在，无论有没有TRBL，均是以父级的左上角进行定位，但是父级的Padding属性会对其影响。

* 如果父元素不存在，则父元素默认为body，此时会以body的左上角为原点进行定位，如果body存在margin则不是浏览器的左上角为原点。

* 如果用position来布局页面，父级元素的position属性必须为relative，而定位于父级内部某个位置的元素，最好用 absolute，因为它不受父级元素的padding的属性影响，当然你也可以用position，不过到时候计算的时候不要忘记padding的值    

3.position：staic；静态定位  
指定元素使用正常的布局行为，即元素在文档流中当前的布局位置。此时 top, right, bottom, left 和 z-index 属性无效。
  
4.position：fixed；固定定位   
相对于浏览器窗口定位，且不会随着滚动条的移动而变化



### 三栏布局
## javascript
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

