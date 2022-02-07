export interface IInputProps {
  type:
    | 'text'
    | 'email'
    | 'password'
    | 'file'
    | 'range'
    | 'number'
    | 'radio'
    | 'checkbox'
  id: string
  name: string
  placeholder?: string | 'Please write a placeholder'
  minLength?: number | 4
  maxLength?: number | 8
  className?: string
  variant?: 'outlined' | 'filled' | 'standard'
  disabled?: boolean
  onChange?: () => void
}

export interface IInputLabelProps extends IInputProps {
  label: string
  type: 'text' | 'email' | 'password' | 'number'
}
