import React, { useEffect } from "react";
import CartItem from "../components/Cart/CartItem";
import CartSummary from "../components/Cart/CartSummary";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
const CartCheckout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const isItems = cartItems.length > 0;

  useEffect(() => {
    document.title = "Cart";

    return () => {
      document.title = "Ecomm Store";
    };
  }, []);

  return (
    <Container className="vh-100">
      {!isItems && <h2 style={{ textAlign: "center" }}>Your Cart is Empty</h2>}
      {isItems && (
        <div className="d-flex flex-column flex-md-row gap-5 justify-content-between w-100 mx-auto">
          <div className="mx-auto">
            {cartItems.map((item) => (
              <CartItem {...item} key={item.id} />
            ))}
          </div>
          <div className="mx-auto">
            <CartSummary totalAmount={totalAmount} />
          </div>
        </div>
      )}
    </Container>
  );
};

export default CartCheckout;
