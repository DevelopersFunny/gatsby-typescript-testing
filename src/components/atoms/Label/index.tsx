import React from 'react'
import { ILabelProps } from '../../../types/components/label'
import { StyledLabel } from './labelStyled'

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
