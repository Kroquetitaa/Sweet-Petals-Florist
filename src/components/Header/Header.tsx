import { IconLogoSVG } from '@/assets/Icons'
import { ROUTES } from '@/routes/Routes.types'
import * as S from './Header.styles.d'

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Inner>
        <S.LogoLink to={ROUTES.SHOP} aria-label="Go to shop">
          <IconLogoSVG width={40} height={40} />
        </S.LogoLink>
      </S.Inner>
    </S.HeaderContainer>
  )
}
