const BASE_KEY_NAMES = {
  COMMON: 'common',
  HEADER: 'header',
  SHOP: 'shop',
  SHOP_DETAIL: 'shopDetail',
  CARD: 'card',
} as const

type BaseKeyName = keyof typeof BASE_KEY_NAMES
type BaseKey = (typeof BASE_KEY_NAMES)[BaseKeyName]

const BASE_KEYS: Record<BaseKeyName, BaseKey> = BASE_KEY_NAMES

function generateTranslationKeys<K extends string>(
  baseKey: BaseKey,
  keys: Record<K, string>
): Record<K, string> {
  const result = {} as Record<K, string>
  for (const key in keys) {
    result[key] = `${baseKey}.${keys[key]}`
  }
  return result
}

export const TRANSLATION = {
  COMMON: generateTranslationKeys(BASE_KEYS.COMMON, {
    LOADING_PRODUCTS: 'loadingProducts',
    ERROR_PRODUCTS: 'errorProducts',
    LOADING_PRODUCT: 'loadingProduct',
    ERROR_PRODUCT: 'errorProduct',
    SEARCH: 'search',
  }),

  SHOP: generateTranslationKeys(BASE_KEYS.SHOP, {
    SEARCH_PLACEHOLDER: 'searchPlaceholder',
  }),

  SHOP_DETAIL: generateTranslationKeys(BASE_KEYS.SHOP_DETAIL, {
    BREADCRUMB_HOME: 'breadcrumbHome',
    WATERING: 'watering',
    FERTILIZER: 'fertilizer',
    ADD_TO_CART: 'addToCart',
  }),

  CARD: generateTranslationKeys(BASE_KEYS.CARD, {
    VIEW_DETAIL: 'viewDetail',
  }),
}
