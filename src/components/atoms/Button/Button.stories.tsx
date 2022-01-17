import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from '.'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Primary Button',
  variant: 'primary',
}
Primary.parameters = {
  jest: ['button.test.tsx'],
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary',
}
Secondary.parameters = {
  jest: ['button.test.tsx'],
}

export const Small = Template.bind({})
Small.args = {
  label: 'Small Button',
  size: 'small',
  variant: 'primary',
}
Small.parameters = {
  jest: ['button.test.tsx'],
}

export const Large = Template.bind({})
Large.args = {
  label: 'Large Button',
  size: 'large',
  variant: 'primary',
}
Large.parameters = {
  jest: ['button.test.tsx'],
}

export const CustomBackgroundColor = Template.bind({})
CustomBackgroundColor.args = {
  backgroundColor: 'red',
  label: 'Custom Color',
  variant: 'primary',
}
CustomBackgroundColor.parameters = {
  jest: ['button.test.tsx'],
}

export const CustomTextColor = Template.bind({})
CustomTextColor.args = {
  color: 'gray',
  label: 'Custom Color',
  variant: 'primary',
}
CustomTextColor.parameters = {
  jest: ['button.test.tsx'],
}
