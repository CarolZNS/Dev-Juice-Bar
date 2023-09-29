import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CartCard from "../../components/CartCard";
import { JuiceData } from "../../components/data/data";
import {
  Page,
  Body,
  CartProducts,
  ShoppingButtons,
  PromoCode,
  SubTotal,
} from "./styledCart";
import CartFooter from "./components/CartFooter";

export default function Cart() {
  const mockCart = { ...JuiceData[4], qtd: 9 };
  return (
    <Page>
      <Header title="My Cart" returnPage />
      <Body>
        <h2>Review your order</h2>
        <CartProducts>
          <CartCard data={mockCart} />
          <CartCard data={mockCart} />
          <CartCard data={mockCart} />
        </CartProducts>
        <ShoppingButtons>
          <button className="blue">Continue shopping</button>
          <button className="red">Empty cart</button>
        </ShoppingButtons>
        <PromoCode>
          <input placeholder="Promo Code"/>
          <button>Apply</button>
        </PromoCode>
        <SubTotal>
          <p>
            Sub Total:
          </p>
          <span>R${mockCart.price * mockCart.qtd * 2},00</span>
        </SubTotal>
      </Body>
      <CartFooter title="Next" path='/confirm'/>
    </Page>
  );
}
