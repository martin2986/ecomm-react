import Card from "../Card/Card";
import classes from "./ProductsItems.module.scss";
const ProductsItems = ({ data, sephData }) => {
  return (
    <div className={classes.list}>
      {sephData?.map((item) => (
        <Card {...item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductsItems;
