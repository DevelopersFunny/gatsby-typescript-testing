import React from 'react'
import { Input, IInputProps } from '../../atoms/input'
import { Label } from '../../atoms/Label'

interface IInputLabelProps extends IInputProps {
  label: string
  type: 'text' | 'email' | 'password' | 'number'
}

export const InputLabel = ({
  id,
  maxLength,
  minLength,
  name,
  type,
  label,
  disabled,
}: IInputLabelProps) => {
  return (
    <>
      <div className="relative">
        <Input
          id={id}
          name={name}
          type={type}
          placeholder={label}
          minLength={minLength}
          maxLength={maxLength}
          className="peer"
          disabled={disabled}
        />
        <Label
          htmlFor={id}
          className="
            absolute
            -top-3.5
            h-10
            w-full pl-9
            pr-3
            text-sm
            text-gray-600 
            transition-all 
            peer-placeholder-shown:top-2
            peer-placeholder-shown:text-base 
            peer-placeholder-shown:italic 
            peer-placeholder-shown:text-gray-400
            peer-focus:-top-3.5 
            peer-focus:text-sm 
            peer-focus:text-gray-600"
        >
          {label}
        </Label>
      </div>
    </>
  )
}
