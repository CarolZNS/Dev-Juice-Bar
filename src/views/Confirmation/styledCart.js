import styled from "styled-components";
import { Link } from "react-router-dom";

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
`;
export const SubTotal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0 5px;
  font-weight: 400;
  font-size: 1em;
`;
export const BottomInfo = styled.div``;
export const OuterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
`;
export const InnerInfo = styled.div`
  background-color: #fff;
  width: 100%;
  border-radius: 8px;
  padding: 10px;
  line-height: 1.4;
  font-weight: 100;
`;
export const EditLink = styled(Link)`
  border-style: none;
  text-decoration: none;
  float: right;
  background-color: transparent;
  &:any-link {
    color: #528ec6;
  }
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1{
    color: #80595d;
    text-align:center;
    justify-self: center;
  }
`;
