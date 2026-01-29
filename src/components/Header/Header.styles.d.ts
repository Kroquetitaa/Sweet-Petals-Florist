import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 65px;
  background-color: ${({ theme }) => theme.palette.neutral.white};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
