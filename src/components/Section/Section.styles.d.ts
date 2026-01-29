import styled from 'styled-components'

export const Container = styled.section<{ isCenter?: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${({ isCenter }) => (isCenter ? 'center' : '')};
  justify-content: center;
  flex-wrap: wrap;
  background-color: #f9f9f9;
`
