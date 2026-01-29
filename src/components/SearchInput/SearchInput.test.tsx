import { fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, expect, it, vi } from 'vitest'
import { renderWithTheme } from '@/test/utils/renderWithTheme'
import { SearchInput } from './SearchInput'

describe('SearchInput component', () => {
  it('renders with default placeholder (i18n key)', () => {
    renderWithTheme(<SearchInput />)

    expect(screen.getByPlaceholderText('common.search')).toBeInTheDocument()
  })

  it('renders custom placeholder', () => {
    renderWithTheme(<SearchInput placeholder="Buscar plantas" />)

    expect(screen.getByPlaceholderText('Buscar plantas')).toBeInTheDocument()
  })

  it('renders input value', () => {
    renderWithTheme(<SearchInput value="Rosa" />)

    expect(screen.getByDisplayValue('Rosa')).toBeInTheDocument()
  })

  it('calls onChange when typing', () => {
    const handleChange = vi.fn()

    renderWithTheme(<SearchInput value="" onChange={handleChange} />)

    const input = screen.getByRole('textbox')

    fireEvent.change(input, {
      target: { value: 'Lavanda' },
    })

    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('renders icon when provided', () => {
    renderWithTheme(<SearchInput icon={<span data-testid="search-icon">🔍</span>} />)

    expect(screen.getByTestId('search-icon')).toBeInTheDocument()
  })

  it('does not render icon when not provided', () => {
    renderWithTheme(<SearchInput />)

    expect(screen.queryByTestId('search-icon')).not.toBeInTheDocument()
  })
})
