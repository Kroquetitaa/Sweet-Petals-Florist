import type { PropsWithChildren } from 'react'
import * as S from './Section.styles.d'

type SectionProps = PropsWithChildren<{ isCenter?: boolean }>

export const Section = ({ children, isCenter = false }: SectionProps) => {
  return <S.Container $isCenter={isCenter}>{children}</S.Container>
}
