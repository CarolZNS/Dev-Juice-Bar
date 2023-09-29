import * as Css from "./styles";
import { useState } from "react";
import FormControl from "../FormControl";

export default function CreditCardForm() {
  const [creditCard, setCreditCard] = useState({
    cnumber: "",
    cname: "",
    expiredate: "",
    cvvnumber: "",
  });
  function handleCreditCardChange(e) {
    const { name, value } = e.target;
    setCreditCard((prevState) => ({ ...prevState, [name]: value }));
  }

  function pickRandom() {
    let testingCards = [
      "4000056655665556",
      "5200828282828210",
      "6011000990139424",
      "3566002020360505",
      "6200000000000005",
      "6759649826438453",
      "5555555555554444",
      "2222405343248877",
    ];
    const generatedCard =
      testingCards[Math.floor(Math.random() * testingCards.length)];
    return setCreditCard((prevState) => ({
      ...prevState,
      cnumber: generatedCard,
    }));
  }

  return (
    <Css.Body>
      <div>
        <FormControl
          id="cname"
          label="Card Holder Name"
          placeholder="Full name here"
          value={creditCard.cname}
          name="cname"
          onChange={handleCreditCardChange}
          first
        />
        <FormControl
          id="cnumber"
          label="Card Number"
          template="9999 9999 9999 9999"
          placeholder="1234 xxxx xxxx 5678"
          name="cnumber"
          value={creditCard.cnumber}
          onChange={handleCreditCardChange}
          mask
        />
        <Css.Expirecvv>
          <FormControl
            template="99/99"
            id="expiredate"
            placeholder="mm/yy"
            name="expiredate"
            value={creditCard.expiredate}
            onChange={handleCreditCardChange}
            mask
            label="Expire Date"
          />
          <FormControl
            mask
            template="999"
            id="cvvnumber"
            placeholder="123"
            name="cvvnumber"
            value={creditCard.cvvnumber}
            onChange={handleCreditCardChange}
            label="CVV"
          />
        </Css.Expirecvv>
      </div>
      <Css.ButtonContainer>
        <Css.Button onClick={pickRandom}>Generate new card</Css.Button>
        <Css.Button>Save</Css.Button>
      </Css.ButtonContainer>
    </Css.Body>
  );
}
