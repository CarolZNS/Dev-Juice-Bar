import { CardContainer, PriceTag } from "./styles";
import {IoHeartDislikeOutline} from 'react-icons/io5'
import { useNavigate } from "react-router-dom";

export default function MiniCard(props) {
  const navigate = useNavigate();

  return (
    <CardContainer
      bgImg={props.data.image}
      bgColor={props.data.colortheme}
      onClick={()=>navigate(props.data.id)}
    >
      <PriceTag>{props.deleteX ? <IoHeartDislikeOutline /> : `R$${props.data.price},00`}</PriceTag>
      <p>{props.data.name}</p>
    </CardContainer>
  );
}
