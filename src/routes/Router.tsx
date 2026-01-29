import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import { PublicLayout } from '@/components'
import { NotFound, Shop } from '@/pages'
import { ROUTES } from './Routes'

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
    ],
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFound />,
  },
]

export const router = createBrowserRouter(routes)
