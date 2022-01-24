import React, { ReactNode } from 'react'

export interface IButtonProps {
  variant?: 'text' | 'contained' | 'outlined'
  backgroundColor?: string
  color?: 'success' | 'warning' | 'error' | 'secondary'
  size?: 'small' | 'normal' | 'large'
  textColor?: string
  onClick?: () => void
  disabled?: boolean
  children: ReactNode
}

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
    <button
      type="button"
      className={`btn ${variant ? variant : ''} ${size ? size : ''} ${
        color ? color : ''
      }`}
      style={{ backgroundColor, color: textColor }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
