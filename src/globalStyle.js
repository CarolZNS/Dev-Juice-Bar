import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Ubuntu', sans-serif;
}
.button{
  border-style: none;
  border-radius: 8px;
  color: #fde3a7;
  background-color: #80595d;
  font-size: 1.2em;
  font-weight: bold;
  width: 100%;
  padding: 0.6em 0;
}
.baseLayout{
  background-image: linear-gradient(#fce2a7, #f6f6f6);
  height: 100vh;
  display: grid;
  grid-template-rows: 56px auto 65px;
  z-index: -1;}
.lightyellow-bg{
  background-color: #f8f1e0;
  height: 100vh;
  display: grid;
  grid-template-rows: 56px auto 65px;
  z-index: -1;
}
`;
