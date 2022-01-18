import React, { ReactNode } from 'react'
import { Link } from 'gatsby'
import Title from '../../atoms/Title'
import Seo from '../../atoms/Seo'

interface LayoutProps {
  pageTitle: string
  children: ReactNode
}

export const Layout = ({ pageTitle, children }: LayoutProps) => {
  return (
    <div className="container generalLayout">
      <Seo title={pageTitle} />
      <Title pageTitle={pageTitle} />
      <nav>
        {[
          ['Home', '/'],
          ['About', '/about'],
        ].map(([title, url]) => (
          <Link key={title} to={url}>
            {title}
          </Link>
        ))}
      </nav>
      <main>
        <h1 className="flex justify-center pb-8 text-3xl font-bold">
          {pageTitle}
        </h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
