import { graphql, StaticQuery } from 'gatsby'
import React, { FC } from 'react'

interface LayoutProps {
  pageTitle: string
  siteTitle?: string
  data?: {
    site: {
      siteMetadata?: {
        title: string
      }
    }
  }
}

interface LayoutQuery {
  site: {
    siteMetadata?: {
      title: string
    }
  }
}

const PureTitle: FC<LayoutProps> = ({ data, pageTitle, siteTitle }) => {
  /* istanbul ignore next */
  if (!data?.site.siteMetadata) {
    throw new Error('El sitio no tiene los Metadatos completos')
  }
  siteTitle = data.site.siteMetadata.title

  return (
    <title>
      {pageTitle} | {siteTitle}
    </title>
  )
}

export default function Title({ pageTitle }: LayoutProps) {
  return (
    <StaticQuery<LayoutQuery>
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => <PureTitle data={data} pageTitle={pageTitle} />}
    />
  )
}
