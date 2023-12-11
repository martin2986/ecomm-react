import { Link } from "react-router-dom";
import Buttons from "./Buttons";
const LinkButton = ({ to, title, totalAmount }) => {
  return (
    <Link to={to}>
      <Buttons title={title} totalAmount={totalAmount} />
    </Link>
  );
};

export default LinkButton;
