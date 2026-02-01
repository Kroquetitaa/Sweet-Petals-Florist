import styled, { keyframes } from 'styled-components'

export const shimmer = keyframes`
  0% { background-position: -468px 0 }
  100% { background-position: 468px 0 }
`

export const SkeletonPulse = styled.div`
  background: #f6f7f8;
  background-image: linear-gradient(
    to right, 
    #f6f7f8 0%, 
    #edeef1 20%, 
    #f6f7f8 40%, 
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 104px;
  animation: ${shimmer} 1.2s linear infinite forwards;
`
