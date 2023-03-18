import styled from "styled-components";

export const Page = styled.div`
  background-image: linear-gradient(#fce2a7, #f6f6f6);
  height: 100vh;
  display: grid;
  grid-template-rows: 56px auto 65px;
`;

export const Body = styled.div`
  padding: 2.5em 0.7em 4em;
  color: #80595d;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1{
    text-align: center;
  }
`
export const InfoGroup = styled.div`
display: flex;
flex-direction: column;
gap: 0.6em;
  font-size: 24px;
`
export const GroupBttn = styled.div`
display: flex;
flex-direction: column;
gap: 2em;
`