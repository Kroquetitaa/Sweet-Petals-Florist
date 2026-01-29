const BASE_PATH = '/shop'

export const ROUTES = {
  SHOP: BASE_PATH,
  SHOP_DETAIL: `${BASE_PATH}/detail/:id`,
  NOT_FOUND: '*',
} as const

export const routePaths = {
  shopDetail: (id: string | number) => `${BASE_PATH}/detail/${id}`,
}

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES]
