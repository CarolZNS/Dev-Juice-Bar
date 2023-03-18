import styled from "styled-components";

export const StyledApp = styled.div`
  background-image: linear-gradient(#fce2a7, #f6f6f6);
  height: 100vh;
  display: grid;
  grid-template-rows: 56px auto 65px;
  z-index: -1;
`;

export const ProductHeader = styled.div`
  background: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  border-radius: 8px 8px 0 0;
  font-size: 1.5rem;
  color: #80595d;
`;

export const StyledProduct = styled.div`

`
export const BuyNow = styled.button`
border: none;
text-decoration: none;
background-color: #fce2a7;
font-size: 2rem;
border-radius: 0 0 16px 16px;
color: #80595d;
padding: 10px 0;
font-weight: bold;
`