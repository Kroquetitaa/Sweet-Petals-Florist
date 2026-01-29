import { useTranslation } from 'react-i18next'
import { TRANSLATION } from '@/i18n/translations/keys'
import * as S from './SearchInput.styles.d'

type SearchInputProps = {
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  width?: number | string
  icon?: React.ReactNode
}

export const SearchInput = ({ placeholder, value, onChange, width, icon }: SearchInputProps) => {
  const { t } = useTranslation()

  return (
    <S.Container width={width}>
      {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
      <S.InputContainer>
        <S.Input
          type="text"
          placeholder={placeholder ?? t(TRANSLATION.COMMON.SEARCH)}
          value={value}
          onChange={onChange}
          hasIcon={!!icon}
        />
      </S.InputContainer>
    </S.Container>
  )
}
