import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { Section } from '@/components'
import { useProductDetail } from '@/features/Shop/hooks/useProductDetail'
import { TRANSLATION } from '@/i18n/translations/keys'
import { ROUTES } from '@/routes/Routes.types'
import * as S from './ShopDetail.styles.d'

export const ShopDetail = () => {
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()
  const { data, isLoading, isError } = useProductDetail(id)

  if (isLoading) {
    return <Section>{t(TRANSLATION.COMMON.LOADING_PRODUCT)}</Section>
  }

  if (isError || !data) {
    return <Section>{t(TRANSLATION.COMMON.ERROR_PRODUCT)}</Section>
  }

  return (
    <S.ContainerCard>
      <S.Breadcrumb>
        <S.LinkMenu to={ROUTES.SHOP}>{t(TRANSLATION.SHOP_DETAIL.BREADCRUMB_HOME)}</S.LinkMenu>
        <span>›</span>
        <strong>{data.name}</strong>
      </S.Breadcrumb>

      <S.Layout>
        <S.ImageWrapper>
          <S.Image src={data.imgUrl} alt={data.name} />
        </S.ImageWrapper>

        <S.Info>
          <S.Title>{data.name}</S.Title>
          <S.Subtitle>{data.binomialName}</S.Subtitle>
          <S.Price>€{data.price}</S.Price>

          <S.List>
            <li>
              {t(TRANSLATION.SHOP_DETAIL.WATERING, {
                count: data.wateringsPerWeek,
              })}
            </li>
            <li>
              {t(TRANSLATION.SHOP_DETAIL.FERTILIZER, {
                type: data.fertilizerType,
              })}
            </li>
          </S.List>

          <S.AddToCart>{t(TRANSLATION.SHOP_DETAIL.ADD_TO_CART)}</S.AddToCart>
        </S.Info>
      </S.Layout>
    </S.ContainerCard>
  )
}
