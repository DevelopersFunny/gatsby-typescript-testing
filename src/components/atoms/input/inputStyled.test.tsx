import React from 'react'
import * as stories from './Input.stories'
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
const { InputArgsRequired } = composeStories(stories)

describe('Input render with props styles', () => {
  it('should render input styles', () => {
    render(<InputArgsRequired name="name" id="name" />)
    const inputElement = screen.getByTestId('name')
    inputElement.setAttribute('type', 'text')
    expect(inputElement).toHaveAttribute('type', 'text')
    expect(inputElement).toMatchSnapshot()
  })
})
