import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import SideMenu from "../../components/SideMenu";
import SearchBar from "../../components/SearchBar";
import RecipeCard from "../../components/RecipeCard";
import { StyledPage, RecipeList, Body } from "./styles";

export default function Recipes() {
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
      <Header toggle={toggle} title="Recipes" />
      <SideMenu toggle={toggle} isOpen={isOpen} />
      <Body>
        <SearchBar placeholderText="Search Recipe..."></SearchBar>
        <RecipeList>
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </RecipeList>
      </Body>
      <Footer />
    </StyledPage>
  );
}
