# trsanform属性  
transform 属性向元素应用 2D 或 3D 转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜。  

语法:`transform: none|transform-functions;`  

## 不转换：`none`

## 矩阵 matrix(),matrix3d(),
transform 属性还可以是一个 matrix，具体的语法是 `transform: matrix(a, b, c, d, e, f);`
```
| x'| = |a, c, e|   |x| = [ax + cy + e]
| y'| = |b ,d, f| * |y| = [bx + dy + f]
| 1 | = |0 ,0, 1|   |1| = [     1     ]
```  
**其中，x, y表示转换元素的所有坐标（变量）了。x' 和 y' 是 x 和 y 变形过后的结果，而 a, b, c, d, e, f 就正是决定了 x 和 y 如何 变化为 x' 和 y'**

## 位置变换(单位：px)
* `translate(x,y)`:定义 2D 转换。 	
* `translate3d(x,y,z)`:定义 3D 转换。 	
* `translateX(x)` :定义转换，只是用 X 轴的值。 	
* `translateY(y)` :定义转换，只是用 Y 轴的值。 	
* `translateZ(z)` :定义 3D 转换，只是用 Z 轴的值。

## 缩放
* `scale(x,y)`：定义 2D 缩放转换。 	
* `scale3d(x,y,z)`：定义 3D 缩放转换。 	
* `scaleX(x)`：通过设置 X 轴的值来定义缩放转换。 	
* `scaleY(y)`：通过设置 Y 轴的值来定义缩放转换。 	
* `scaleZ(z)`：通过设置 Z 轴的值来定义 3D 缩放转换。

## 旋转(单位：deg)
* `rotate(angle)` ：定义 2D 旋转，在参数中规定角度。
* `rotate3d(x,y,z,angle)`：定义 3D 旋转。 	
* `rotateX(angle)` ：定义沿着 X 轴的 3D 旋转。
* `rotateY(angle)` ：定义沿着 Y 轴的 3D 旋转。 
* `rotateZ(angle)` ：定义沿着 Z 轴的 3D 旋转。

## 倾斜(单位：deg)
* `skew(x-angle,y-angle)`: 定义沿着 X 和 Y 轴的 2D 倾斜转换。
* `skewX(angle)` :定义沿着 X 轴的 2D 倾斜转换。 
* `skewY(angle)` :定义沿着 Y 轴的 2D 倾斜转换。

## transform-origin
`transform-origin` 属性用来改变元素的变形中心点，默认情况下元素旋转或者缩放等等形变都是以元素的中心为参照点的，该属性可以允许修改这一特性。 

语法:`transform-origin: x-axis y-axis z-axis;`

`x-axis` 定义视图被置于 X 轴的何处。即 X 轴相对于元素什么位置。可能的值：
* left
* center
* right
* length
* %  
`y-axis` 定义视图被置于 Y 轴的何处。即 Y 轴相对于元素什么位置。可能的值：
* top
* center
* bottom
* length
* %  
`z-axis` 定义视图被置于 Z 轴的何处。即 Z 轴相对于元素什么位置。可能的值：`length`

![图片](https://cloud.githubusercontent.com/assets/7794103/17830394/a4c79314-66fc-11e6-8949-817316812e64.png)




