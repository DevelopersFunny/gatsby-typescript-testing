import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'
import { ILayoutProps } from '../../../types/layout'
import { IMetaQuery } from '../../../types/graphql/meta'

export const PureTitle: FC<ILayoutProps> = ({
  data,
  pageTitle,
  siteTitle,
  description = '',
  lang = 'es',
  meta = [],
}) => {
  if (!data?.site.siteMetadata) {
    throw new Error('El sitio no tiene los MetaDatos completos')
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
    <StaticQuery<IMetaQuery>
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
