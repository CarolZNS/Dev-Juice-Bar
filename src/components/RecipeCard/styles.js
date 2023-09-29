import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fce2a7;
  border-radius: 16px;
  padding: 1em;
  border: solid 1px #fff;
  gap: 8px;
  b {
    color: #80595d;
    text-transform: uppercase;
    font-size: 1.3em;
  }
`;
export const Ingredients = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: lighter !important;
  gap: 10px;
`;
