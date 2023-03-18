import styled from "styled-components";
import { HiOutlineMenuAlt4, HiOutlineChevronDoubleLeft } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  background-color: #fde3a7;
  border-radius: 8px 8px 0 0;
  h2 {
    font-weight: bold;
    color: #80595d;
  }
`;
export const Menu = styled(HiOutlineMenuAlt4)`
  font-size: 1.5rem;
  color: #80595d;
`;
export const Profile = styled(CgProfile)`
  font-size: 1.5rem;
  color: #80595d;
`;

export const ReturnBttn = styled(HiOutlineChevronDoubleLeft)`
  font-size: 1.5rem;
  color: #80595d;
`;

//F0596B F5F1E6 DEC8A2 #4f4f4f
