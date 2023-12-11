import React from "react";
import classes from "./CartSummary.module.scss";
import Buttons from "../Buttons/Buttons";
import LinkButton from "../Buttons/LinkButton";
import { SummaryItem } from "./SummaryItem";
import Input from "../Input/Input";
const CartSummary = ({ totalAmount }) => {
  const delivery = 13;
  const total = totalAmount + delivery;
  return (
    <div className={classes.summary}>
      <SummaryItem title="Order Summary" totalAmount={totalAmount.toFixed(2)} />
      <SummaryItem title="Delivery" totalAmount={delivery} />
      <SummaryItem totalTitle="Total" totalAmount={total.toFixed(2)} />
      <LinkButton to="/checkout" title="GO TO CHECKOUT" />
      <Input
        title=""
        label="Apply discount (Optional)"
        id="discount"
        placeholder="Discount Code"
        type="text"
      />

      <Buttons title="Apply" name="btnSmall" className="btn" />
    </div>
  );
};

export default CartSummary;
