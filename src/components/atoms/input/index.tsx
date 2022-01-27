import React from 'react'
import tw, { styled } from 'twin.macro'

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

const StyledInput = styled.input(({ variant, type }: IInputProps) => [
  tw`
    h-10
    w-full
    py-2
    pl-9
    pr-3
    block
    placeholder:text-base
    text-gray-900
    sm:text-sm
    placeholder-transparent
  `,
  variant === 'filled'
    ? tw`placeholder:italic placeholder:text-gray-400 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1`
    : variant === 'outlined'
    ? tw`placeholder:italic placeholder:text-gray-400 bg-transparent border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1`
    : variant === 'standard'
    ? tw`placeholder:italic placeholder:text-gray-400 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600`
    : tw`placeholder:italic bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600`,
  type === 'file' && tw`bg-transparent border-0`,
])

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
      <StyledInput
        type={type}
        id={id}
        name={name}
        variant={variant}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        disabled={disabled}
        className={className}
      />
    </>
  )
}
