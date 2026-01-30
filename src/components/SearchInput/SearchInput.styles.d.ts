import styled from 'styled-components'

export const Container = styled.div<{
  $width?: number | string
  $fullWidth?: boolean
}>`
  width: ${({ $fullWidth, $width }) =>
    $fullWidth ? '100%' : typeof $width === 'number' ? `${$width}px` : $width || '100%'};

  max-width: 600px;
  margin-top: 48px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 24px;
  }
`

export const InputContainer = styled.div`
  position: relative;
`

export const IconWrapper = styled.div`
  position: absolute;
  left: ${({ theme }) => theme.spacing.xs}px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.neutral[500]};
  z-index: 2;
`

export const Input = styled.input<{
  $hasIcon?: boolean
  $hasError?: boolean
}>`
  box-sizing: border-box;
  width: 100%;
  height: 40px;

  padding: ${({ theme, $hasIcon }) =>
    $hasIcon
      ? `${theme.spacing.xs2}px ${theme.spacing.xl}px ${theme.spacing.xs2}px ${theme.spacing.l}px`
      : `${theme.spacing.xs2}px ${theme.spacing.xs}px`};

  border-radius: ${({ theme }) => theme.radius.xs2}px;
  border: ${({ theme }) => theme.stroke.m}px solid
    ${({ theme, $hasError }) =>
      $hasError ? theme.palette.error[400] : theme.palette.neutral[300]};

  background-color: ${({ theme }) => theme.palette.neutral.white};
  color: ${({ theme }) => theme.palette.neutral[1000]};

  font-family: ${({ theme }) => theme.typography.body.b1.fontFamily};
  font-size: ${({ theme }) => theme.typography.body.b1.fontSize};

  outline: none;
  position: relative;
  z-index: 1;

  &:focus {
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.palette.error[400] : theme.palette.primary[400]};
    box-shadow: ${({ theme }) => theme.effects.E1};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.palette.neutral[200]};
    color: ${({ theme }) => theme.palette.neutral[500]};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${({ theme }) => theme.palette.neutral[500]};
  }

  @media (max-width: 768px) {
    height: 48px;
    font-size: 16px;
  }
`
export const ClearButton = styled.button`
  position: absolute;
  right: ${({ theme }) => theme.spacing.xs}px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: ${({ theme }) => theme.palette.neutral[500]};

  &:hover {
    color: ${({ theme }) => theme.palette.neutral[900]};
  }
`

export const ErrorText = styled.span`
  display: block;
  margin-top: ${({ theme }) => theme.spacing['2xs']}px;
  font-size: 12px;
  color: ${({ theme }) => theme.palette.error[500]};
`
