import styled from 'styled-components'

export const Container = styled.main`
  display: grid;
  gap: 16px;
  justify-content: center;

  @media (min-width: 680px) {
    grid-template-columns: 310px 310px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 310px 310px 310px;
  }
`