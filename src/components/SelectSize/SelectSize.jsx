import classes from "./SelectSize.module.scss";

const SelectSize = (props) => {
  return (
    <div className={classes.select}>
      <form>
        <select name="size" value={props.size} onChange={props.onChange}>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </form>
    </div>
  );
};

export default SelectSize;
