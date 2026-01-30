import styled from 'styled-components'

export const Container = styled.section<{ $isCenter?: boolean }>`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: ${({ $isCenter }) => ($isCenter ? 'center' : 'stretch')};
  justify-content: center;
  padding-left: ${({ theme }) => theme.spacing.m}px;
  padding-right: ${({ theme }) => theme.spacing.m}px;
  background-color: #f9f9f9;

  @media (min-width: 768px) {
    padding-left: ${({ theme }) => theme.spacing.l}px;
    padding-right: ${({ theme }) => theme.spacing.l}px;
  }

  @media (min-width: 1200px) {
    padding-left: ${({ theme }) => theme.spacing.xl}px;
    padding-right: ${({ theme }) => theme.spacing.xl}px;
  }
`
