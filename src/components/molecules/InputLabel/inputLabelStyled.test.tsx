import React from 'react'
import * as stories from './InputLabel.stories'
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
const { InputLabelName } = composeStories(stories)

describe('Input render with props', () => {
  it('should render input', () => {
    render(
      <InputLabelName name="test" id="test" label="Input Label" type="text" />
    )
    const inputLabelElement = screen.getByText('Input Label')
    expect(inputLabelElement).toMatchSnapshot()
  })
})
