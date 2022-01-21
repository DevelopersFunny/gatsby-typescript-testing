import React from 'react'

interface InputProps {
  type: 'text' | 'email' | 'password'
  id: string
  name: string
  placeholder?: string | 'Please write a placeholder'
  minLength?: number | 4
  maxLength?: number | 8
}

export function Input({
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
      />
    </>
  )
}
