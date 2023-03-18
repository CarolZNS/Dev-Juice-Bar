import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-self: flex-end;
  overflow: scroll;
  height: 100%;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  overflow: scroll;
`;
