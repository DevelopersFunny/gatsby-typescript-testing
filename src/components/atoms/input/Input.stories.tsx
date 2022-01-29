import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Input } from '.'

export default {
  title: 'Atoms/Input',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => <Input {...args} />

export const InputRequired = Template.bind({})
InputRequired.args = {
  type: 'text',
  id: 'name',
  name: 'name',
}
export const InputOutlined = Template.bind({})
InputOutlined.args = {
  type: 'text',
  id: 'name',
  name: 'name',
  placeholder: 'Please write a placeholder',
  variant: 'outlined',
}
export const InputFilled = Template.bind({})
InputFilled.args = {
  type: 'text',
  id: 'name',
  name: 'name',
  placeholder: 'Please write a placeholder',
  variant: 'filled',
}
export const InputStandard = Template.bind({})
InputStandard.args = {
  type: 'text',
  id: 'name',
  name: 'name',
  placeholder: 'Please write a placeholder',
  variant: 'standard',
}
export const InputPlaceholder = Template.bind({})
InputPlaceholder.args = {
  type: 'text',
  id: 'name',
  name: 'name',
  placeholder: 'Please write a placeholder',
  variant: 'standard',
}
export const InputMinLength = Template.bind({})
InputMinLength.args = {
  type: 'text',
  id: 'name',
  name: 'name',
  minLength: 4,
}
export const InputMaxLength = Template.bind({})
InputMaxLength.args = {
  type: 'text',
  id: 'name',
  name: 'name',
  maxLength: 8,
}
export const InputNumber = Template.bind({})
InputNumber.args = {
  type: 'number',
  id: 'name',
  name: 'name',
  variant: 'standard',
}
export const InputFile = Template.bind({})
InputFile.args = {
  type: 'file',
  id: 'name',
  name: 'name',
  variant: 'standard',
}
export const InputRange = Template.bind({})
InputRange.args = {
  type: 'range',
  id: 'name',
  name: 'name',
  variant: 'standard',
}
export const InputRadio = Template.bind({})
InputRadio.args = {
  type: 'radio',
  id: 'name',
  name: 'name',
  variant: 'standard',
}
export const InputCheckbox = Template.bind({})
InputCheckbox.args = {
  type: 'checkbox',
  id: 'name',
  name: 'name',
  variant: 'standard',
}
