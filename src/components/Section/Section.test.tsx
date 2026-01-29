import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Section } from './Section'

describe('Section component', () => {
  it('renders children correctly', () => {
    render(
      <Section>
        <p>Contenido de prueba</p>
      </Section>
    )

    expect(screen.getByText('Contenido de prueba')).toBeInTheDocument()
  })

  it('passes isCenter=false by default', () => {
    const { container } = render(
      <Section>
        <span>Test</span>
      </Section>
    )

    expect(container.firstChild).toBeInTheDocument()
  })

  it('applies isCenter when prop is true', () => {
    const { container } = render(
      <Section isCenter>
        <span>Test centrado</span>
      </Section>
    )

    expect(container.firstChild).toBeInTheDocument()
  })
})
