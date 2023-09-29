import { StyledFooter } from './styles'
import { BsHouse, BsHeart } from "react-icons/bs";
import { RxGear } from "react-icons/rx";
import { RiShoppingCartLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function Footer({title, path}) {
  const navigate = useNavigate();
  
  return (  
  <StyledFooter>
    <BsHouse onClick={() => navigate('/')}/>
    <BsHeart onClick={() => navigate('/favorites')}/>
    <RiShoppingCartLine onClick={() => navigate('/cart')}/>
    <RxGear onClick={() => navigate('/config')}/>
  </StyledFooter>
    );
}
