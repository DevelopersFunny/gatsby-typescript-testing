import React from 'react'

interface ButtonProps {
  variant?: 'text' | 'contained' | 'outlined'
  backgroundColor?: string
  color?: 'success' | 'warning' | 'error' | 'secondary'
  size?: 'small' | 'normal' | 'large'
  label: string
  textColor?: string
  onClick?: () => void
}

export function Button({
  variant,
  size,
  label,
  backgroundColor,
  color,
  textColor,
  onClick,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`btn ${variant} ${size} ${color}`}
      style={{ backgroundColor, color: textColor }}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
