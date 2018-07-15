## Rax diff React

### React16

#### 核心的改变 架构升级 Stack Reconciler -> Fiber Reconciler

1. 渲染过程 从同步的渲染动作 -> 异步的渲染动作
    * 在同步渲染过程中渲染/更新过程一旦开始无法中断，持续占用主线程，主线程忙于执行JS，无暇他顾（布局、动画），造成掉帧、延迟响应（甚至无响应）等不佳体验
    * 异步的渲染过程中 react在渲染过程中会把任务细分成多个chunk 在每个chunk结束的时候会去检查当前有没有高优先级的任务(用户输入等等)
2. 渲染任务 任务将被标记上优先级, 高优先级的任务将被优先执行
##### 优先级
  1. synchronous 与之前的Stack reconciler操作一样，同步执行 （首屏（首次渲染）用，要求尽量快，不管会不会阻塞UI线程）
  2. task 在next tick之前执行
  3. animation 下一帧之前执行 通过requestAnimationFrame来调度，这样在下一帧就能立即开始动画过程
  4. high 在不久的将来立即执行 由requestIdleCallback回调执行的 
  5. low 稍微延迟（100-200ms）执行也没关系 由requestIdleCallback回调执行的 
  6. offscreen 下一次render时或scroll时才执行 offscreen指的是当前隐藏的、屏幕外的（看不见的）元素
  7. 高优先级的比如键盘输入（希望立即得到反馈），低优先级的比如网络请求，让评论显示出来等等。另外，紧急的事件允许插队

#### 生命周期变化

##### 在 React16 中生命周期将继续有效，直到版本 17 的生命周期

> 标记为UNSAFE的原因是在react16的新架构中, 组件的生命周期可以被打断(放弃当前render过程去执行优先级更高的任务), 所以componentWillMount, componentWillReceiveProps, componentWillUpdate都存在被执行多次的可能, 所以是“UNSAFE”的生命周期函数

*  componentWillMount -> UNSAFE_componentWillMount 可以移至 constructor 或 componentDidMount 中代替
*  componentWillReceiveProps -> UNSAFE_componentWillReceiveProps 使用新的 getDerivedStateFromProps api代替
*  componentWillUpdate -> UNSAFE_componentWillUpdate 使用 getSnapshotBeforeUpdate + compoentDidUpdate代替

##### 新增的生命周期

*  [rax 不支持] static getDerivedStateFromProps: 从 props 中迭代出新的 state, 静态方法, 无法访问this, 言外之意就是react不希望你在这个函数里面做一些乱七八糟的事情
*  [rax 不支持] getSnapshotBeforeUpdate: 在 componentDidupdate 之前抓取 dom 的快照将被 return 然后作为 componentDidUpdate 的第三个参数被传递给 componentDidUpdate

##### 新增

1.  [rax支持][增量] componentDidCatch 更好的处理组件在运行时发生的错误, 作为兜底逻辑, 不影响原有生命周期
2.  unstable_handleError

#### render支持的返回

1.  [rax 支持] render 支持返回数组（key）, 字符串
2.  [rax 支持, 有 bug] render 支持返回 Portals, 可以跳出父组件 dom 节点, 更方便的实现 modal 等组件

7.  ref Ref.getRef()
8.  context React.createContext()

#### 支持自定义属性

1. 在v16之前, html DOM 的非标准 attribute 会被忽略, 自定义的 attribute 只有符合 html5 "data-"的标准才能被react认可

#### Pointer Event

#### 服务器端渲染的改进

1. 没有 checksum
2. 新增 ReactDOM.hydrate 方法, 在v16中
3. stream 的支持, renderToNodeStream


## 参考资料

1. 