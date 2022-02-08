import React from 'react'
import { IInputProps } from '../../../types/components/input'
import { StyledInput } from './InputStyled'

export function Input({
  className,
  id,
  name,
  maxLength,
  minLength,
  placeholder,
  type,
  variant,
  disabled,
  onChange,
}: IInputProps) {
  return (
    <>
      <StyledInput
        type={type}
        id={id}
        data-testid={id}
        name={name}
        variant={variant}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        disabled={disabled}
        className={className}
        onChange={onChange}
      />
    </>
  )
}
