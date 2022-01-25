import React from 'react'
import { Input, InputProps } from '../../atoms/input'
import { Label } from '../../atoms/Label'

interface IInputLabelProps extends InputProps {
  label: string
}

export const InputLabel = ({
  id,
  maxLength,
  minLength,
  name,
  type,
  label,
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
        />
        <Label
          htmlFor={id}
          className="
            absolute
            cursor-text
            h-10
            w-full
            pl-9 pr-3
            -top-3.5
            text-gray-600
            text-sm 
            transition-all 
            peer-placeholder-shown:italic
            peer-placeholder-shown:text-base 
            peer-placeholder-shown:text-gray-400 
            peer-placeholder-shown:top-2
            peer-focus:-top-3.5 
            peer-focus:text-gray-600 
            peer-focus:text-sm"
        >
          {label}
        </Label>
      </div>
    </>
  )
}
