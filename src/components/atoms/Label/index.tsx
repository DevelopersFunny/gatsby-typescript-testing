import React from 'react'

interface LabelProps {
  name: string
  backgroundColor?: string
  textColor?: string
}

export function Label({ backgroundColor, name, textColor }: LabelProps) {
  return (
    <>
      <label className="block">
        <span
          className="labelName"
          style={{ backgroundColor, color: textColor }}
        >
          {name}
        </span>
      </label>
    </>
  )
}
