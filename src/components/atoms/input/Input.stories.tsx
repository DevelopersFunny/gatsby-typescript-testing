import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import { Input } from '.'

export default {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    fileName: __filename,
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => <Input {...args} />

/** */
export const InputArgsRequired = Template.bind({})
InputArgsRequired.args = {
  type: 'text',
  id: 'name',
  name: 'name',
  variant: 'standard',
  placeholder: 'Please write a placeholder',
}
/** */
export const InputOutlined = Template.bind({})
InputOutlined.args = {
  type: 'text',
  id: 'name',
  name: 'name',
  placeholder: 'Please write a placeholder',
  variant: 'outlined',
}
/** */
export const InputFilled = Template.bind({})
InputFilled.args = {
  type: 'text',
  id: 'name',
  name: 'name',
  placeholder: 'Please write a placeholder',
  variant: 'filled',
}
/** */
export const InputStandard = Template.bind({})
InputStandard.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await userEvent.type(canvas.getByTestId('name'), '1h2y3n4u', {
    delay: 100,
  })
}
InputStandard.args = {
  type: 'text',
  id: 'name',
  name: 'name',
  placeholder: 'Please write a placeholder',
  variant: 'standard',
  minLength: 4,
  maxLength: 8,
}
/** */
export const InputNumber = Template.bind({})
InputNumber.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await userEvent.type(canvas.getByTestId('number'), '150', {
    delay: 100,
  })
}
InputNumber.args = {
  type: 'number',
  id: 'number',
  name: 'number',
  variant: 'standard',
}
/** */
export const InputPassword = Template.bind({})
InputPassword.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await userEvent.type(canvas.getByTestId('password'), 'supersecret', {
    delay: 100,
  })
}
InputPassword.args = {
  type: 'password',
  id: 'password',
  name: 'password',
  placeholder: 'Password',
}
/** */
export const InputFile = Template.bind({})
InputFile.args = {
  type: 'file',
  id: 'file',
  name: 'file',
  variant: 'standard',
}
/** */
export const InputRange = Template.bind({})
InputRange.args = {
  type: 'range',
  id: 'range',
  name: 'range',
  variant: 'standard',
}
/** */
export const InputRadio = Template.bind({})
InputRadio.args = {
  type: 'radio',
  id: 'radio',
  name: 'radio',
  variant: 'standard',
}
/** */
export const InputCheckbox = Template.bind({})
InputCheckbox.args = {
  type: 'checkbox',
  id: 'checkbox',
  name: 'checkbox',
  variant: 'standard',
}
