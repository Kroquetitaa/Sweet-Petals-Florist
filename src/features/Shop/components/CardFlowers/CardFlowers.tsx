import { useQueryClient } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { IconArrowUpDiagonalSVG } from '@/assets/Icons/Icon_ArrowUpDiagonal'
import { TRANSLATION } from '@/i18n/translations/keys'
import type { Product } from '@/interfaces'
import { routePaths } from '@/routes/Routes.types'
import { getProductById } from '../../api/products.api'
import * as S from './CardFlowers.styles.d'

type CardFlowersProps = {
  product: Product
}

export const CardFlowers = ({ product }: CardFlowersProps) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const handlePrefetch = () => {
    queryClient.prefetchQuery({
      queryKey: ['product', product.id],
      queryFn: () => getProductById(String(product.id)),
    })
  }

  const handleNavigate = () => {
    navigate(routePaths.shopDetail(product.id))
  }

  return (
    <S.Card>
      <S.Header>
        <S.Name>{product.name}</S.Name>
        <S.Subtitle>{product.binomialName}</S.Subtitle>
      </S.Header>

      <S.ImageWrapper>
        <S.Image src={product.imgUrl} alt={product.name} />
        <S.PriceBadge>€{product.price}</S.PriceBadge>

        <S.ActionButton
          type="button"
          onMouseEnter={handlePrefetch}
          onClick={handleNavigate}
          aria-label={t(TRANSLATION.CARD.VIEW_DETAIL, {
            name: product.name,
          })}
        >
          <IconArrowUpDiagonalSVG width={24} height={24} />
        </S.ActionButton>
      </S.ImageWrapper>
    </S.Card>
  )
}
