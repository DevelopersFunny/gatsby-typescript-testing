import React from 'react'
import * as stories from './Button.stories'
import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'
import { matchers } from '@emotion/jest'

expect.extend(matchers)

/**
 * Every component that is returned maps 1:1 with the stories,
 * but they already contain all decorators from story level,
 * meta level and global level.
 */
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
  CustomText,
  CustomBackgroundColor,
  CustomTextColor,
} = composeStories(stories)

describe('Button render with props', () => {
  it('should render contained button', () => {
    render(<Contained />)
    const ButtonElement = screen.getByRole('button')
    expect(ButtonElement.textContent).toEqual(Contained.args?.children)
    expect(ButtonElement).toHaveStyleRule(
      'background-color',
      'rgba(37, 99, 235, var(--tw-bg-opacity))'
    )
    expect(ButtonElement).toHaveTextContent(/contained/i)
  })
  it('should render text button', () => {
    render(<Text />)
    const ButtonElement = screen.getByRole('button')
    expect(ButtonElement.textContent).toEqual(Text.args?.children)
    expect(ButtonElement).toHaveTextContent(/text/i)
  })
  it('should render custom outlined button', () => {
    render(<Outlined />)
    const ButtonElement = screen.getByRole('button')
    expect(ButtonElement.textContent).toEqual(Outlined.args?.children)
    expect(ButtonElement).toHaveTextContent(/outlined/i)
  })
  it('should render secondary button', () => {
    render(<Secondary />)
    const ButtonElement = screen.getByRole('button')
    expect(ButtonElement.textContent).toEqual(Secondary.args?.children)
    expect(ButtonElement).toHaveTextContent(/secondary/i)
    expect(ButtonElement).toHaveClass('secondary')
  })
  it('should render success button', () => {
    render(<Success />)
    const ButtonElement = screen.getByRole('button')
    expect(ButtonElement.textContent).toEqual(Success.args?.children)
    expect(ButtonElement).toHaveTextContent(/success/i)
    expect(ButtonElement).toHaveClass('success')
  })
  it('should render warning button', () => {
    render(<Warning />)
    const ButtonElement = screen.getByRole('button')
    expect(ButtonElement.textContent).toEqual(Warning.args?.children)
    expect(ButtonElement).toHaveTextContent(/warning/i)
    expect(ButtonElement).toHaveClass('warning')
  })
  it('should render error button', () => {
    render(<Error />)
    const ButtonElement = screen.getByRole('button')
    expect(ButtonElement.textContent).toEqual(Error.args?.children)
    expect(ButtonElement).toHaveTextContent(/error/i)
    expect(ButtonElement).toHaveClass('error')
  })
  it('should render small button', () => {
    render(<Small />)
    const ButtonElement = screen.getByRole('button')
    expect(ButtonElement.textContent).toEqual(Small.args?.children)
    expect(ButtonElement).toHaveTextContent(/small/i)
  })
  it('should render normal button', () => {
    render(<Normal />)
    const ButtonElement = screen.getByRole('button')
    expect(ButtonElement.textContent).toEqual(Normal.args?.children)
    expect(ButtonElement).toHaveTextContent(/normal/i)
  })
  it('should render large button', () => {
    render(<Large />)
    const ButtonElement = screen.getByRole('button')
    expect(ButtonElement.textContent).toEqual(Large.args?.children)
    expect(ButtonElement).toHaveTextContent(/large/i)
  })
  it('should render a custom children button', () => {
    render(<CustomText children="Custom text" />)
    const ButtonElement = screen.getByRole('button')
    expect(ButtonElement).toHaveTextContent(/custom text/i)
  })
  it('should render a custom background color button', () => {
    render(<CustomBackgroundColor backgroundColor="blue" />)
    const ButtonElement = screen.getByRole('button')
    expect(ButtonElement.textContent).toEqual(
      CustomBackgroundColor.args?.children
    )
    expect(ButtonElement).toHaveTextContent(/custom/i)
    expect(ButtonElement).toHaveStyle('background-color: blue')
  })
  it('should render a custom text color button', () => {
    render(<CustomTextColor textColor="white" />)
    const ButtonElement = screen.getByRole('button')
    expect(ButtonElement.textContent).toEqual(CustomTextColor.args?.children)
    expect(ButtonElement).toHaveTextContent(/custom/i)
    expect(ButtonElement).toHaveStyle('color: white')
  })
})
