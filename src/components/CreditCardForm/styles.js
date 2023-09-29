import styled from "styled-components";
import InputMask from "react-input-mask"

export const Expirecvv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`
export const ButtonContainer = styled.div`
display: grid;
row-gap: 15px;
`
export const StyledInputMask = styled(InputMask)`
  border-style: none;
  background-color: transparent;
  border-bottom: solid 1px rgba(0, 0, 0, 0.4);
  font-size: 0.7em;
  padding: 0 0 5px 3px;
  color: #422d2f;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`
export const Button = styled.button`
  border-style: none;
  border-radius: 8px;
  color: #fde3a7;
  background-color: #80595d;
  font-size: 1.3em;
  width: 100%;
  padding: 0.6em 0;
`;
export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6em;
  font-size: 1.5em;
  padding-top: 10px;
`;
export const Input = styled.input`
  border-style: none;
  background-color: transparent;
  border-bottom: solid 1px rgba(0, 0, 0, 0.4);
  font-size: 0.7em;
  padding: 0 0 5px 3px;
  color: #422d2f;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 25px;
  `