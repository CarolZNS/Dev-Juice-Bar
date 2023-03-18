import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import SideMenu from "../../components/SideMenu";
import {List, ListItem, StyledPage, Body} from "./styles"

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const close = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };
  return (
    <StyledPage onClick={close}>
      <Header toggle={toggle} title="Contact Us" />
      <SideMenu toggle={toggle} isOpen={isOpen} />
      <Body>
        <p>You can find us at:</p>
        <List>
          <ListItem>+55(00)1928-37465</ListItem>
          <ListItem>JuiceBarDev@dontemail.com</ListItem>
          <ListItem>@JuiceBarDev</ListItem>
          <ListItem>@JuiceBarDev_fb</ListItem>
          <ListItem>1988 SW, Mini Leblon, Disney - Florence</ListItem>
        </List>
      </Body>
      <Footer />
    </StyledPage>
  );
}