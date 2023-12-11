import Input from "../../Input/Input";
import "./Price.scss";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h5 className="sidebar-title price-title">Price</h5>
        <label className="sidebar-label-container">
          <input
            style={{ marginRight: "10px", marginBottom: "10px" }}
            onChange={handleChange}
            type="radio"
            value=""
            name="test2"
          />
          <span className="checkmark"></span>All
        </label>
        <Input
          type="radio"
          handleChange={handleChange}
          value={50}
          title="$0 - 50"
          name="test2"
        />

        <Input
          type="radio"
          handleChange={handleChange}
          value={100}
          title="$50 - $100"
          name="test2"
        />

        <Input
          type="radio"
          handleChange={handleChange}
          value={150}
          title="$100 - $150"
          name="test2"
        />

        <Input
          type="radio"
          handleChange={handleChange}
          value={200}
          title="Over $150"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
