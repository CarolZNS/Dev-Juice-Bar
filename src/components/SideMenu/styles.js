import styled from "styled-components";
// import { Link } from "react-router-dom";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";

export const SideMenuContainer = styled.aside`
  position: fixed;
  z-index: 999;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(2,1fr);
  background-color: #fde3a7;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};
  align-items: center;
  transition: 0.6s ease-out;
  width: 60%;
  padding: 0 16px;
`;

export const IconContainer = styled.div`
  position: absolute;
  background: transparent;
  border: none;
  top: 1.2rem;
  right: 1.5rem;
  cursor: pointer;
  outline: none;
`;

export const Icon = styled(HiOutlineChevronDoubleLeft)`
  font-size: 1.5rem;
  color: #80595d;
`;

export const SideMenuOptions = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const SideLink = styled.p`
  text-decoration: none;
  cursor: pointer;
  color: #80595d;
  font-size: 1.5rem;
  &:hover {
    color: #999;
    transition: 0.2s ease-in-out;
  }
`;
