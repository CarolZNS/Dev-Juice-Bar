import styled from "styled-components";

export const CardContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 300px auto;
  font-family: "Quicksand", sans-serif;
`;

export const TopPart = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;

export const BottomInfo = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  gap: 10px;
  padding: 18px;
  font-size: 1.5rem;
  h2 {
    text-transform: uppercase;
    color: #80595d;
  }
  .ingredients {
    font-weight: 300;
    display: flex;
    gap: 10px;
    overflow-x: scroll;
    span {
      background-color: #fff;
      border-radius: 16px;
      padding: 4px 16px;
      text-transform: capitalize;
    }
  }
  .desc {
    font-weight: 300;
    text-align: justify;
    line-height: 1.5;
  }
`;

export const PriceTag = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  align-items: center;

  .quantity {
    flex-grow: 1;
    display: flex;
    align-items: center;
    background-color: #fce2a7;
    border-radius: 16px;
    button {
      border: none;
      padding: 16px;
      font-size: 2rem;
      background-color: #fce2a7;
      border-radius: 16px;
      color: #80595d;
      &:disabled{
        color: #bfaaac;
      }
    }
    input[type="number"] {
      flex-grow: 1;
      font-size: 1.6rem;
      padding: 3px;
      text-decoration: none;
      border: none;
      text-align: center;
      background-color: #fce2a7;
      color: #80595d;
    }
  }
`;
