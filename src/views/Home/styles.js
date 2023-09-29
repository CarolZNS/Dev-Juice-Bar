import styled from "styled-components";

export const StyledApp = styled.div`
  background-color: #f6f6f6;
  height: 100vh;
  display: grid;
  grid-template-rows: 56px auto 65px;
`;

export const StyledContent = styled.div`
  height: 100%;
  padding: 30px 10px 16px;
  display: grid;
  grid-template-rows: 40px auto auto;
  gap: 5px;
  overflow: scroll;
`;
