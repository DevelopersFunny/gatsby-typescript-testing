import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import { InputLabel } from '.'

export default {
  title: 'Molecule/InputLabel',
  component: InputLabel,
  parameters: {
    fileName: __filename,
  },
} as ComponentMeta<typeof InputLabel>

const Template: ComponentStory<typeof InputLabel> = args => (
  <InputLabel {...args} />
)

export const InputLabelName = Template.bind({})
InputLabelName.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await userEvent.type(
    canvas.getByTestId('inputlabel'),
    'Test with storybook like cypress'
  )
}
InputLabelName.args = {
  name: 'inputlabel',
  id: 'inputlabel',
  type: 'text',
  label: 'Input label',
}
