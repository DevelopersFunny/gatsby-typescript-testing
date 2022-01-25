import React from 'react'

export interface IInputProps {
  type:
    | 'text'
    | 'email'
    | 'password'
    | 'file'
    | 'range'
    | 'number'
    | 'radio'
    | 'checkbox'
  id: string
  name: string
  placeholder?: string | 'Please write a placeholder'
  minLength?: number | 4
  maxLength?: number | 8
  className?: string
  variant?: 'outlined' | 'filled' | 'standard'
  disabled?: boolean
}

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
}: IInputProps) {
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        disabled={disabled}
        className={
          className
            ? className + ' ' + 'LabelInput'
            : variant === 'outlined'
            ? 'outlineInput'
            : variant === 'filled'
            ? 'filledInput'
            : variant === 'standard'
            ? 'standardInput'
            : type === 'file'
            ? 'fileInput'
            : 'standardInput'
        }
      />
    </>
  )
}
