import { useState } from "react";
import { StyledApp, StyledContent } from "./styles";
import Header from "../../components/Header";
import NavFruit from "../../components/NavFruit";
import SearchBar from "../../components/SearchBar";
import Products from "./components/Products";
import Footer from "../../components/Footer";
import SideMenu from "../../components/SideMenu";
import { useNavigate } from "react-router-dom";

function Home() {
  //Left sidemenu open or close
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () =>{
    setIsOpen(!isOpen);
  }
  const close = () =>{
    if(isOpen){
      setIsOpen(false);
    }
  }
  const navigate = useNavigate();
  const handleProductClick = (id) => {
    navigate(`product/${id}`);
  };

  return (
    <StyledApp onClick={close}>
      <Header toggle={toggle} title="DevBar"/>
      <SideMenu toggle={toggle} isOpen={isOpen} />
      <StyledContent>
        <SearchBar placeholderText="Search juice..."/>
        <NavFruit iconDisplay/>
        <Products onClick={handleProductClick}/>
      </StyledContent>
      <Footer />
    </StyledApp>
  );
}

export default Home;

// about <a href="https://www.vecteezy.com/free-vector/juice-box">Juice Box Vectors by Vecteezy</a>
