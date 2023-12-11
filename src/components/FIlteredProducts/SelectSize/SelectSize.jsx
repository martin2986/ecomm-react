import classes from "./SelectSize.module.scss";
import Buttons from "../../Buttons/Buttons";

const SelectSize = ({ size, onChange, isActive }) => {
  return (
    <div className={classes.size}>
      <h4>Select Size</h4>
      {size?.map((item) => (
        <Buttons
          key={item.displaySizeText}
          name="btnSize"
          onClickHandler={onChange}
          value={item.displaySizeText}
          title={item.displaySizeText}
          isActive={isActive}
        />
      ))}
    </div>
  );
};

export default SelectSize;
