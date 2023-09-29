import styled from "styled-components";

export const Page = styled.div`
  background-color: #f8f1e0;
  height: 100vh;
  display: grid;
  grid-template-rows: 56px auto 65px;
  z-index: -1;
`;
export const PageBody = styled.div`
  padding: 30px 16px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  h2 {
    color: #80595d;
    font-weight: 400;
  }
`;
export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 10px;
  overflow: scroll;
`;
