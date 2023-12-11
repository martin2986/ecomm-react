import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";
import classes from "./Card.module.scss";
const Card = ({ imageUrl, name: title, price, id }) => {
  const { current } = price;

  return (
    <Link to={id.toString()} className={classes.card}>
      <div className={classes.image}>
        <img src={`https://${imageUrl}`} alt={title} />
      </div>
      <div className="d-flex flex-row justify-content-between align-items-center">
        <h6>{title}</h6>
        <FavoriteBorderOutlinedIcon className={classes.icon} />
      </div>
      <div className={classes.prices}>
        <h3>${current.value}</h3>
      </div>
    </Link>
  );
};

export default Card;
