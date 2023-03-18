import styled from "styled-components";

export const Fruit = styled.div`
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  padding: ${(props) => (props.widerPadding ? "6px 12px" : "6px")};
  font-size: 1.23rem;
`;
export const FruitName = styled.p`
  color: #565656;
  font-size: ${(props) => (props.smallText ? "16px" : "inherit")};
`;
export const IconContainer = styled.div`
  color: ${(props) => props.color};
  font-size: 1.98rem;
`;
