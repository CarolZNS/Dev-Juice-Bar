import Header from "../../components/Header";
import Footer from "../../components/Footer";
import * as Css from "./styles";
import { useState } from "react";
import CreditCardForm from "../../components/CreditCardForm";
import { Button } from "../Login/styles";

export default function Profile() {
  const [paymentMethod, setPaymentMethod] = useState();

  return (
    <Css.Page>
      <Header title="Payment Method" returnPage/>
      <Css.Body>
        <h2>Pick your payment method</h2>
        <Css.MethodContainer>
          <Css.RadioContainter>
            <input
              type="radio"
              id="card"
              name="payment"
              value="card"
              checked={paymentMethod === "card"}
              onChange={() => setPaymentMethod("card")}
            />
            <label htmlFor="card">card</label>
          </Css.RadioContainter>
          <Css.RadioContainter>
            <input
              type="radio"
              id="cash"
              name="payment"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={() => setPaymentMethod("cash")}
            />
            <label htmlFor="cash">cash</label>
          </Css.RadioContainter>
        </Css.MethodContainer>
        {paymentMethod === "card" ? <CreditCardForm /> : <Button>Save</Button>}
      </Css.Body>
      <Footer />
    </Css.Page>
  );
}
