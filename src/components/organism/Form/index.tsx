import React from 'react'
import { Button } from '../../atoms/Button'
import { InputLabel } from '../../molecules/InputLabel'

export interface IForm {
  onSubmit: () => void
}

export const Form = ({ onSubmit }: IForm) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="px-2 py-2">
          <InputLabel
            label="First Name"
            type="text"
            id="firstName"
            name="firstName"
          />
        </div>
        <div className="px-2 py-2">
          <InputLabel label="Email" type="email" id="email" name="email" />
        </div>
        <div className="px-2 py-2">
          <InputLabel
            label="Password"
            type="password"
            id="password"
            name="password"
          />
        </div>
        <div className="px-2 py-2">
          <Button variant="contained">Login</Button>
        </div>
      </form>
    </>
  )
}
