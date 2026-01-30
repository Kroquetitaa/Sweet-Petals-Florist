import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IconSearchSVG } from '@/assets/Icons'
import { SearchInput, Section } from '@/components'
import { CardFlowers, useProductsQuery } from '@/features'
import { useDebouncedValue } from '@/hooks/useDebouncedValue'
import { TRANSLATION } from '@/i18n/translations/keys'
import * as S from './Shop.styles.d'

export const Shop = () => {
  const { t } = useTranslation()
  const { data, isLoading, error } = useProductsQuery()

  const [search, setSearch] = useState('')
  const debouncedSearch = useDebouncedValue(search, 300)

  const filteredProducts = useMemo(() => {
    const q = debouncedSearch.trim().toLowerCase()
    if (!q) return data ?? []
    return (data ?? []).filter((p) => p.name.toLowerCase().includes(q))
  }, [data, debouncedSearch])

  return (
    <Section isCenter>
      <S.Content>
        <SearchInput
          placeholder={t(TRANSLATION.SHOP.SEARCH_PLACEHOLDER)}
          icon={<IconSearchSVG width={24} height={24} />}
          value={search}
          onChange={setSearch}
          onClear={() => setSearch('')}
          disabled={isLoading}
          aria-label="Search products"
          $fullWidth
        />

        {isLoading && <p>{t(TRANSLATION.COMMON.LOADING_PRODUCTS)}</p>}
        {error && <p>{t(TRANSLATION.COMMON.ERROR_PRODUCTS)}</p>}

        <S.ShopGrid>
          {filteredProducts.map((product) => (
            <CardFlowers key={product.id} product={product} />
          ))}
        </S.ShopGrid>
      </S.Content>
    </Section>
  )
}
