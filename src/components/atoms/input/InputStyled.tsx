import tw, { styled } from 'twin.macro'
import { IInputProps } from '../../../types/components/input'

export const StyledInput = styled.input(({ variant, type }: IInputProps) => [
  tw`
    h-10
    w-full
    py-2
    pl-9
    pr-3
    block
    placeholder:text-base
    text-gray-900
    sm:text-sm
    placeholder-transparent
  `,
  variant === 'filled'
    ? tw`placeholder:italic placeholder:text-gray-400 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1`
    : variant === 'outlined'
    ? tw`placeholder:italic placeholder:text-gray-400 bg-transparent border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1`
    : variant === 'standard'
    ? tw`placeholder:italic placeholder:text-gray-400 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600`
    : tw`placeholder:italic bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600`,
  type === 'file' && tw`bg-transparent border-0`,
])
