import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 65px;
  background-color: ${({ theme }) => theme.palette.neutral.white};

  display: flex;
  align-items: center;

  border-bottom: ${({ theme }) => theme.stroke.s}px solid
    ${({ theme }) => theme.palette.neutral[200]};
`

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${({ theme }) => theme.spacing.m}px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LogoLink = styled(Link)`
  display: inline-flex;
  align-items: center;

  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.palette.primary[400]};
    outline-offset: 4px;
  }
`
