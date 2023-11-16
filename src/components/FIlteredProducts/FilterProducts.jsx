import classes from "./FilterProducts.module.scss";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
const FilterProducts = ({ handleChange }) => {
  return (
    <>
      <div className={classes.filteredItem}>
        <h2>Product Categories</h2>
        <div className={classes.wrapper}>
          <Colors handleChange={handleChange} />
          <Price handleChange={handleChange} />
        </div>
      </div>
    </>
  );
};

export default FilterProducts;
