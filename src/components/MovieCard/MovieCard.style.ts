import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px 11px;
  border-radius: 4px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 305px;
  width: 288px;
  color: #2F2E41;

  img {
    width: 147px;
    height: 188px;
    margin-bottom: 7px;
  }

  p {
    font-size: 12px;
    line-height: 16.34px;
    margin-bottom: 2px;
  }

  > span {
    line-height: 21.79px;
    margin-bottom: 8px;
  }

  button {
    color: #fff;
    background-color: #009EDD;
    border: solid 1px #009EDD;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 700;
    line-height: 16.34px;
    padding: 11px 0;
    display: flex;
    justify-content: center;
    width: 100%;
    text-transform: uppercase;

    > span {
      margin-left: 8px;
    }

    &.active {
      background-color: #039B00;
      border: solid 1px #039B00;
    }
  }
`