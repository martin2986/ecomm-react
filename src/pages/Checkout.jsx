import InputForm from "../components/InputForm/InputForm";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import Payment from "../components/Payment/Payment";
import CartItem from "../components/Cart/CartItem";
import { useSelector } from "react-redux";
import Buttons from "../components/Buttons/Buttons";
const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const vat = 13;
  const total = totalAmount + vat;
  useEffect(() => {
    document.title = "Checkout";

    return () => {
      document.title = "Ecomm Store";
    };
  }, []);
  return (
    <Container>
      <div className="w-100 d-flex flex-column flex-md-row min-vh-100 ">
        <div className="  flex-md-grow-1 my-3">
          <InputForm />
          <Payment />
        </div>

        <div className="flex-grow-1  px-3 vh-100 d-flex flex-column justify-content-between">
          {cartItems.length === 0 && (
            <h5 className="text-center mt-5">Your cart is empty</h5>
          )}
          <div style={{ width: "450px" }} className="mx-auto">
            {cartItems.length > 0 && (
              <>
                <div>
                  {cartItems.map((item) => (
                    <CartItem {...item} key={item.id} />
                  ))}
                </div>
                <div>
                  <h6>VAT: ${vat}</h6>
                  <h6>Total: ${total.toFixed(2)}</h6>
                  <Buttons title="Confirm Order" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
