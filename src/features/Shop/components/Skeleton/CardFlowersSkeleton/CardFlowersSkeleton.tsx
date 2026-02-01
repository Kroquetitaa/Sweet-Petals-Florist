import * as S from '../../CardFlowers/CardFlowers.styles.d'
import { SkeletonPulse } from './CardFlowersSkeleton.styles.d'

export const CardFlowersSkeleton = () => {
  return (
    <S.Card>
      <S.Header>
        <SkeletonPulse style={{ width: '70%', height: '24px', borderRadius: '4px' }} />
        <SkeletonPulse style={{ width: '40%', height: '16px', borderRadius: '4px' }} />
      </S.Header>

      <S.ImageShadow>
        <S.ImageWrapper>
          <S.Image as={SkeletonPulse} style={{ display: 'block' }} />

          <S.PriceBadge style={{ boxShadow: 'none' }}>
            <SkeletonPulse style={{ width: '40px', height: '16px', borderRadius: '10px' }} />
          </S.PriceBadge>

          <S.ActionButton as="div" style={{ boxShadow: 'none', cursor: 'default' }}>
            <SkeletonPulse style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
          </S.ActionButton>
        </S.ImageWrapper>
      </S.ImageShadow>
    </S.Card>
  )
}
