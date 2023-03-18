import { Link } from "react-router-dom";
import styled from "styled-components";

export const Page = styled.div`
  background-color: #f6f6f6;
  height: 100vh;
  display: grid;
  grid-template-rows: 56px auto 65px;
`;
export const Body = styled.div`
  padding: 30px 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  overflow: scroll;
  h2 {
    color: #80595d;
    font-weight: 300;
  }
`;
export const CartProducts = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: scroll;
`;

export const ShoppingButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 5px;
  button {
    font-size: 1em;
    font-weight: 200;
    border-style: none;
    background-color: transparent;
  }
  .blue{
    color: #528ec6;
  }
  .red{
    color: red;
  }
`;
export const PromoCode = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color: #fff;
border-radius: 8px;
padding-right: 24px;
width: 100%;
  input {
    border-style: none;
    text-decoration: none;
    border-radius: 8px;
    font-size: 1.3em;
    padding: 26px 0 26px 24px;
    &::placeholder {
      color: #9f9f9f;
      opacity: 0.5;
    }
  }
  button{
    border-style: none;
    text-decoration: none;
    background-color: #80595d;
    color: #fce2a7;
    padding: 9px 21px;
    border-radius: 8px;
    font-size: 1.3em;
  }
`;
export const SubTotal = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
padding: 0 5px;
font-weight: 200;
font-size: 1.5em;
`;

export const StyledLink = styled(Link)`
flex-grow: 1;
text-align: center;
&:any-link{
  color:#80595d;
  text-decoration: none;
}
`