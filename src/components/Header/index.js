import * as CSS from "./styles";
import { useNavigate } from "react-router-dom";

export default function Header({ toggle, title, returnPage, path }) {
  const navigate = useNavigate();
  const handleProfileClick = () => {
    navigate('/profile')
  } 
  const handleReturnClick = () => {
    if(!path){
      navigate(-1)
    }
    navigate(path)
  }

  return (
    <CSS.Header>
      {returnPage ? <CSS.ReturnBttn onClick={handleReturnClick} /> : <CSS.Menu onClick={toggle}/>}
      <h2>{title}</h2>
      <CSS.Profile onClick={handleProfileClick}/>
    </CSS.Header>
  );
}
