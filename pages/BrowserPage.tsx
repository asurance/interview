import { NextPage } from 'next'

const BrowserPage: NextPage = () => (
  <article>
    <h1>浏览器</h1>
    <h2>强缓存</h2>
    <div>浏览器判定本地缓存未过期,直接使用本地缓存。</div>
    <h3>expires</h3>
    <div>存储时间戳,如果获取的时间戳小于expires的时间戳,则可以直接用缓存。</div>
    <h3>Cache-Control</h3>
    <h4>max-age</h4>
    <div>代表资源的过期时间。</div>
    <h4>public/private</h4>
    <div>浏览器和代理服务器都可缓存/仅浏览器缓存</div>
    <h4>no-cache</h4>
    <div>告诉浏览器没有强缓存,有协商缓存。</div>
    <h4>no-store</h4>
    <div>既没有强缓存,也没有协商缓存。</div>
    <h2>协商缓存</h2>
    <div>
      浏览器向服务器询问资源是否过期,未过期则直接使用本地缓存。(请求会返回状态码304)
    </div>
    <h3>Last-Modified/If-Modified-Since</h3>
    <div>
      首次请求会回Last-Modified和时间戳,之后的请求需要带If-Modified-Since并带上上次的时间戳。
    </div>
    <h3>Etag/If-None-Match</h3>
    <div>
      Etag是服务器生成的文件的标识符,会随文件内容变化。首次请求会回Etag和标识符,之后的请求需要带If-Modified-Since并带上上次的标识符。
    </div>
  </article>
)

export default BrowserPage
