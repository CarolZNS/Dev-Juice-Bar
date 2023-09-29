import styled from "styled-components";
import { CiSearch } from "react-icons/ci";

export const SearchInput = styled.div`
  background-color: #f9f9f9;
  border: solid 2px #fff;
  border-radius: 16px;
  color: #4f4f4f;
  display: flex;
  align-items: center;
  padding-left: 4px;
  input {
    font-size: 1.16em;
    padding: 10px 0 10px 12px;
    text-decoration: none;
    border-style: none;
    background-color: transparent;
    width:100%;
    color: #565656;
    &::placeholder{
      color: #9f9f9f;
      opacity: 0.5;
    }
  }
`;

export const Lens = styled(CiSearch)`
  font-size: 1.5rem;
  color: #4f4f4f;
`;
