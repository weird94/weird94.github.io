1.  移动端应该如何适配
2.  如何清除浮动, 清除浮动的作用有哪些
3.  css中position属性有哪些值, 分别有哪些作用
4.  简述盒模型
5.  用html css实现一个div 宽高各100 水平垂直居中
1.  以下代码执行结果是什么
    ```
    ['1','2','3'].map(parseInt)
    ```
2. 怎么实现以下转换(箭头仅表示转换方向)
    ```  
    var a = [1, 2, 3, 4, 5, 5, 5, 5] 
    =>
    a = [1, 2, 3, 4, 5]
    ```
    ```  
    var a = [[1, 2, 3],[4, 5],[6],[7, 8],[9]]
    => 
    a = [1, 2, 3, 4, 5, 6, 7, 8, 9] 
    ```
10. 以下代码会输出什么结果 (用箭头 => 表示1s的间隔)
    ```
        for (var i = 0; i < 5; i++) {
          setTimeout(function() {
              console.log(i);
          }, 1000);
        }
        console.log(i);
    ```
11. 以下代码执行后会输出什么结果
    ```
      setTimeout(() => { console.log(1) }, 0)
      console.log(2)
      var promise = new Promise(function (resolve, reject) {
        console.log(3)
        resolve()
      })
      promise.then(function (res) {
        console.log(4)
      })
      console.log(5)
    ```
6.  简述vue响应式原理
7.  vue组件通信如何实现
    * 父组件向子组件通信
    * 子组件向父组件通信
    * 兄弟组件之间通信
8. 简述es6模块规则
