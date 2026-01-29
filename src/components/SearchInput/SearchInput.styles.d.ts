import styled from 'styled-components'

export const Container = styled.div<{ width?: number | string }>`
  position: relative;
  margin-top: 48px;
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  max-width: 600px;

  @media (max-width: 768px) {
     position: relative;
    width: 100%;
    margin-top: 24px;
  }
`

export const IconWrapper = styled.div`
  position: absolute;
  left: ${({ theme }) => `${theme.spacing.xs}px`};
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;

  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.neutral[500]};
  @media (max-width: 768px) {
    height: 48px;
    font-size: 16px;

    padding-left: ${({ hasIcon }) => (hasIcon ? '52px' : '12px')};
  }
`

export const InputContainer = styled.div`
  @media (max-width: 768px) {
    margin: ${({ theme }) => `${theme.spacing.xs}px`};
  }
`

export const Input = styled.input<{ hasIcon?: boolean }>`
  box-sizing: border-box;
  width: 100%;
  height: 40px;

  padding: ${({ theme, hasIcon }) =>
    hasIcon
      ? `${theme.spacing.xs2}px ${theme.spacing.xs}px ${theme.spacing.xs2}px ${theme.spacing.l}px`
      : `${theme.spacing.xs2}px ${theme.spacing.xs}px`};

  border-radius: ${({ theme }) => theme.radius.xs2}px;
  border: ${({ theme }) => theme.stroke.m}px solid
    ${({ theme }) => theme.palette.neutral[300]};

  background-color: ${({ theme }) => theme.palette.neutral.white};
  color: ${({ theme }) => theme.palette.neutral[1000]};

  font-family: ${({ theme }) => theme.typography.body.b1.fontFamily};
  font-size: ${({ theme }) => theme.typography.body.b1.fontSize};

  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.palette.primary[400]};
    box-shadow: ${({ theme }) => theme.effects.E1};
  }

  &::placeholder {
    color: ${({ theme }) => theme.palette.neutral[500]};
  }

  @media (max-width: 768px) {
    height: 48px;
    font-size: 16px;

    padding-left: ${({ theme, hasIcon }) =>
      hasIcon ? `${theme.spacing.xl}px` : theme.spacing.xs}px;
  }
`
