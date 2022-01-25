import React, { ReactNode } from 'react'

export interface LabelProps {
  className?: string
  backgroundColor?: string
  textColor?: string
  htmlFor?: string
  children?: ReactNode
}

export function Label({
  backgroundColor,
  className,
  htmlFor,
  children,
  textColor,
}: LabelProps) {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className={className ? className : 'labelName'}
        style={{ backgroundColor, color: textColor }}
      >
        {children}
      </label>
    </>
  )
}
