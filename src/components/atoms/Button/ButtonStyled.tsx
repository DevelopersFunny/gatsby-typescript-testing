import tw, { styled } from 'twin.macro'
import { IButtonProps } from '../../../types/components/button'

export const StyledButton = styled.button(({ variant, size }: IButtonProps) => [
  tw`
    rounded-full
    focus:outline-none
    focus:ring
  `,
  variant === 'contained'
    ? tw`text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-600 focus:bg-blue-600/90`
    : variant === 'outlined'
    ? tw`border-2 border-blue-600 hover:border-blue-700 active:border-blue-600 focus:border-blue-600/90`
    : tw`bg-transparent`,
  size === 'small'
    ? tw`text-sm px-2 py-1`
    : size === 'large'
    ? tw`text-lg px-4 py-3`
    : tw`text-base px-3 py-2`,
])
