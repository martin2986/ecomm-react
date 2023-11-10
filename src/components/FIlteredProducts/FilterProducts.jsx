import classes from "./FilterProducts.module.scss";
import Input from "../Input/Input";
import { useDispatch } from "react-redux";
import { appAction } from "../../store/app";
const FilterProducts = () => {
  const dispatch = useDispatch();

  const radioChange = (e) => {
    dispatch(appAction.filteredProduct(e.target.value));
  };
  return (
    <>
      <div className={classes.filteredItem}>
        <h2>Product Categories</h2>
        <Input
          type="radio"
          label="All"
          id="all"
          value="all"
          name="list"
          handleChange={radioChange}
        />
        <Input
          type="radio"
          label="Shoes"
          id="item2"
          value="shoes"
          name="list"
          handleChange={radioChange}
        />
        <Input
          type="radio"
          label="Jeans"
          id="jeans"
          value="jeans"
          name="list"
          handleChange={radioChange}
        />
        <Input
          type="radio"
          label="Tops"
          id="item4"
          value="tops"
          name="list"
          handleChange={radioChange}
        />
      </div>
    </>
  );
};

export default FilterProducts;
