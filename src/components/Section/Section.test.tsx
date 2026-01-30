import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithTheme } from '@/test/utils/renderWithTheme'
import { Section } from './Section'

describe('Section component', () => {
  it('renders children correctly', () => {
    renderWithTheme(
      <Section>
        <p>Content</p>
      </Section>
    )

    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('passes isCenter=false by default', () => {
    const { container } = renderWithTheme(
      <Section>
        <p>Content</p>
      </Section>
    )

    expect(container.firstChild).toHaveStyle({
      alignItems: 'stretch',
    })
  })

  it('applies isCenter when prop is true', () => {
    const { container } = renderWithTheme(
      <Section isCenter>
        <p>Content</p>
      </Section>
    )

    expect(container.firstChild).toHaveStyle({
      alignItems: 'center',
    })
  })
})
