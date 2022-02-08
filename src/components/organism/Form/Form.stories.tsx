import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import { Form } from '.'

export default {
  title: 'Organism/Form',
  component: Form,
  parameters: {
    fileName: __filename,
  },
  argTypes: {
    onSubmit: { action: true },
  },
} as ComponentMeta<typeof Form>

const Template: ComponentStory<typeof Form> = args => <Form {...args} />

export const EmptyForm = Template.bind({})

export const FilledForm = Template.bind({})
FilledForm.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement)
  await userEvent.type(canvas.getByTestId('firstName'), 'My name', {
    delay: 100,
  })
  await userEvent.type(canvas.getByTestId('email'), 'hi@example.com', {
    delay: 100,
  })
  await userEvent.type(canvas.getByTestId('password'), 'supersecret', {
    delay: 100,
  })
  // await userEvent.click(canvas.getByRole('button'))
  // await waitFor(() => expect(args.onSubmit).toHaveBeenCalled())
}
