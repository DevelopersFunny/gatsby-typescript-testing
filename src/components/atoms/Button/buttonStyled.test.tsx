import React from 'react'
import * as stories from './Button.stories'
import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'
import { createSerializer, matchers } from '@emotion/jest'

/**
 * Emotion matchers and snapshots
 */
expect.extend(matchers)
expect.addSnapshotSerializer(createSerializer())

/**
 * Stories render
 */
const { Contained } = composeStories(stories)

/**
 * Tests
 */
describe('Button render with props', () => {
  it('should render style contained button', () => {
    render(<Contained />)
    const ButtonElement = screen.getByRole('button')
    expect(ButtonElement).toMatchSnapshot()
    expect(ButtonElement).toHaveStyleRule(
      'background-color',
      'rgba(37, 99, 235, var(--tw-bg-opacity))'
    )
  })
})
