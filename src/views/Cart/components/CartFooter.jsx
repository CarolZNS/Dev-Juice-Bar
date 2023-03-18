import { StyledFooter } from "../../../components/Footer/styles";
import { StyledLink } from "../styledCart";

export default function CartFooter ({title, path}) {
    return(
        <StyledFooter>
            <StyledLink to={path}>{title}</StyledLink>
        </StyledFooter>
    )   
}