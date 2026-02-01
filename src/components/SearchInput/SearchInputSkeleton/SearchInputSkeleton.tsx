import * as S from '../SearchInput.styles.d'
import { SkeletonPulse } from './SearchInputSkeleton.styles.d'

export const SearchInputSkeleton = ({ $fullWidth }: { $fullWidth?: boolean }) => {
  return (
    <S.Container $fullWidth={$fullWidth}>
      <S.InputContainer>
        <S.Input
          as={SkeletonPulse}
          style={{
            border: 'none',
            cursor: 'default',
            height: '40px',
          }}
        />
      </S.InputContainer>
    </S.Container>
  )
}
