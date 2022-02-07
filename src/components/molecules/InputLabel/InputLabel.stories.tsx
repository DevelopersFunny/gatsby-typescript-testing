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
InputLabelName.args = {
  name: 'inputLabel',
  id: 'inputLabel',
  type: 'text',
  label: 'Input label',
}

export const InputLabelFilled = Template.bind({})
InputLabelFilled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await userEvent.type(
    canvas.getByTestId('inputFilled'),
    'Test with storybook like cypress',
    {
      delay: 100,
    }
  )
}
InputLabelFilled.args = {
  name: 'inputFilled',
  id: 'inputFilled',
  type: 'text',
  label: 'Input label',
}
