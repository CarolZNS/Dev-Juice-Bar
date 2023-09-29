import styled from "styled-components";
import { Link } from "react-router-dom";

export const Page = styled.div`
  background-image: linear-gradient(#fce2a7, #f6f6f6);
  height: 100vh;
  display: grid;
  grid-template-rows: 56px auto 65px;
`;

export const Body = styled.div`
  padding: 30px 16px;
  color: #80595d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.3em;
  font-weight: 400;
  &:any-link {
    color: #528ec6;
  }
`;

export const Button = styled.button`
  border-style: none;
  border-radius: 8px;
  color: #fde3a7;
  background-color: #80595d;
  font-size: 1.5em;
  width: 100%;
  padding: 0.6em 0;
  margin-top:10px;
`;
