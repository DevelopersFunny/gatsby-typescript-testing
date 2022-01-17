import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

interface ButtonProps {
  variant: 'primary' | 'secondary'
  backgroundColor?: string
  color?: string
  size?: 'small' | 'large'
  label: string
  onClick?: () => void
}

const ButtonClass = styled.button(({ variant, size }: ButtonProps) => [
  tw`
    rounded-full
    focus:outline-none
    focus:ring
    text-white
  `,
  variant === 'primary' &&
    tw`bg-blue-600 hover:bg-blue-700 active:bg-blue-600 focus:ring-blue-300`,
  variant === 'secondary' &&
    tw`bg-gray-600 hover:bg-gray-500 active:bg-gray-700 focus:ring-gray-300`,
  size === 'small'
    ? tw`text-xs px-2 py-1`
    : size === 'large'
    ? tw`text-lg px-4 py-3`
    : tw`text-sm px-3 py-2`,
])

export function Button({
  variant,
  size,
  label,
  backgroundColor,
  color,
  onClick,
}: ButtonProps) {
  return (
    <ButtonClass
      className={`btn btn-${variant} btn-${size}`}
      style={{ backgroundColor, color }}
      variant={variant}
      size={size}
      onClick={onClick}
    >
      {label}
    </ButtonClass>
  )
}
