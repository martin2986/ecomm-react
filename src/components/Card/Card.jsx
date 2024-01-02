import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";
import classes from "./Card.module.scss";
import { scrollToTop } from "../../Util/HelperFn";
const Card = ({ imageUrl, name: title, price, id }) => {
  const { current } = price;

  return (
    <Link to={id.toString()} onClick={() => scrollToTop()}>
      <div className={classes.card}>
        <div className={classes.image}>
          <img src={`https://${imageUrl}`} alt={title} />
        </div>
        <div className="d-flex flex-row justify-content-between align-items-center">
          <p>{title}</p>
          <FavoriteBorderOutlinedIcon className={classes.icon} />
        </div>
        <div className={classes.prices}>
          <h5>${current.value}</h5>
        </div>
      </div>
    </Link>
  );
};

export default Card;
