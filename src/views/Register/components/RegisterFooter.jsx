import { StyledFooter } from "../../../components/Footer/styles";
import { useNavigate } from "react-router-dom";

export default function RegisterFooter({ title, setSecondPage, secondPage }) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (secondPage) {
      navigate("/login");
    }
    setSecondPage(true);
  };
  return (
    <StyledFooter onClick={handleClick}>
      <h3>{title}</h3>
    </StyledFooter>
  );
}
