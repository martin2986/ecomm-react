import { Link } from "react-router-dom";
import classes from "./Card.module.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
const Card = ({ imageUrl: img, name: title, price, id, productCode }) => {
  const { current } = price;
  const newPrice = current.value;
  return (
    <Link className={classes.link} to={id.toString()}>
      <div className={classes.card}>
        <div className={classes.image}>
          <img src={`https://${img}`} alt="mainImg" />
        </div>
        <div className={classes.title}>
          <h2>{title}</h2>
          <FavoriteBorderOutlinedIcon className={classes.icon} />
        </div>
        <div className={classes.prices}>
          <h3>${newPrice}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
