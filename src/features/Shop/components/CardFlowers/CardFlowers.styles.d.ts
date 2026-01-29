import styled from 'styled-components'

export const Card = styled.article`
  background-color: ${({ theme }) => theme.palette.neutral.white};
  border-radius: ${({ theme }) => theme.radius.m}px;
  padding: ${({ theme }) => theme.spacing.s}px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.s}px;

  box-shadow:
    ${({ theme }) => theme.effects.E_CARD};
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Name = styled.h4`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.headings.h4.fontFamily};
  font-size: ${({ theme }) => theme.typography.headings.h4.fontSize};
  font-weight: ${({ theme }) => theme.typography.headings.h4.fontWeight};

  color: ${({ theme }) => theme.palette.neutral[1000]};
`

export const Subtitle = styled.span`
  font-family: ${({ theme }) => theme.typography.body.b1.fontFamily};
  font-size: ${({ theme }) => theme.typography.body.b1.fontSize};
  color: ${({ theme }) => theme.palette.neutral[800]};
`

export const ImageShadow = styled.div`
  border-radius: ${({ theme }) => theme.radius.s}px;
  box-shadow: ${({ theme }) => theme.effects.E_IMAGE};
`

export const ImageWrapper = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.radius.s}px;
  overflow: hidden;
`

export const Image = styled.img`
  width: 350px;
  height: 300px;
  object-fit: cover;
  display: block;
`
export const PriceBadge = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.xs}px;
  left: ${({ theme }) => theme.spacing.xs}px;

  background-color: ${({ theme }) => theme.palette.neutral.white};
  padding: 4px 8px;

  border-radius: ${({ theme }) => theme.radius.full}px;

  font-family: ${({ theme }) => theme.typography.body.b2.fontFamily};
  font-size: ${({ theme }) => theme.typography.body.b2.fontSize};
  font-weight: 600;

  box-shadow: ${({ theme }) => theme.effects.E1};
`
export const ActionButton = styled.button`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.xs}px;
  right: ${({ theme }) => theme.spacing.xs}px;

  width: 32px;
  height: 32px;

  border-radius: ${({ theme }) => theme.radius.full}px;
  border: none;

  background-color: ${({ theme }) => theme.palette.neutral.white};
  box-shadow: ${({ theme }) => theme.effects.E1};

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`
