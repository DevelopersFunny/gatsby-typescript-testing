import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Label } from '.'

export default {
  title: 'Atoms/Label',
  component: Label,
  parameters: {
    fileName: __filename,
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
  },
} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Label> = args => <Label {...args} />

export const LabelName = Template.bind({})
LabelName.args = {
  children: 'Label',
}
