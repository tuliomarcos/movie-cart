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

  @media (max-width: 1024px) {
    display: none;
  }
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
    align-items: center;

    input {
      height: 26px;
      width: 62px;
      border: solid 1px #d9d9d9;
      border-radius: 4px;
    }
  }

  @media (max-width: 1024px) {
    grid-template: 
      "img title trash" 42px
      "img quantify total" 56px / 92px auto 66px;
    gap: 16px;
  
    .trash {
      grid-area: trash;
      display: flex;
      align-items: flex-end;
    }

    img {
      grid-area: img;
    }

    .price {
      grid-area: total;
      display: flex;
      justify-content: flex-end;
    }

    .quantify {
      grid-area: quantify;
      gap: 11px;
      
      input {
        width: 42px;
      }
    }

    .infos {
      grid-area: title;
      flex-direction: row;
      gap: 16px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      :first-child {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      :last-child {
        min-width: 70px;
      }
    }
  }

  @media (max-width: 430px) {
    grid-template: 
      "img img img title title title title title trash" 42px
      "img img img quantify quantify quantify total total total" 42px / auto auto auto;
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

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: flex-end;
    gap: 16px;

    button {
      width: 100%;  
    }
  }
`