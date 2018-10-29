### Introduction
----------
redux是我们在使用react技术栈时，社区中最主流的数据流解决方案。本repo不会具体讲解redux的技术实现原理（哈哈标题党），因为redux的实现其实没什么特别好讲的，网上一堆文章，redux简单版的实现总代码数不会超过200行，包括store是怎么生成的，中间件的执行机制等等。你甚至可以自己写一个中间件来玩，包括redux-thunk，redux-promise-middleware,redux-logger等等这些中间件都是很简单易懂的。你可以用这个项目里的代码，写一个自己的中间件？或者做一些调试来了解redux的执行过程？whatever
![image](https://user-images.githubusercontent.com/24691802/47655336-c1ba7f80-dbc7-11e8-8848-51ccf170431b.png)  
#### Installation
```shell
git clone https://github.com/coderzzp/how-redux-works.git
npm i 
npm start
```
然后CRA会帮我们运行项目
#### 玩法？
看看项目里的数据流是怎么流动的，中间件是如何执行的，关于中间件的执行顺序，这里有一篇很好的[文章](https://github.com/fi3ework/blog/issues/14)推荐
emm本来想自己写一个redux异步请求的中间件，看完redux-promise-middleware感觉也没什么好玩的，社区已经把该做的事情都做的很好了  
