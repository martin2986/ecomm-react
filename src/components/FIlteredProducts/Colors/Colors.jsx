import "./Colors.scss";
import Input from "../../Input/Input";
// import { memo } from "react";

const Colors = ({ handleChange }) => {
  return (
    <>
      <div>
        <h5>Colors</h5>
        <label>
          <input
            style={{ marginRight: "10px", marginBottom: "10px" }}
            onChange={handleChange}
            type="radio"
            value=""
            name="test1"
          />
          <span className="checkmark all"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value="BLUE"
          title="Blue"
          name="test1"
          color="BLUE"
          type="radio"
        />

        <Input
          handleChange={handleChange}
          value="RED"
          title="Red"
          name="test1"
          color="RED"
          type="radio"
        />

        <Input
          handleChange={handleChange}
          value="BROWN"
          title="Brown"
          name="test1"
          color="BROWN"
          type="radio"
        />

        <Input
          handleChange={handleChange}
          type="radio"
          value="Black"
          title="Black"
          name="test1"
          color="Black"
        />

        <label className="sidebar-label-container">
          <input
            style={{ marginRight: "10px" }}
            onChange={handleChange}
            type="radio"
            value="WHITE"
            name="test1"
          />
          <span className="checkmark" style={{ background: "white" }}></span>
          White
        </label>
      </div>
    </>
  );
};

export default Colors;
