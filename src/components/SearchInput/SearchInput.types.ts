import type React from 'react'

export type SearchInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'size'
> & {
  value?: string
  onChange?: (value: string) => void
  icon?: React.ReactNode
  width?: number | string
  $fullWidth?: boolean
  error?: boolean
  errorMessage?: string
  onClear?: () => void
}
