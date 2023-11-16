import classes from "./SelectSize.module.scss";
import Buttons from "../Buttons/Buttons";
const SelectSize = ({ size, onChange }) => {
  const allSize = [
    "EU 38.5",
    "EU 39",
    "EU 40",
    "EU 40.5",
    "EU 38.5",
    "EU 39",
    "EU 40",
    "EU 40.5",
  ];
  return (
    <div className={classes.size}>
      <h4>Select Size</h4>
      {allSize.map((item) => (
        <Buttons
          name="btnSmall"
          onClickHandler={onChange}
          value={item}
          id={item}
          title={item}
        />
      ))}
    </div>
  );
};

export default SelectSize;
