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
                constructor -&gt; getDerivedStateFromProps -&gt; render -&gt;
                update DOM tree -&gt; componentDidMount
              </p>
            </li>
            <li>
              <header className="text-xl">更新时</header>
              <p>
                new props -&gt; getDerivedStateFromProps -&gt;
                shouldComponentUpdate -&gt; render -&gt; update DOM tree -&gt;
                getSnapshotBeforeUpdate -&gt; componetDidUpdate
              </p>
              <p>
                setState -&gt; getDerivedStateFromProps -&gt;
                shouldComponentUpdate -&gt; render -&gt; update DOM tree -&gt;
                getSnapshotBeforeUpdate -&gt; componetDidUpdate
              </p>
              <p>
                forceUpdate -&gt; getDerivedStateFromProps -&gt; render -&gt;
                update DOM tree -&gt; getSnapshotBeforeUpdate -&gt;
                componetDidUpdate
              </p>
            </li>
            <li>
              <header className="text-xl">卸载时:</header>
              <p>componetWilUnmount</p>
            </li>
            <li>
              <header className="text-xl">错误时:</header>
              <p>componentDidCatch -&gt; setState正常流程</p>
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
              <p>
                重定向
                <br />
                301/308:永久重定向
                <br />
                302/307:临时重定向
                <br />
                304:缓存命中
              </p>
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
        <Article title="css选择器优先级">
          <ol>
            <li>important</li>
            <li>内联</li>
            <li>ID</li>
            <li>类 | 伪类 | 属性选择</li>
            <li>标签 | 伪对象</li>
          </ol>
        </Article>
        <Article title="伪类和伪元素的区别">
          <ul>
            <li>伪类：使用:符号,获取dom树中不存在的信息</li>
            <li>伪元素：使用::符号,在dom中创建抽象元素</li>
          </ul>
        </Article>
        <Article title="css关系选择器">
          <ul>
            <li>a,b: a标签和b标签</li>
            <li>a b: 父元素或祖父元素为a标签的b标签</li>
            <li>a&gt;b: 父元素为a标签的b标签</li>
            <li>a+b: a标签后的第一个b标签</li>
            <li>a~b: a标签后的任意一个兄弟b标签</li>
          </ul>
        </Article>
        <Article title="单点登录(SSO)">
          <ol>
            <li>
              <header className="text-xl">同域名共享cookie</header>
              <p>
                如果所有平台在同一个顶级域名下，可以将cookie存在顶级域名使得其在子域名共享
              </p>
            </li>
            <li>
              <header className="text-xl">SSO认证授权</header>
              <p>
                首先用户登录子平台，被重定向到认证中心(附带子平台的地址信息)。
                <br />
                如果未登录，则正常进行登录，如果登录过，则自动登录。 <br />
                总之最后会被重定向回子平台(附带生成的token信息)。 <br />
                此时子平台只需要通过请求向认证中心验证token就能正常登入了。
              </p>
            </li>
          </ol>
        </Article>
        <Article title="box-sizing属性">
          <ol>
            <li>
              <header className="text-xl">content-box</header>
              <p>width/height指content部分的宽高</p>
            </li>
            <li>
              <header className="text-xl">border-box</header>
              <p>width/height指border + padding + content部分的宽高</p>
            </li>
          </ol>
        </Article>
        <Article title="BFC">
          <section>
            <header className="text-xl">触发方式</header>
            <ul>
              <li>html元素</li>
              <li>float元素(float不为none)</li>
              <li>绝对定位元素(position为absolute/fixed)</li>
              <li>display为inline-block/table-cells/flow-root</li>
              <li>display为flex/grid的直接子元素</li>
              <li>overflow为hidden/auto/scroll</li>
            </ul>
          </section>
          <section>
            <header className="text-xl">解决问题</header>
            <ul>
              <li>同一BFC下margin折叠问题</li>
              <li>防止浮动导致高度塌陷</li>
              <li>防止浮动区域和其他区域重叠</li>
            </ul>
          </section>
        </Article>
        <Article title="小图优化">
          <ul>
            <li>使用图标字体(icon font)</li>
            <li>使用svg标签</li>
            <li>DataUrl(base64等格式)</li>
          </ul>
        </Article>
        <Article title="JS判断obj是不是数组">
          <ul>
            <li>Array.isArray(obj)</li>
            <li>obj instanceof Array</li>
            <li>obj.__proto__.constructor === Array</li>
            <li>
              Object.prototype.toString.call(obj) === &quot[object Array]&quot
            </li>
          </ul>
        </Article>
        <Article title="进程和线程的区别">
          <ul>
            <li>进程是资源分配最小的单位,线程是程序执行的最小单位.</li>
            <li>进程有独立的地址空间,线程会共享地址空间.</li>
            <li>线程创建,切换,占用资源开销小. 进程间通信不便,线程通信方便.</li>
            <li>
              进程挂掉不影响其他进程,但线程挂掉会导致整个进程挂掉(线程死循环不会影响其他线程)
            </li>
          </ul>
        </Article>
        <Article title="跨域">
          <ul>
            <li>jsonp</li>
            <li>cors allow-cross-origin</li>
            <li>proxy</li>
          </ul>
        </Article>
        <Article title="算法题思路">
          <ul>
            <li>排序:位置信息无效的数组</li>
            <li>前缀和:快速求解区间和</li>
            <li>差分数组:快速进行区间加减</li>
            <li>拓扑排序:有向图中查找环</li>
          </ul>
        </Article>
        <Article title="图片懒加载">
          <ul>
            <li>
              <header>data-src属性存url + 视口计算</header>
              <ul>
                <li>
                  <header>onscroll + 位置信息</header>
                  <p>
                    img.offsetTop &lt; window.innerHeight +
                    document.documentElement.scrollTop
                  </p>
                </li>
                <li>
                  <header>onscroll + getBoundingClientRect</header>
                  <p>
                    img.getBoundingClientRect().top &lt;
                    documentElement.clientHeight
                  </p>
                </li>
                <li>
                  <header>IntersectionObserver</header>
                  <p>entry.intersectionRatio &gt; 0</p>
                </li>
              </ul>
            </li>
            <li>
              <header>loading属性(存在兼容性问题)</header>
              <p>
                例子:&lt;img src=&quot;image.jpg&quot; alt=&quot;...&quot;
                loading=&quot;lazy&quot;&gt;
              </p>
            </li>
          </ul>
        </Article>
        <Article title="防抖和节流">
          <ul>
            <li>
              <header>防抖</header>
              <p>多次调用只有最后一次生效,目的是消除无效调用</p>
            </li>
            <li>
              <header>节流</header>
              <p>多次调用会过滤部分调用,目的是减小运算开销</p>
            </li>
          </ul>
        </Article>
        <Article title="Http2.0">
          <ul>
            <li>header压缩</li>
            <li>多路复用</li>
            <li>Server Push</li>
            <li>二进制分帧</li>
          </ul>
        </Article>
        <Article title="client,offset和scroll">
          <ul>
            <li>
              <header>client</header>
              <p>元素本身可视内容,不含overflow部分,滚动条,border,包含padding</p>
              <ul>
                <li>clientHeight:对象可见高度</li>
                <li>clientWidth:对象可见宽度</li>
                <li>clientTop:元素距离顶部距离</li>
                <li>clientLeft:元素距离左侧的距离</li>
              </ul>
            </li>
            <li>
              <header>offset</header>
              <p>
                偏移，包含所有显示宽度,包括滚动条,padding,border,但不包括overflow部分
              </p>
              <ul>
                <li>
                  offsetHeight = border-width * 2 + padding-top + height +
                  padding-bottom
                </li>
                <li>
                  offsetWidth = border-width * 2 + padding-left + width +
                  padding-right
                </li>
                <li>
                  offsetParent:
                  向上查找position为absolute/relative的第一个节点,没有为body
                </li>
                <li>offsetTop: 相对offsetParent属性中顶部距离</li>
                <li>offsetLeft: 相对offsetParent属性中左部距离</li>
              </ul>
            </li>
            <li>
              <header>scroll</header>
              <p>
                滚动，包含元素实际高度，包括overflow部分但不包括padding和border
              </p>
              <ul>
                <li>scrollHeight: 对象的滚动高度</li>
                <li>scrollWidth: 对象的滚动高度</li>
                <li>scrollTop: 对象的纵向滚动距离</li>
                <li>scrollLeft: 对象的横向滚动距离</li>
              </ul>
            </li>
          </ul>
        </Article>
        <Article title="面试提问">
          <ul>
            <li>工作中需要使用到的技术栈</li>
            <li>工作节奏怎么样,是否有时间进行技术沉淀</li>
            <li>对开源的态度</li>
            <li>对简历的看法</li>
          </ul>
        </Article>
        <Article title="http请求取消">
          <ul>
            <li>xhr: request.abort()</li>
            <li>fetch: abortcontroller.signal/abort()</li>
            <li>axios: canceltoken.source()/cancel()</li>
          </ul>
        </Article>
        <Article title="CSRF攻击">
          <ol>
            <li>用户登录网站A,本地存储cookie</li>
            <li>用户登录诱导网站B,隐式发送请求给A,其中会附带cookie</li>
          </ol>
        </Article>
        <Article title="下载json数据">
          <ol>
            <li>新建a标签并模拟点击</li>
            <li>
              <ul>
                <li>将json转为data url</li>
                <li>将json转为blob并用createObjectURL创建url</li>
              </ul>
            </li>
          </ol>
        </Article>
        <Article title="data url">
          <p>data:[&lt;mediatype&gt;][;base64],&lt;data&gt;</p>
        </Article>
        <Article title="encodeuri和encodeuricomponent">
          <ul>
            <li>encodeuri: 设计上对整个url编码</li>
            <li>encodeuricomponent: 设计上对url中search部分[key,value]编码</li>
          </ul>
        </Article>
        <Article title="css一行超出显示省略号">
          <ul>
            <li>overflow: hidden;</li>
            <li>text-overflow: ellipsis;</li>
            <li>white-space: nowrap;</li>
          </ul>
        </Article>
        <Article title="css隐藏页面中元素">
          <ul>
            <li>display: none</li>
            <li>opacity: 0</li>
            <li>visibility: hidden</li>
          </ul>
        </Article>
      </main>
    </div>
  )
}

export default Index
