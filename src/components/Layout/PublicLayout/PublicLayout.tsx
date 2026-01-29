import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header/Header'
import * as S from './PublicLayout.styles.d'

export const PublicLayout = () => {
  return (
    <S.AppLayout>
      <Header />

      <S.Main>
        <Outlet />
      </S.Main>
    </S.AppLayout>
  )
}
