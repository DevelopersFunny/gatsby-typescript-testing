import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { InputLabel } from '.'

export default {
  title: 'Atoms/InputLabel',
  component: InputLabel,
} as ComponentMeta<typeof InputLabel>

const Template: ComponentStory<typeof InputLabel> = args => (
  <InputLabel {...args} />
)

export const InputLabelName = Template.bind({})
InputLabelName.args = {
  name: 'inputlabel',
  id: 'inputlabel',
  type: 'text',
  placeholder: 'Input label',
}
