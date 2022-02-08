import React from 'react'
import * as stories from './Label.stories'
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
const { LabelName } = composeStories(stories)

describe('Input render with props', () => {
  it('should render input', () => {
    render(<LabelName>Label</LabelName>)
    const labelElement = screen.getByText('Label')
    expect(labelElement).toMatchSnapshot()
  })
})
