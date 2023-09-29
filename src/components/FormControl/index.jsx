import { InfoGroup, Input, Icon } from "../../views/Login/styles";
import { useState } from "react";
import { StyledInputMask } from "../CreditCardForm/styles";

export default function FormControl(props) {
  const [showPassword, setShowPassword] = useState(false);
  if (props.mask) {
    return (
      <InfoGroup>
        <label htmlFor={props.id}>{props.label}</label>
        <StyledInputMask
          mask={props.template}
          id={props.id}
          placeholder={props.placeholder}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
      </InfoGroup>
    );
  }
  if (props.password) {
    return (
      <InfoGroup>
        <Icon onClick={() => setShowPassword(!showPassword)} />
        <label htmlFor={props.id}>{props.label}</label>
        <Input
          placeholder={props.placeholder}
          type={showPassword ? "text" : "password"}
          id={props.id}
          value={props.value}
        />
      </InfoGroup>
    );
  }

  return (
    <>
      <InfoGroup first={props.first}>
        <label htmlFor={props.id}>{props.label}</label>
        <Input
          placeholder={props.placeholder}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          name={props.name}
        />
      </InfoGroup>
    </>
  );
}
