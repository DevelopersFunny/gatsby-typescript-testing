import React, { ReactNode } from 'react'
import tw, { styled } from 'twin.macro'

export interface ILabelProps {
  className?: string
  backgroundColor?: string
  textColor?: string
  htmlFor?: string
  children?: ReactNode
}

const StyledLabel = styled.label([
  tw`
    block
    text-sm
    font-medium
    text-gray-700
  `,
])

export function Label({
  backgroundColor,
  className,
  htmlFor,
  children,
  textColor,
}: ILabelProps) {
  return (
    <StyledLabel
      htmlFor={htmlFor}
      className={className}
      style={{ backgroundColor, color: textColor }}
    >
      {children}
    </StyledLabel>
  )
}
