import { FC, PropsWithChildren, ReactNode } from 'react'

type Props = PropsWithChildren<{ title: ReactNode }>

const Article: FC<Props> = ({ title, children }) => (
  <article className="mt-2 px-3 py-1 rounded-xl bg-gradient-to-br from-amber-50 to-white">
    <header className="text-2xl">{title}</header>
    {children}
  </article>
)

export default Article
