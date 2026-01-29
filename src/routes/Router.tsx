import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import { PublicLayout } from '@/components'
import { NotFound, Shop } from '@/pages'
import { ShopDetail } from '@/pages/ShopPage/ShopDetail/ShopDetail'
import { ROUTES } from './Routes.types'

const routes: RouteObject[] = [
  {
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Shop />,
      },
      {
        path: ROUTES.SHOP,
        element: <Shop />,
      },
      {
        path: ROUTES.SHOP_DETAIL,
        element: <ShopDetail />,
      },
    ],
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFound />,
  },
]

export const Router = createBrowserRouter(routes)
