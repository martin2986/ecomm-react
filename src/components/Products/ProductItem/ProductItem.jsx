import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartAction } from "../../../store/cart";
import SelectSize from "../../FIlteredProducts/SelectSize/SelectSize";
import classes from "./ProductItem.module.scss";

import CartNotification from "../../Cart/CartNotification";

const ProductItem = ({
  media,
  name: title,
  price,
  id,
  description,
  variants,
}) => {
  const { current } = price;
  const { images } = media;
  const [selectedImg, setSelectedImg] = useState(0);
  const [size, setSize] = useState("");
  const [isActive, setIsActive] = useState("");
  const image = images.map((img) => img.url);
  const [amount, setAmount] = useState(1);
  const [showNotification, setShowNotification] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = title;

    return () => {
      document.title = "Ecomm Store";
    };
  }, [title]);

  const sizeHandler = (e) => {
    setSize(e.target.value);
    setIsActive(e.target.value);
  };

  const items = {
    id,
    title,
    price: current.value,
    img1: image[0],
    quantity: amount,
    size,
  };
  const closeCartNotificationHandler = () => {
    setShowNotification((prev) => !prev);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(cartAction.addItem(items));
    setShowNotification(true);
    setAmount(1);
  };
  return (
    <div className={classes.product} id={id}>
      <div className={classes.productLeft}>
        <div className={classes.images}>
          <img
            src={`http://${image[0]}`}
            alt=""
            onClick={(e) => setSelectedImg(0)}
          />
          <img
            src={`http://${image[1]}`}
            alt=""
            onClick={(e) => setSelectedImg(1)}
          />
          <img
            src={`http://${image[2]}`}
            alt=""
            onClick={(e) => setSelectedImg(2)}
          />
        </div>
        <div className={classes.mainImg}>
          <img src={`http://${image[selectedImg]}`} alt={title} />
        </div>
      </div>
      <div className={classes.productRight}>
        {showNotification && (
          <CartNotification
            {...items}
            onHideCart={closeCartNotificationHandler}
          />
        )}
        <h4 className="mb-0 lh-small fw-medium">{title}</h4>
        <span className="fs-5">${current.value}</span>

        <div className={classes.size}>
          <SelectSize
            size={variants}
            onChange={sizeHandler}
            isActive={isActive}
          />
        </div>
        <div className={classes.addItem}>
          <button className={classes.add} onClick={submitHandler}>
            ADD TO CART
          </button>
        </div>
        <div className={classes.item}>
          <Link to="/favourite">
            Favourite <FavoriteBorderIcon className={classes.icon} />
          </Link>
        </div>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
    </div>
  );
};

export default ProductItem;
