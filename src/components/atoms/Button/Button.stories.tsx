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
Contained.args = {
  children: 'Contained Button',
  variant: 'contained',
}
export const Text = Template.bind({})
Text.args = {
  children: 'Text Button',
  variant: 'text',
}
export const Outlined = Template.bind({})
Outlined.args = {
  children: 'Outlined Button',
  variant: 'outlined',
}
export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Secondary Button',
  color: 'secondary',
}
export const Success = Template.bind({})
Success.args = {
  children: 'Success Button',
  color: 'success',
}
export const Warning = Template.bind({})
Warning.args = {
  children: 'Warning Button',
  color: 'warning',
}
export const Error = Template.bind({})
Error.args = {
  children: 'Error Button',
  color: 'error',
}
export const Small = Template.bind({})
Small.args = {
  children: 'Small Button',
  size: 'small',
  variant: 'contained',
}
export const Normal = Template.bind({})
Normal.args = {
  children: 'Normal Button',
  size: 'normal',
  variant: 'contained',
}
export const Large = Template.bind({})
Large.args = {
  children: 'Large Button',
  size: 'large',
  variant: 'contained',
}
export const CustomBackgroundColor = Template.bind({})
CustomBackgroundColor.args = {
  backgroundColor: '#ee6d6d',
  children: 'Custom Color',
}
export const CustomTextColor = Template.bind({})
CustomTextColor.args = {
  textColor: 'green',
  children: 'Custom Color',
}
export const ButtonClick = Template.bind({})
ButtonClick.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement)
  await userEvent.click(canvas.getByRole('button'))
  await waitFor(() => expect(args.onClick).toHaveBeenCalled())
}
ButtonClick.args = {
  children: 'ClickEv Button',
  variant: 'contained',
}
