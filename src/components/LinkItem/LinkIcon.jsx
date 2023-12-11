import { Link } from "react-router-dom";

const LinkItem = ({ to, title, icon }) => {
  return <Link to={to}>{title || icon}</Link>;
};

export default LinkItem;
