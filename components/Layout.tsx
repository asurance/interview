import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'

type Props = {}

const Layout: FC<PropsWithChildren<Props>> = ({ children }) => (
  <section className="layout">
    <nav className="sider">
      <div className="menu">
        <Link href="CssPage">css</Link>
      </div>
      <div className="menu">
        <Link href="TsPage">js/ts</Link>
      </div>
      <div className="menu">
        <Link href="HttpPage">http</Link>
      </div>
      <div className="menu">
        <Link href="BrowserPage">浏览器</Link>
      </div>
      <div className="menu">
        <Link href="ReactPage">React</Link>
      </div>
      <div className="menu">
        <Link href="AlgorithmPage">算法</Link>
      </div>
      <div className="menu">
        <Link href="QuestionPage">面试提问</Link>
      </div>
    </nav>
    <main>{children}</main>
  </section>
)

export default Layout
