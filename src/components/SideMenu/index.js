import {
  SideMenuContainer,
  IconContainer,
  Icon,
  SideMenuOptions,
  SideLink,
} from "./styles";
import { useNavigate } from "react-router-dom";

export default function SideMenu({ toggle, isOpen }) {
  const navigate = useNavigate();
  const handleAboutUs = () => {navigate('/about')};
  const handleRecipes = () => {navigate('/recipes')};
  const handleContact = () => {navigate('/contact')};

  return (
    <SideMenuContainer isOpen={isOpen} onClick={toggle}>
      <IconContainer onClick={toggle}>
        <Icon />
      </IconContainer>
      <SideMenuOptions>
        <SideLink onClick={handleAboutUs}>About Us</SideLink>
        <SideLink onClick={handleRecipes}>Recipes</SideLink>
        <SideLink onClick={handleContact}>Contact Us</SideLink>
      </SideMenuOptions>
    </SideMenuContainer>
  );
}
