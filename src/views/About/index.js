import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import SideMenu from "../../components/SideMenu";
import { BodyText } from "./styles";

export default function About() {
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
    <div onClick={close} className="baseLayout">
      <Header toggle={toggle} title="About us" />
      <SideMenu toggle={toggle} isOpen={isOpen} />
      <BodyText>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lectus
          purus, posuere in felis eu, condimentum interdum neque. Fusce eget
          cursus ante, eget ultricies neque. Nunc luctus condimentum erat, ut
          lacinia augue ultricies in. Cras faucibus molestie sapien, eget
          pharetra magna placerat a. Morbi fringilla venenatis arcu a tincidunt.
          Aliquam ultrices massa nec ligula sodales, tempus rutrum arcu
          ultrices. Curabitur eget ornare nunc.
        </p>
        <p>
          Nunc faucibus ac odio et viverra. Mauris ut sollicitudin arcu, eget
          euismod nibh. Aenean sed lectus non risus lacinia tristique faucibus
          ac velit. Quisque dignissim nec felis non dapibus. Sed condimentum
          efficitur condimentum.
        </p>
      </BodyText>
      <Footer />
    </div>
  );
}
