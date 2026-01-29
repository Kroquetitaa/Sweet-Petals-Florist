import styled from 'styled-components'

export const ShopGrid = styled.section`
  margin-top: ${({ theme }) => theme.spacing.xl}px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.s}px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
