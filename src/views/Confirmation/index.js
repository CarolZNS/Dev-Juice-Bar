import React from "react";
import Header from "../../components/Header";
import CartCard from "../../components/CartCard";
import { JuiceData } from "../../components/data/data";
import * as Styled from "./styledCart";
import CartFooter from "../Cart/components/CartFooter";

export default function Cart() {
  const mockCart = { ...JuiceData[4], qtd: 9 };
  return (
    <Styled.Page>
      <Header title="Confirmation" returnPage />
      <Styled.Body>
        <h2>Order details </h2>
        <Styled.CartProducts>
          <CartCard data={mockCart} />
          <CartCard data={mockCart} />
          <CartCard data={mockCart} />
          <Styled.SubTotal>
            <p>Sub Total:</p>
            <span>R${mockCart.price * mockCart.qtd * 2},00</span>
          </Styled.SubTotal>
        </Styled.CartProducts>
          <Styled.OuterInfo>
            <h2>Delivery info</h2>
            <Styled.InnerInfo>
              <Styled.EditLink to="/profile">Edit</Styled.EditLink>
              <p>Client name</p>
              <p>Address 1</p>
              <p>Complement</p>
              <p>City, Zip</p>
            </Styled.InnerInfo>
          </Styled.OuterInfo>
          <Styled.OuterInfo>
            <h2>Payment info</h2>
            <Styled.InnerInfo>
              <Styled.EditLink to="/editpayment">Edit</Styled.EditLink>
              <p>Card holder</p>
              <p>card number</p>
            </Styled.InnerInfo>
          </Styled.OuterInfo>
      </Styled.Body>
      <CartFooter title="Buy Now" path="/thanks"/>
    </Styled.Page>
  );
}
