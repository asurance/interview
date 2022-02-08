import { NextPage } from 'next'
import Head from 'next/head'
import Article from '../components/Article'

const Index: NextPage = () => {
  return (
    <div className="px-4 py-2 overflow-auto h-screen bg-gradient-to-br from-green-400 to-blue-400">
      <Head>
        <title>Asurance的面试工具箱</title>
      </Head>
      <header className="text-4xl text-center">Asurance的面试工具箱</header>
      <main>
        <Article title="React类组件生命周期">
          <ol>
            <li>
              <header className="text-xl">挂载时:</header>
              <p>
                {
                  'constructor -> getDerivedStateFromProps -> render -> update DOM tree -> componentDidMount'
                }
              </p>
            </li>
            <li>
              <header className="text-xl">更新时</header>
              <p>
                {
                  'new props -> getDerivedStateFromProps -> shouldComponentUpdate -> render -> update DOM tree -> getSnapshotBeforeUpdate -> componetDidUpdate'
                }
              </p>
              <p>
                {
                  'setState -> getDerivedStateFromProps -> shouldComponentUpdate -> render -> update DOM tree -> getSnapshotBeforeUpdate -> componetDidUpdate'
                }
              </p>
              <p>
                {
                  'forceUpdate -> getDerivedStateFromProps -> render -> update DOM tree -> getSnapshotBeforeUpdate -> componetDidUpdate'
                }
              </p>
            </li>
            <li>
              <header className="text-xl">卸载时:</header>
              <p>{'componetWilUnmount'}</p>
            </li>
            <li>
              <header className="text-xl">错误时:</header>
              <p>{'componentDidCatch -> setState正常流程'}</p>
            </li>
          </ol>
        </Article>
        <Article title="http常见返回码">
          <ol>
            <li>
              <header className="text-xl">1xx</header>
              <p>信息提示</p>
            </li>
            <li>
              <header className="text-xl">2xx</header>
              <p>成功</p>
            </li>
            <li>
              <header className="text-xl">3xx</header>
              <p>重定向(304和缓存相关)</p>
            </li>
            <li>
              <header className="text-xl">4xx</header>
              <p>客户端错误</p>
            </li>
            <li>
              <header className="text-xl">5xx</header>
              <p>服务端错误</p>
            </li>
          </ol>
        </Article>
        <Article title="浏览器缓存策略">
          <ol>
            <li>
              <header className="text-xl">强缓存</header>
              <p>浏览器判定本地缓存未过期,直接使用本地缓存。</p>
            </li>
            <li>
              <header className="text-xl">协商缓存</header>
              <p>
                浏览器向服务器询问资源是否过期,未过期则直接使用本地缓存。(请求会返回状态码304)
              </p>
            </li>
            <li>
              <header className="text-xl">相关header</header>
              <ul>
                <li>
                  <header className="text-lg">expires</header>
                  <p>缓存的过期时间点</p>
                </li>
                <li>
                  <header className="text-lg">cache-control</header>
                  <ul>
                    <li>public:资源可以在客户端和代理服务器缓存</li>
                    <li>private:资源仅可以在客户端缓存</li>
                    <li>maxage:资源缓存可用时间</li>
                    <li>no-cache:资源无法强缓存</li>
                    <li>no-store:资源无法缓存</li>
                  </ul>
                </li>
                <li>
                  <header className="text-lg">
                    last-modified/if-modified-since
                  </header>
                  <p>
                    首次请求资源获取last-modified用于标记资源最后一次修改时间，之后请求会将时间附带在if-modified-since
                  </p>
                </li>
                <li>
                  <header className="text-lg">etag/if-none-match</header>
                  <p>
                    首次请求资源获取etag用于标记资源在服务端唯一标识，之后请求会将标识附带在if-none-match
                  </p>
                </li>
              </ul>
            </li>
          </ol>
        </Article>
      </main>
    </div>
  )
}

export default Index
