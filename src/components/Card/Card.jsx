import { Link } from "react-router-dom";
import classes from "./Card.module.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
const Card = ({ items }) => {
  return (
    <Link className={classes.link} to={items.id}>
      <div className={classes.card}>
        <div className={classes.image}>
          {items.isNew && <span>New Season</span>}
          <img src={items?.img1} alt="mainImg" />
        </div>
        <div className={classes.title}>
          <h2>{items.title}</h2>
          <FavoriteBorderOutlinedIcon className={classes.icon} />
        </div>
        <div className={classes.price}>
          <h3>${items.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
