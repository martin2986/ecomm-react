import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartAction } from "../../store/cart";
import SelectSize from "../SelectSize/SelectSize";
import classes from "./ProductItem.module.scss";
const ProductItem = ({ media, name: title, price, id, description }) => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [size, setSize] = useState("");
  const { current } = price;
  const newPrice = current.text;
  const { images } = media;
  const image = images.map((img) => img.url);
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();

  const sizeHandler = (e) => {
    setSize(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      cartAction.addItem({
        id,
        title,
        price: current.value,
        img1: image[0],
        quantity: amount,
        size,
      })
    );
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
        <h1>{title}</h1>
        <span className={classes.price}>{newPrice}</span>

        <div className={classes.size}>
          <SelectSize onChange={sizeHandler} />
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
