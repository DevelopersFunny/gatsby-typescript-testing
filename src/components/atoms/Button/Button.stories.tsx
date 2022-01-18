import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from '.'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Contained = Template.bind({})
Contained.args = {
  label: 'Contained Button',
  variant: 'contained',
}
Contained.parameters = {
  jest: ['button.test.tsx'],
}
export const Text = Template.bind({})
Text.args = {
  label: 'Text Button',
  variant: 'text',
}
Text.parameters = {
  jest: ['button.test.tsx'],
}
export const Outlined = Template.bind({})
Outlined.args = {
  label: 'Outlined Button',
  variant: 'outlined',
}
Outlined.parameters = {
  jest: ['button.test.tsx'],
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Secondary Button',
  color: 'secondary',
}
Secondary.parameters = {
  jest: ['button.test.tsx'],
}
export const Success = Template.bind({})
Success.args = {
  label: 'Success Button',
  color: 'success',
}
Success.parameters = {
  jest: ['button.test.tsx'],
}
export const Warning = Template.bind({})
Warning.args = {
  label: 'Warning Button',
  color: 'warning',
}
Warning.parameters = {
  jest: ['button.test.tsx'],
}
export const Error = Template.bind({})
Error.args = {
  label: 'Error Button',
  color: 'error',
}
Error.parameters = {
  jest: ['button.test.tsx'],
}

export const Small = Template.bind({})
Small.args = {
  label: 'Small Button',
  size: 'small',
  variant: 'contained',
}
Small.parameters = {
  jest: ['button.test.tsx'],
}
export const Normal = Template.bind({})
Normal.args = {
  label: 'Normal Button',
  size: 'normal',
  variant: 'contained',
}
Normal.parameters = {
  jest: ['button.test.tsx'],
}
export const Large = Template.bind({})
Large.args = {
  label: 'Large Button',
  size: 'large',
  variant: 'contained',
}
Large.parameters = {
  jest: ['button.test.tsx'],
}

export const CustomLabel = Template.bind({})
CustomLabel.args = {
  label: 'Custom label',
  variant: 'contained',
}
CustomLabel.parameters = {
  jest: ['button.test.tsx'],
}
export const CustomBackgroundColor = Template.bind({})
CustomBackgroundColor.args = {
  backgroundColor: '#ee6d6d',
  label: 'Custom Color',
}
CustomBackgroundColor.parameters = {
  jest: ['button.test.tsx'],
}
export const CustomTextColor = Template.bind({})
CustomTextColor.args = {
  textColor: 'green',
  label: 'Custom Color',
}
CustomTextColor.parameters = {
  jest: ['button.test.tsx'],
}
