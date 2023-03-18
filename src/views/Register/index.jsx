import { Body } from "../Login/styles";
import RegisterPageOne from "./components/RegisterPageOne";
import RegisterPageTwo from "./components/RegisterPageTwo";
import { useState } from "react";
import RegisterFooter from "./components/RegisterFooter";
import RegisterHeader from "./components/RegisterHeader";

export default function Register() {
  const [secondPage, setSecondPage] = useState(false);
  if(secondPage){
    return(
      <div className="baseLayout">
      <RegisterHeader setSecondPage={setSecondPage} secondPage={secondPage}/>
      <Body>
        <RegisterPageTwo />
      </Body>
      <RegisterFooter title="Confirm"  setSecondPage={setSecondPage} secondPage={secondPage}/>
    </div>
    )
  }

  return (
    <div className="baseLayout">
      <RegisterHeader tile="Sign up"/>
      <Body>
        <RegisterPageOne />
      </Body>
      <RegisterFooter title="Next" setSecondPage={setSecondPage} secondPage={secondPage}/>
    </div>
  );
}
