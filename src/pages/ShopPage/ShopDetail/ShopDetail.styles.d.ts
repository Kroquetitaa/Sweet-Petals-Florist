import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ContainerCard = styled.div`
flex: 1;
    padding: 48px 264px;
    background-color: ${({ theme }) => theme.palette.neutral[200]};

     @media (max-width: 768px) {
        padding: 48px 16px;
        background-color: ${({ theme }) => theme.palette.neutral[200]};
  }
`

export const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  gap: 6px;

  font-family: ${({ theme }) => theme.typography.body.b2.fontFamily};
  font-size: ${({ theme }) => theme.typography.body.b2.fontSize};
  color: ${({ theme }) => theme.palette.neutral[600]};
  margin-bottom: ${({ theme }) => theme.spacing.m}px;

  a {
    color: ${({ theme }) => theme.palette.neutral[700]};
    text-decoration: none;
    font-weight: 500;
  }

  strong {
    color: ${({ theme }) => theme.palette.neutral[1000]};
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.body.b3.fontSize};
    margin-bottom: ${({ theme }) => theme.spacing.s}px;
  }
`

export const LinkMenu = styled(Link)`
  color: ${({ theme }) => theme.palette.neutral[600]};
`

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl}px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.m}px;
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 600px;
  border-radius: ${({ theme }) => theme.radius.m}px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 280px;
    border-radius: ${({ theme }) => theme.radius.s}px;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.s}px;

  @media (max-width: 768px) {
    gap: ${({ theme }) => theme.spacing.xs}px;
  }
`

export const Title = styled.h1`
  margin: 0;

  font-family: ${({ theme }) => theme.typography.headings.h3.fontFamily};
  font-size: ${({ theme }) => theme.typography.headings.h3.fontSize};
  font-weight: ${({ theme }) => theme.typography.headings.h3.fontWeight};
  line-height: ${({ theme }) => theme.typography.headings.h3.lineHeight};

  color: ${({ theme }) => theme.palette.neutral[1000]};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.headings.h4.fontSize};
  }
`

export const Subtitle = styled.span`
  font-family: ${({ theme }) => theme.typography.body.b2.fontFamily};
  font-size: ${({ theme }) => theme.typography.body.b2.fontSize};
  color: ${({ theme }) => theme.palette.neutral[600]};
`

export const Price = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xs}px;

  font-family: ${({ theme }) => theme.typography.body.b1.fontFamily};
  font-size: 20px;
  font-weight: 700;

  color: ${({ theme }) => theme.palette.neutral[1000]};

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

export const List = styled.ul`
  margin: ${({ theme }) => theme.spacing.s}px 0;
  padding-left: ${({ theme }) => theme.spacing.s}px;

  li {
    font-family: ${({ theme }) => theme.typography.body.b2.fontFamily};
    font-size: ${({ theme }) => theme.typography.body.b2.fontSize};
    color: ${({ theme }) => theme.palette.neutral[700]};
    margin-bottom: 6px;
  }
`

export const AddToCart = styled.button`
  margin-top: ${({ theme }) => theme.spacing.m}px;
  align-self: flex-start;

  width: auto;
  padding: 16px;
  border-radius: ${({ theme }) => theme.radius.full}px;
  border: none;

  background-color: ${({ theme }) => theme.palette.accent[600]};
  color: ${({ theme }) => theme.palette.neutral.white};

  font-family: ${({ theme }) => theme.typography.body.b2.fontFamily};
  font-weight: 600;

  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.palette.accent[700]};
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: ${({ theme }) => theme.spacing.l}px;
  }
`
