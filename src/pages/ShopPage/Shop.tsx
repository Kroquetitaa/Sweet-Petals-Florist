import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IconSearchSVG } from '@/assets/Icons'
import { SearchInput, Section } from '@/components'
import { CardFlowers, useProductsQuery } from '@/features'
import { TRANSLATION } from '@/i18n/translations/keys'
import * as S from './Shop.styles.d'

export const Shop = () => {
  const { t } = useTranslation()
  const { data, isLoading, error } = useProductsQuery()
  const [search, setSearch] = useState('')

  const filteredProducts = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return data ?? []
    return (data ?? []).filter((p) => p.name.toLowerCase().includes(q))
  }, [data, search])

  return (
    <Section isCenter>
      <SearchInput
        placeholder={t(TRANSLATION.SHOP.SEARCH_PLACEHOLDER)}
        width="100%"
        icon={<IconSearchSVG width={24} height={24} />}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {isLoading && <p>{t(TRANSLATION.COMMON.LOADING_PRODUCTS)}</p>}
      {error && <p>{t(TRANSLATION.COMMON.ERROR_PRODUCTS)}</p>}

      <S.ShopGrid>
        {filteredProducts.map((product) => (
          <CardFlowers key={product.id} product={product} />
        ))}
      </S.ShopGrid>
    </Section>
  )
}
