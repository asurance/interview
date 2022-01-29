import { NextPage } from 'next'

const HttpPage: NextPage = () => (
  <article>
    <h1>http</h1>
    <h2>返回码</h2>
    <h3>1xx</h3>
    <div>信息提示</div>
    <h3>2xx</h3>
    <div>成功</div>
    <h3>3xx</h3>
    <div>重定向</div>
    <h3>4xx</h3>
    <div>客户端错误</div>
    <h3>5xx</h3>
    <div>服务端错误</div>
  </article>
)

export default HttpPage
