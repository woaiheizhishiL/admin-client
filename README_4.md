## 实现功能
   7天免登陆
   请求token检查
   Admin整体界面
   左侧导航
   头部界面

## 需要下载使用的相关插件 
   jsonwebtoken: 后台用来生成token和进行token娇艳的工具包
   run code：vscode插件  快速运行js代码
   store:用于浏览器存储的工具函数包
   dayjs/date-fns/moment:日期处理

## 编码要点
### 1.登陆token验证
    1).理解
      【token就是一个字符串，对一些数据和过期时间进行编码（加密）处理后产生的一个字符串】
       a.是一个包含特定信息的加密的字符串：id/失效的时间
       b.对请求进行一定的检查限制，防止恶意请求
       c.后台部分接口需要进行token验证
    2).使用流程
       a.客户端发送登陆的请求，服务器端进行用户名和密码查询，
       如果user存在，根据user的id值生成token(指定了有效期)，将user和token返回给客户端
       b.客户端接收到登录成功的响应后，将user和token保存到local和state
       c.在请求需要授权检查的接口前(在请求拦截器做)
       如果token存在，将token添加到请求头中：config.headers.Authorization = token
       d.在相应拦截器中处理错误
       取出response中的status
       status为：401：token没有/国企，退出登录(清楚local和state中的user和token)，并跳转到登陆页面
       status为：404：提示访问的资源不存在
       其他的做统一的错误提示
### 2. 封装localStorage,并使用store插件简化/完善封装

### 3. 使用自定义高阶组件进行登陆检查

### 4. Admin整体结构和子路由的搭建

### 5. Admin的左侧导航组建实现

### 6. Admin的头部组件实现










### 如何在组件外面操作路由(路由跳转/获取路由信息)