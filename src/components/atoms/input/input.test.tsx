import React from 'react'
import * as stories from './Input.stories'
import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'
import { type } from 'os'

const {
  InputRequired,
  InputOutlined,
  InputFilled,
  InputStandard,
  InputPlaceholder,
  InputMinLength,
  InputMaxLength,
  InputNumber,
  InputFile,
  InputRange,
  InputRadio,
  InputCheckbox,
} = composeStories(stories)

describe('Input render with props', () => {
  it('should render input', () => {
    render(<InputRequired name="name" id="name" />)
    const inputElement = screen.getByTestId('name')
    inputElement.setAttribute('type', 'text')
    expect(inputElement).toHaveAttribute('type', 'text')
    expect(inputElement.getAttribute('type')).toEqual(InputRequired.args?.type)
    expect(inputElement.getAttribute('id')).toEqual(InputRequired.args?.id)
    expect(inputElement.getAttribute('name')).toEqual(InputRequired.args?.name)
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
  it('should render placeholder input', () => {
    render(<InputPlaceholder name="nameTest" id="name" type="text" />)
    const inputElement = screen.getByTestId('name')
    inputElement.setAttribute('placeholder', 'Please write a placeholder')
    expect(inputElement).toHaveAttribute(
      'placeholder',
      'Please write a placeholder'
    )
    expect(inputElement.getAttribute('placeholder')).toEqual(
      InputPlaceholder.args?.placeholder
    )
  })
  it('should render minLenght input', () => {
    render(
      <InputMinLength name="nameTest" id="name" type="text" minLength={4} />
    )
    const inputElement = screen.getByTestId('name')
    expect(inputElement).toHaveAttribute('minLength', '4')
    expect(inputElement.id).toEqual(InputMinLength.args?.id)
  })
  it('should render maxLength input', () => {
    render(
      <InputMaxLength name="nameTest" id="name" type="text" maxLength={8} />
    )
    const inputElement = screen.getByTestId('name')
    expect(inputElement).toHaveAttribute('maxLength', '8')
    expect(inputElement.id).toEqual(InputMaxLength.args?.id)
  })
  it('should render input number', () => {
    render(<InputNumber name="nameTest" id="name" />)
    const inputElement = screen.getByTestId('name')
    inputElement.setAttribute('type', 'number')
    expect(inputElement).toHaveAttribute('type', 'number')
    expect(inputElement.getAttribute('type')).toEqual(InputNumber.args?.type)
  })
  it('should render input file', () => {
    render(<InputFile name="nameTest" id="name" />)
    const inputElement = screen.getByTestId('name')
    inputElement.setAttribute('type', 'file')
    expect(inputElement).toHaveAttribute('type', 'file')
    expect(inputElement.getAttribute('type')).toEqual(InputFile.args?.type)
  })
  it('should render input range', () => {
    render(<InputRange name="nameTest" id="name" />)
    const inputElement = screen.getByTestId('name')
    inputElement.setAttribute('type', 'range')
    expect(inputElement).toHaveAttribute('type', 'range')
    expect(inputElement.getAttribute('type')).toEqual(InputRange.args?.type)
  })
  it('should render input radio', () => {
    render(<InputRadio name="nameTest" id="name" />)
    const inputElement = screen.getByTestId('name')
    inputElement.setAttribute('type', 'radio')
    expect(inputElement).toHaveAttribute('type', 'radio')
    expect(inputElement.getAttribute('type')).toEqual(InputRadio.args?.type)
  })
  it('should render input checkbox', () => {
    render(<InputCheckbox name="nameTest" id="name" type="checkbox" />)
    const inputElement = screen.getByTestId('name')
    inputElement.setAttribute('type', 'checkbox')
    expect(inputElement).toHaveAttribute('type', 'checkbox')
    expect(inputElement.getAttribute('type')).toEqual(InputCheckbox.args?.type)
  })
})
