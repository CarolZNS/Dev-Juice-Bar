import styled from "styled-components";

export const CardContainer = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background-image: url(${props => props.bgImg});
  background-size: cover;
  background-color: ${props => props.bgColor};
  background-position: 50% 50%;
  gap: 90px;
  padding: 8px;
  p {
    justify-self: flex-end;
    color: #80595d;
    font-weight: bold;
  }
`;

export const PriceTag = styled.div`
  background-color: #fff;
  border-radius: 16px;
  align-self: flex-end;
  padding: 4px 8px;
  display: flex;
  svg{
    color: #e5543d;
    font-size:1.5em;
  }
`;
