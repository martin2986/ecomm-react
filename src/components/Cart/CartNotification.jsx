import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import classes from "./CartNotification.module.scss";
import LinkButton from "../Buttons/LinkButton";
import Modal from "../../UI/Modal";
import { CiCircleCheck } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
const CartNotification = ({ id, title, img1, price, size, onHideCart }) => {
  const totalAmount = useSelector((state) => state.cart.totalQuantity);

  return (
    <Modal onHideCart={onHideCart}>
      <div className={classes.notification}>
        <div className={classes.top}>
          <h5>
            <CiCircleCheck className={classes.checked} /> Added to Bag
          </h5>
          <IoCloseOutline onClick={onHideCart} className={classes.close} />
        </div>

        <CartItem title={title} id={id} img1={img1} price={price} size={size} />

        <div className={classes.cartBtn}>
          <LinkButton to="/cart" title="View bag" totalAmount={totalAmount} />
          <LinkButton to="/checkout" title="Checkout" />
        </div>
      </div>
    </Modal>
  );
};

export default CartNotification;
