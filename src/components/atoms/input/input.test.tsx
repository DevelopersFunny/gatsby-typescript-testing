import React from 'react'
import * as stories from './Input.stories'
import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'

const {
  InputArgsRequired,
  InputOutlined,
  InputFilled,
  InputStandard,
  InputNumber,
  InputFile,
  InputRange,
  InputRadio,
  InputCheckbox,
} = composeStories(stories)

describe('Input render with props', () => {
  it('should render input with args', () => {
    render(<InputArgsRequired name="name" id="name" />)
    const inputElement = screen.getByTestId('name')
    inputElement.setAttribute('type', 'text')
    expect(inputElement).toHaveAttribute('type', 'text')
    expect(inputElement.getAttribute('type')).toEqual(
      InputArgsRequired.args?.type
    )
    expect(inputElement.getAttribute('id')).toEqual(InputArgsRequired.args?.id)
    expect(inputElement.getAttribute('name')).toEqual(
      InputArgsRequired.args?.name
    )
  })
  it('should render outlined input', () => {
    render(
      <InputOutlined name="nameTest" id="name" type="text" variant="outlined" />
    )
    const inputElement = screen.getByTestId('name')
    expect(inputElement).toHaveClass('css-6ui80c')
    expect(inputElement.id).toEqual(InputOutlined.args?.id)
  })
  it('should render filled input', () => {
    render(
      <InputFilled name="nameTest" id="name" type="text" variant="filled" />
    )
    const inputElement = screen.getByTestId('name')
    expect(inputElement).toHaveClass('css-p4oc1c')
    expect(inputElement.id).toEqual(InputFilled.args?.id)
  })
  it('should render standard input', () => {
    render(
      <InputStandard name="nameTest" id="name" type="text" variant="standard" />
    )
    const inputElement = screen.getByTestId('name')
    expect(inputElement).toHaveClass('css-16xa3tr')
    expect(inputElement.id).toEqual(InputStandard.args?.id)
  })
  it('should render input number', () => {
    render(<InputNumber name="number" id="number" />)
    const inputElement = screen.getByTestId('number')
    inputElement.setAttribute('type', 'number')
    expect(inputElement).toHaveAttribute('type', 'number')
    expect(inputElement.getAttribute('type')).toEqual(InputNumber.args?.type)
  })
  it('should render input file', () => {
    render(<InputFile name="file" id="file" />)
    const inputElement = screen.getByTestId('file')
    inputElement.setAttribute('type', 'file')
    expect(inputElement).toHaveAttribute('type', 'file')
    expect(inputElement.getAttribute('type')).toEqual(InputFile.args?.type)
  })
  it('should render input range', () => {
    render(<InputRange name="range" id="range" />)
    const inputElement = screen.getByTestId('range')
    inputElement.setAttribute('type', 'range')
    expect(inputElement).toHaveAttribute('type', 'range')
    expect(inputElement.getAttribute('type')).toEqual(InputRange.args?.type)
  })
  it('should render input radio', () => {
    render(<InputRadio name="radio" id="radio" />)
    const inputElement = screen.getByTestId('radio')
    inputElement.setAttribute('type', 'radio')
    expect(inputElement).toHaveAttribute('type', 'radio')
    expect(inputElement.getAttribute('type')).toEqual(InputRadio.args?.type)
  })
  it('should render input checkbox', () => {
    render(<InputCheckbox name="checkbox" id="checkbox" type="checkbox" />)
    const inputElement = screen.getByTestId('checkbox')
    inputElement.setAttribute('type', 'checkbox')
    expect(inputElement).toHaveAttribute('type', 'checkbox')
    expect(inputElement.getAttribute('type')).toEqual(InputCheckbox.args?.type)
  })
})
