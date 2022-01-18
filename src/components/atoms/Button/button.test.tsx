import React from 'react'
import * as stories from './Button.stories'
import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'
const screenshotTest = require('../../../utils/screenshotTest')

const setup = {
  'atoms-button': [
    'contained',
    'text',
    'outlined',
    'secondary',
    'success',
    'warning',
    'error',
    'small',
    'normal',
    'large',
    'custom-label',
    'custom-background-color',
    'custom-text-color',
  ],
}

screenshotTest(setup)

const {
  Contained,
  Text,
  Outlined,
  Secondary,
  Success,
  Warning,
  Error,
  Small,
  Normal,
  Large,
  CustomLabel,
  CustomBackgroundColor,
  CustomTextColor,
} = composeStories(stories)

describe('Button render with props', () => {
  it('should render contained button', () => {
    render(<Contained />)
    const ButtonElement = screen.getByRole('button')
    expect(ButtonElement.textContent).toEqual(Contained.args?.label)
    expect(ButtonElement).toHaveTextContent(/contained/i)
    expect(ButtonElement).toHaveClass('contained')
  })
  it('should render text button', () => {
    render(<Text />)
    const ButtonElement = screen.getByRole('button')
    expect(ButtonElement.textContent).toEqual(Text.args?.label)
    expect(ButtonElement).toHaveTextContent(/text/i)
    expect(ButtonElement).toHaveClass('text')
  })
  it('should render custom outlined button', () => {
    render(<Outlined />)
    const ButtonElement = screen.getByRole('button')
    expect(ButtonElement.textContent).toEqual(Outlined.args?.label)
    expect(ButtonElement).toHaveTextContent(/outlined/i)
    expect(ButtonElement).toHaveClass('outlined')
  })
  it('should render secondary button', () => {
    render(<Secondary />)
    const ButtonElement = screen.getByRole('button')
    expect(ButtonElement.textContent).toEqual(Secondary.args?.label)
    expect(ButtonElement).toHaveTextContent(/secondary/i)
    expect(ButtonElement).toHaveClass('secondary')
  })
  it('should render success button', () => {
    render(<Success />)
    const ButtonElement = screen.getByRole('button')
    expect(ButtonElement.textContent).toEqual(Success.args?.label)
    expect(ButtonElement).toHaveTextContent(/success/i)
    expect(ButtonElement).toHaveClass('success')
  })
  it('should render warning button', () => {
    render(<Warning />)
    const ButtonElement = screen.getByRole('button')
    expect(ButtonElement.textContent).toEqual(Warning.args?.label)
    expect(ButtonElement).toHaveTextContent(/warning/i)
    expect(ButtonElement).toHaveClass('warning')
  })
  it('should render error button', () => {
    render(<Error />)
    const ButtonElement = screen.getByRole('button')
    expect(ButtonElement.textContent).toEqual(Error.args?.label)
    expect(ButtonElement).toHaveTextContent(/error/i)
    expect(ButtonElement).toHaveClass('error')
  })
  it('should render small button', () => {
    render(<Small />)
    const ButtonElement = screen.getByRole('button')
    expect(ButtonElement.textContent).toEqual(Small.args?.label)
    expect(ButtonElement).toHaveTextContent(/small/i)
    expect(ButtonElement).toHaveClass('small')
  })
  it('should render normal button', () => {
    render(<Normal />)
    const ButtonElement = screen.getByRole('button')
    expect(ButtonElement.textContent).toEqual(Normal.args?.label)
    expect(ButtonElement).toHaveTextContent(/normal/i)
    expect(ButtonElement).toHaveClass('normal')
  })
  it('should render large button', () => {
    render(<Large />)
    const ButtonElement = screen.getByRole('button')
    expect(ButtonElement.textContent).toEqual(Large.args?.label)
    expect(ButtonElement).toHaveTextContent(/large/i)
    expect(ButtonElement).toHaveClass('large')
  })
  it('should render a custom label button', () => {
    render(<CustomLabel label="Custom Label" />)
    const ButtonElement = screen.getByRole('button')
    expect(ButtonElement).toHaveTextContent(/custom label/i)
  })
  it('should render a custom background color button', () => {
    render(<CustomBackgroundColor backgroundColor="blue" />)
    const ButtonElement = screen.getByRole('button')
    expect(ButtonElement.textContent).toEqual(CustomBackgroundColor.args?.label)
    expect(ButtonElement).toHaveTextContent(/custom/i)
    expect(ButtonElement).toHaveStyle('background-color: blue')
  })
  it('should render a custom text color button', () => {
    render(<CustomTextColor textColor="white" />)
    const ButtonElement = screen.getByRole('button')
    expect(ButtonElement.textContent).toEqual(CustomTextColor.args?.label)
    expect(ButtonElement).toHaveTextContent(/custom/i)
    expect(ButtonElement).toHaveStyle('color: white')
  })
})
