import React from 'react'
import { render, screen } from '@testing-library/react'
import { PureTitle as Title } from './index'

describe('Title', () => {
  it('Renders correctly', () => {
    const pageTitle = 'Home Page'
    const data = {
      site: {
        siteMetadata: {
          title: 'Developers Funny',
        },
      },
    }
    render(<Title data={data} pageTitle={pageTitle} />)
    const titleHome = screen.getByText(/home/i)
    expect(titleHome).toMatchSnapshot()
  })
})
