# javascript
## 1.删除子节点；   
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
## 2.感受作用域  
 ```js
    var a=5;
    !function add(){
        a=a+1;
        var b=3;
        console.log(b);
    }();
    !function add1(){
        a=a+2;
    }();
    console.log(a);
 ```  
 结果是a=8，b=3；体会作用域的取值和作用域中值得变化，局部函数能访问全局中的参数，且经过局部函数的操作能改变全局参数的值，并返回给全局参数。  
## 3.简单运动  
1.最原始的简单写法（有多处bug）
 ```js
 function startmove(){
            setInterval(function(){
                odiv.style.left=odiv.offsetLeft+10+"px";
            },30) 
        }
 ```
  该代码会产生如下问题：  
  * 运动不会体质
  * 多次点击按钮会导致速度越来越快
  * 取某些速度的值会导致不会停止
  * 停止后继续点击会继续移动  
  解决方案如下：
  ```js
    var timer=null;/*先把定时器存为null，方便以后关掉*/
        function startmove(){
           var odiv=document.getElementById("div1");
           clearInterval(timer);/*在执行运动前关掉定时器就不会导致多次点击速度越来越快*/
           /*把计时器记录下来*/
           timer = setInterval(function(){
                if(parseInt(odiv.style.left)>=300){/*注意odiv.style.left是带px单位的*/
                    clearInterval(timer);/*关闭计时器即可停止 clearInterval是关掉下一次计时，所有再次点击还会运动一次*/
                }else{/*把运动条件放在else里面即可解决停止后再点击会继续运动的问题 这样就会使停止和运动对立起来*/
                    odiv.style.left=odiv.offsetLeft+1+"px";
                }
            },30) 
        }
  ```
