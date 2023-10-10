import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 68px;
  max-width: 960px;
  padding: 0 10px;
  margin: 0 auto 24px;
`

export const CartInfo = styled.div`
  display: flex;
  gap: 8px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    p:first-child {
      display: none;

      @media (min-width: 500px) {
        display: block;
      }
    }

    p:last-child {
      font-size: 12px;
      color: #999;
    }
  }
`
