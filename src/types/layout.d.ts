import { ISeoProps } from './seo'

export interface ILayoutProps extends ISeoProps {
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
