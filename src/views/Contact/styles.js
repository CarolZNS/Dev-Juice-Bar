import styled from "styled-components";

export const StyledPage = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 56px auto 65px;
  z-index: -1;
  background-color: #f8f1e0;
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  color: #51383b;
  justify-content: space-evenly;
  align-items: center;
  p {
    font-size: 1.2em;
  }
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  text-align: center;
  list-style: none;
  gap: 4em;
`;
export const ListItem = styled.li`
  background-color: #f7d9c4;
  padding: 1em 1.2em;
  border-radius: 8px;
  border: solid 1px #fff;
`;
