import styled from "styled-components";

export const StyledPage = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 56px auto 65px;
  z-index: -1;
  background-color: #f8f1e0;
`;

export const Body = styled.div`
  padding: 30px 10px 16px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  overflow: scroll;
`;

export const RecipeList = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  flex-grow: 1;
  gap: 16px;
`;
