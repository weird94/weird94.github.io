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
4.  slice splice 区别
5.  a b c 请求 c请求必须以a b请求结果作为参数, 怎么做
7.  闭包是什么 闭包用法
9.  *  手写css  一个div 宽高各100 实现水平垂直居中
    *  添加点击事件, 点击后实现一个像左上角移出屏幕的动画
    *  移出屏幕后怎么把这个div删除
10. 以下代码会输出什么结果，为什么？
    ```
        for (var i = 0; i < 5; i++) {
          setTimeout(function() {
              console.log(new Date, i);
          }, 1000);
        }
        console.log(new Date, i);
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
