import React from 'react'
import { Input, InputProps } from '../../atoms/input'
import { Label } from '../../atoms/Label'

export const InputLabel = ({ id, name, type, placeholder }: InputProps) => {
  return (
    <>
      <div className="relative">
        <Input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          className="peer"
        />
        <Label
          htmlFor={id}
          className="
            absolute
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
          {placeholder}
        </Label>
      </div>
    </>
  )
}
