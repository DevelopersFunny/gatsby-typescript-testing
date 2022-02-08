import React from 'react'
import { IButtonProps } from '../../../types/components/button'
import { StyledButton } from './ButtonStyled'

export const Button = ({
  variant,
  size,
  backgroundColor,
  color,
  textColor,
  onClick,
  children,
  disabled,
}: IButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      className={color}
      style={{ backgroundColor, color: textColor }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  )
}
