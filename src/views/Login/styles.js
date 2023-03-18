import styled from "styled-components";
import { VscEye } from "react-icons/vsc";

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
  justify-content: flex-start;
  gap: 25px;
  h1 {
    font-weight: 400;
  }
`;
export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6em;
  font-size: 1.5em;
  padding-top: ${(props) => (props.first ? "0" : "16px")};
  position:relative;
`;
export const Input = styled.input`
  border-style: none;
  background-color: transparent;
  border-bottom: solid 1px rgba(0, 0, 0, 0.4);
  font-size: 0.7em;
  padding-bottom: 5px;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;
export const CreateAccLink = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  word-spacing: 3px;
  font-size: 1.2em;
  a {
    text-decoration: none;
    color: #528ec6;
    &:any-link {
      color: #528ec6;
    }
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
  margin-block: 35px;
`;
export const Icon = styled(VscEye)`
  position: absolute;
  left: 351px;
  bottom: 3px;
`;
