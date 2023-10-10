import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  max-width: 960px;
  background-color: #fff;
  flex-direction: column;
  color: #2F2E41;
  padding: 64px 24px;
  margin: 0 auto;

  p {
    font-size: 20px;
    line-height: 27.24px;
  }

  @media (min-width: 680px) {
    grid-template-columns: 310px 310px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 310px 310px 310px;
  }
`