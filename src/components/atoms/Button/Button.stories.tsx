import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { expect } from '@storybook/jest'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import { Button } from '.'

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    fileName: __filename,
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    onClick: { action: true },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Contained = Template.bind({})
Contained.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement)
  await userEvent.click(canvas.getByRole('button'))
  await waitFor(() => expect(args.onClick).toHaveBeenCalled())
}
Contained.args = {
  children: 'Contained Button',
  variant: 'contained',
}
Contained.parameters = {
  jest: ['button.test.tsx'],
}
export const Text = Template.bind({})
Text.args = {
  children: 'Text Button',
  variant: 'text',
}
Text.parameters = {
  jest: ['button.test.tsx'],
}
export const Outlined = Template.bind({})
Outlined.args = {
  children: 'Outlined Button',
  variant: 'outlined',
}
Outlined.parameters = {
  jest: ['button.test.tsx'],
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Secondary Button',
  color: 'secondary',
}
Secondary.parameters = {
  jest: ['button.test.tsx'],
}
export const Success = Template.bind({})
Success.args = {
  children: 'Success Button',
  color: 'success',
}
Success.parameters = {
  jest: ['button.test.tsx'],
}
export const Warning = Template.bind({})
Warning.args = {
  children: 'Warning Button',
  color: 'warning',
}
Warning.parameters = {
  jest: ['button.test.tsx'],
}
export const Error = Template.bind({})
Error.args = {
  children: 'Error Button',
  color: 'error',
}
Error.parameters = {
  jest: ['button.test.tsx'],
}

export const Small = Template.bind({})
Small.args = {
  children: 'Small Button',
  size: 'small',
  variant: 'contained',
}
Small.parameters = {
  jest: ['button.test.tsx'],
}
export const Normal = Template.bind({})
Normal.args = {
  children: 'Normal Button',
  size: 'normal',
  variant: 'contained',
}
Normal.parameters = {
  jest: ['button.test.tsx'],
}
export const Large = Template.bind({})
Large.args = {
  children: 'Large Button',
  size: 'large',
  variant: 'contained',
}
Large.parameters = {
  jest: ['button.test.tsx'],
}

export const CustomText = Template.bind({})
CustomText.args = {
  children: 'Custom text',
  variant: 'contained',
}
CustomText.parameters = {
  jest: ['button.test.tsx'],
}
export const CustomBackgroundColor = Template.bind({})
CustomBackgroundColor.args = {
  backgroundColor: '#ee6d6d',
  children: 'Custom Color',
}
CustomBackgroundColor.parameters = {
  jest: ['button.test.tsx'],
}
export const CustomTextColor = Template.bind({})
CustomTextColor.args = {
  textColor: 'green',
  children: 'Custom Color',
}
CustomTextColor.parameters = {
  jest: ['button.test.tsx'],
}
