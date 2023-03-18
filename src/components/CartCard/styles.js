import styled from "styled-components";
import { BsTrashFill } from "react-icons/bs";

export const CardContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 9px;
  border-radius: 8px;
  gap: 11px;
  img {
    height: 108px;
    width: 108px;
    background-color: ${(props) => props.bgColor};
    border-radius: 8px;
  }
`;
export const ItemInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PriceQtd = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const QtdTrash = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  button {
    border-style: none;
    text-decoration: none;
    background-color: transparent;
    font-size:1.2em;
    padding: 0 4px;
  }
  input {
    padding: 3px 2px;
    text-decoration: none;
    border: none;
    text-align: center;
    width: 30px;
  }
`;

export const Trash = styled(BsTrashFill)`
  font-size: 1rem;
  color: #d53546;
`;
