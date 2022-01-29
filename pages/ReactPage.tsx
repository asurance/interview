import { NextPage } from 'next'

const ReactPage: NextPage = () => (
  <article>
    <h1>React</h1>
    <h2>挂载时</h2>
    {
      'constructor -> getDerivedStateFromProps -> render -> update DOM tree -> componentDidMount'
    }
    <h2>更新时</h2>
    {
      'new props -> getDerivedStateFromProps -> shouldComponentUpdate -> render -> update DOM tree -> getSnapshotBeforeUpdate -> componetDidUpdate'
    }
    {
      'setState -> getDerivedStateFromProps -> shouldComponentUpdate -> render -> update DOM tree -> getSnapshotBeforeUpdate -> componetDidUpdate'
    }
    {
      'forceUpdate -> getDerivedStateFromProps -> render -> update DOM tree -> getSnapshotBeforeUpdate -> componetDidUpdate'
    }
    <h2>卸载时</h2>
    {'componetWilUnmount'}
    <h2>错误时</h2>
    {'componentDidCatch -> setState正常流程'}
  </article>
)

export default ReactPage
