import React from 'react'
import * as stories from './Form.stories'
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
const { EmptyForm } = composeStories(stories)

describe('Input render with props', () => {
  it('should render input', () => {
    render(<EmptyForm />)
    const formElement = screen.getByTestId('firstName')
    expect(formElement).toMatchSnapshot()
  })
})
