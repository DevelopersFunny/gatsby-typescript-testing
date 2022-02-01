import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'

interface ISeoProps {
  description?: string
  lang?: string
  meta?: Array<{ name: string; content: string }>
}
interface ILayoutProps extends ISeoProps {
  pageTitle: string
  siteTitle?: string
  data?: {
    site: {
      siteMetadata?: {
        title: string
        description: string
        author: string
      }
    }
  }
}

interface ILayoutQuery {
  site: {
    siteMetadata?: {
      title: string
      description: string
      author: string
    }
  }
}

export const PureTitle: FC<ILayoutProps> = ({
  data,
  pageTitle,
  siteTitle,
  description = '',
  lang = 'es',
  meta = [],
}) => {
  if (!data?.site.siteMetadata) {
    throw new Error('El sitio no tiene los Metadatos completos')
  }
  siteTitle = data.site.siteMetadata.title
  const metaDescription: string =
    description || data.site.siteMetadata.description

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={pageTitle}
        titleTemplate={siteTitle ? `%s | ${siteTitle}` : ''}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: pageTitle,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: data.site.siteMetadata?.author || ``,
          },
          {
            name: `twitter:title`,
            content: pageTitle,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
        ].concat(meta)}
      />
      <title>
        {pageTitle} | {siteTitle}
      </title>
    </>
  )
}

export default function Title({ pageTitle }: ILayoutProps) {
  return (
    <StaticQuery<ILayoutQuery>
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
              author
            }
          }
        }
      `}
      render={data => <PureTitle data={data} pageTitle={pageTitle} />}
    />
  )
}
