import { useState } from "react";
import classes from "./ProductItem.module.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SelectSize from "../SelectSize/SelectSize";

const ProductItem = ({ item }) => {
  const { id, title, price, img1, description, img2 } = item;
  const [selectedImg, setSelectedImg] = useState(0);
  const images = [img1, img2];
  const [amount, setAmount] = useState(1);
  const [size, setSize] = useState("S");

  const selectHandler = (e) => {
    setSize(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setAmount(1);
  };
  return (
    <div className={classes.product} id={id}>
      <div className={classes.productLeft}>
        <div className={classes.images}>
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className={classes.mainImg}>
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className={classes.productRight}>
        <h1>{title}</h1>
        <span className={classes.price}> ${price}</span>
        <p>{description}</p>
        <div className={classes.wrapper}>
          <div className={classes.select}>
            <SelectSize size={size} onChange={selectHandler} />
          </div>

          <div className={classes.quantity}>
            <button onClick={() => setAmount((prev) => prev - 1)}>-</button>
            {amount}
            <button onClick={() => setAmount((prev) => prev + 1)}>+</button>
          </div>
        </div>
        <button className={classes.add} onClick={submitHandler}>
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className={classes.links}>
          <div className={classes.item}>
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
