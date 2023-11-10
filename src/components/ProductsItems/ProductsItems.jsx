import Card from "../Card/Card";
import classes from "./ProductsItems.module.scss";
const ProductsItems = ({ data }) => {
  return (
    <div className={classes.list}>
      {data?.map((item) => (
        <Card items={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductsItems;
