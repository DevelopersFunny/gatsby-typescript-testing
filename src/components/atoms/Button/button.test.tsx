import React from 'react'
import * as stories from './Button.stories'
import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'
const screenshotTest = require('../../../utils/screenshotTest')

const setup = {
  'atoms-button': [
    'primary',
    'secondary',
    'small',
    'large',
    'custom-background-color',
    'custom-text-color',
  ],
}

screenshotTest(setup)

const {
  Primary,
  Secondary,
  Small,
  Large,
  CustomBackgroundColor,
  CustomTextColor,
} = composeStories(stories)

describe('Button render with props', () => {
  it('should render primary button', () => {
    render(<Primary label="Primary Button" />)
    const ButtonElement = screen.getByRole('button')
    expect(ButtonElement.textContent).toEqual(Primary.args?.label)
    expect(ButtonElement).toHaveTextContent(/primary/i)
    expect(ButtonElement).toHaveClass('btn-primary')
  })
  it('should render custom label button', () => {
    render(<Primary label="Custom Label Button" />)
    const ButtonElement = screen.getByRole('button')
    expect(ButtonElement).toHaveTextContent(/custom label/i)
  })
  it('should render secondary button', () => {
    render(<Secondary />)
    const ButtonElement = screen.getByRole('button')
    expect(ButtonElement.textContent).toEqual(Secondary.args?.label)
    expect(ButtonElement).toHaveTextContent(/secondary/i)
    expect(ButtonElement).toHaveClass('btn-secondary')
  })
  it('should render small button', () => {
    render(<Small />)
    const ButtonElement = screen.getByRole('button')
    expect(ButtonElement.textContent).toEqual(Small.args?.label)
    expect(ButtonElement).toHaveTextContent(/small/i)
    expect(ButtonElement).toHaveClass('btn-small')
  })
  it('should render large button', () => {
    render(<Large />)
    const ButtonElement = screen.getByRole('button')
    expect(ButtonElement.textContent).toEqual(Large.args?.label)
    expect(ButtonElement).toHaveTextContent(/large/i)
    expect(ButtonElement).toHaveClass('btn-large')
  })
  it('should render a custom background color button', () => {
    render(<CustomBackgroundColor backgroundColor="blue" />)
    const ButtonElement = screen.getByRole('button')
    expect(ButtonElement.textContent).toEqual(CustomBackgroundColor.args?.label)
    expect(ButtonElement).toHaveTextContent(/custom/i)
    expect(ButtonElement).toHaveStyle('background-color: blue')
  })
  it('should render a custom text color button', () => {
    render(<CustomTextColor color="white" />)
    const ButtonElement = screen.getByRole('button')
    expect(ButtonElement.textContent).toEqual(CustomTextColor.args?.label)
    expect(ButtonElement).toHaveTextContent(/custom/i)
    expect(ButtonElement).toHaveStyle('color: white')
  })
})
