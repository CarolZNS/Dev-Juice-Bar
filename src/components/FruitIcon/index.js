import { Fruit, IconContainer, FruitName } from "./styles";

export default function FruitIcon(props) {
  const Icon = props.data.icon;
  const iconDisplay = props.iconDisplay;
  return (
    <Fruit widerPadding={props.widerPadding}>
      {/* <Icon color={props.data.color} icon={props.data.icon}/> */}
      <IconContainer color={props.data.color}>
        {iconDisplay ? <Icon /> : null}
      </IconContainer>
      <FruitName smallText={props.smallText}>{props.data.name}</FruitName>
    </Fruit>
  );
}
