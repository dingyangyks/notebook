### 你能描述当你制作一个网页的工作流程吗？

1. 首先要分析网页的主题，结构，功能。  
2. 根据分析，进行合理的网页结构设计，在这个过程中应考虑到网页的安全性，高性能，可读性，简洁性，美观性，seo。
3. 在开始正式设计网页之前，进行素材收集，资源收集。
4. 开始进行合理设计，代码应符合语义化，简洁整齐，可读性强，可维护性强
5. 进行测试，检查各个效果是否存在bug

### 假若你有 5 个不同的样式文件 (stylesheets), 整合进网站的最好方式是?

根据class命名规则写样式，提取公共样式，进行合并，**如果每个文件都很大，需要分模块加载**

### 前端需要注意哪些SEO

1. 合理使用`tittle`,`description`,`keywords`,搜索引擎对这三个的搜索权重依次减小,`tittle`要强调重点,不同页面应不相同,`description`把页面内容高度概括，长度合适，不可过分堆砌关键词，不同页面description有所不同；`keywords`列举出重要关键词即可
2. 语义化的HTML代码，符合W3C规范：语义化代码让搜索引擎容易理解网页
3. 重要内容HTML代码放在最前：搜索引擎抓取HTML顺序是从上到下，有的搜索引擎对抓取长度有限制，保证重要内容一定会被抓取
4. 重要内容不要用js输出：爬虫不会执行js获取内容
5. 少用`iframe`：搜索引擎不会抓取`iframe`中的内容
6. 非装饰性图片必须加`alt`
7. 提高网站速度：网站速度是搜索引擎排序的一个重要指标

### `<img>`的`title`和`alt`有什么区别

`title`是global attributes之一。通常当鼠标滑动到元素上的时候显示。
`alt`是<img>的特有属性，是图片内容的等价描述，用于图片无法加载时显示、读屏器阅读图片。可提图片高可访问性，**除了纯装饰图片外都必须设置有意义的值，搜索引擎会重点分析**。

### doctype是什么,举例常见doctype及特点

`<!DOCTYPE>` 声明必须是 HTML 文档的第一行，位于 `<html>`标签之前。
`<!DOCTYPE>` 声明不是 HTML 标签；它是指示 web 浏览器关于页面使用哪个 HTML 版本进行编写的指令。HTML5 不基于 SGML，所以不需要引用 DTD。**文档类型定义(DTD)**可定义合法的XML文档构建模块。它使用一系列合法的元素来定义文档的结构。

### HTML全局属性有哪些

参考资料：[MDN: html global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)  

* `accesskey`:设置快捷键，提供快速访问元素如aaa在windows下的firefox中按alt + shift + a可激活元素
* `class`:为元素设置类标识，多个类名用空格分开，CSS和javascript可通过class属性获取元素
* `contenteditable`: 指定元素内容是否可编辑
* `contextmenu`: 自定义鼠标右键弹出菜单内容
* `data-*`: 为元素增加自定义属性
* `dir`: 设置元素文本方向
* `draggable`: 设置元素是否可拖拽
* `dropzone`: 设置元素拖放类型： copy, move, link
* `hidden`: 表示一个元素是否与文档。样式上会导致元素不显示，但是不能用这个属性实现样式效果
* `id`: 元素id，文档内唯一
* `lang`: 元素内容的的语言
* `spellcheck`: 是否启动拼写和语法检查
* `style`: 行内css样式
* `tabindex`: 设置元素可以获得焦点，通过tab可以导航
* `title`: 元素相关的建议信息
* `translate`: 元素和子孙节点内容是否需要本地化



