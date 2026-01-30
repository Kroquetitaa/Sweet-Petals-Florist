import { useTranslation } from 'react-i18next'
import { TRANSLATION } from '@/i18n/translations/keys'
import * as S from './SearchInput.styles.d'
import type { SearchInputProps } from './SearchInput.types'

export const SearchInput = ({
  placeholder,
  value,
  onChange,
  width,
  icon,
  error,
  errorMessage,
  disabled,
  onClear,
  $fullWidth,
  ...inputProps
}: SearchInputProps) => {
  const { t } = useTranslation()

  return (
    <S.Container $width={width} $fullWidth={$fullWidth}>
      <S.InputContainer>
        {icon && <S.IconWrapper>{icon}</S.IconWrapper>}

        <S.Input
          {...inputProps}
          type="search"
          value={value}
          disabled={disabled}
          $hasIcon={!!icon}
          $hasError={error}
          aria-invalid={error}
          placeholder={placeholder ?? t(TRANSLATION.COMMON.SEARCH)}
          onChange={(e) => onChange?.(e.target.value)}
        />

        {value && onClear && !disabled && (
          <S.ClearButton type="button" aria-label={t(TRANSLATION.COMMON.CLEAR)} onClick={onClear} />
        )}
      </S.InputContainer>

      {error && errorMessage && <S.ErrorText>{errorMessage}</S.ErrorText>}
    </S.Container>
  )
}
