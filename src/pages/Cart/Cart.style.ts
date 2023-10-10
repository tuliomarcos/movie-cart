import styled from 'styled-components'

export const Container = styled.div`
  max-width: 960px;
  border-radius: 4px;
  padding: 24px;
  background-color: #fff;
  margin: 0 auto;
`

export const HeaderList = styled.div`
  text-transform: uppercase;
  font-size: 14px;
  color: #999;
  display: grid;
  gap: 52px;
  grid-template-columns: 396px 194px 1fr;
`

export const ItemList = styled.div`
  display: grid;
  gap: 52px;
  grid-template-columns: 90px 254px 1fr 1fr 20px;
  align-items: center;
  color: #2F2E41;
  height: 114px;
  padding: 21px 0;
  border-bottom: solid 1px #999;

  img {
    width: 89px;
    height: 114px;
    object-fit: cover;
  }

  svg {
    cursor: pointer;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .title {
    font-size: 14px;
  }

  .quantify {
    display: flex;
    flex-direction: row;

    input {
      width: 62px;
    }
  }
`

export const FooterList = styled.div`
  text-transform: uppercase;
  font-size: 14px;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 21px;

  div {
    display: flex;
    align-items: center;
  }
  
  .total {
    font-size: 14px;
    color: #999;
  }

  .price {
    margin-left: 16px;
    font-size: 24px;
    color: #2F2E41;
  }
`