import React from 'react'

export interface InputProps {
  type: 'text' | 'email' | 'password'
  id: string
  name: string
  placeholder?: string | 'Please write a placeholder'
  minLength?: number | 4
  maxLength?: number | 8
  className?: string
}

export function Input({
  className,
  id,
  name,
  maxLength,
  minLength,
  placeholder,
  type,
}: InputProps) {
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        className={className ? className : 'normalInput'}
      />
    </>
  )
}
