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
export const InputPlaceholder = Template.bind({})
InputPlaceholder.args = {
  type: 'text',
  id: 'name',
  name: 'name',
  placeholder: 'Please write a placeholder',
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
