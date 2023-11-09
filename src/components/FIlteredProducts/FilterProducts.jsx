import { useState } from "react";
import classes from "./FilterProducts.module.scss";
const FilterProducts = () => {
  const [maxPrice, setMaxPrice] = useState(0);
  const [sort, setSort] = useState("asc");
  return (
    <>
      <div className={classes.filteredItem}>
        <h2>Product Categories</h2>
        <div className={classes.inputItem}>
          <input type="checkbox" id="item1" value={1} />
          <label htmlFor="item1">Item 1</label>
        </div>
        <div className={classes.inputItem}>
          <input type="checkbox" id="item2" value={1} />
          <label htmlFor="item2">Item 2</label>
        </div>
        <div className={classes.inputItem}>
          <input type="checkbox" id="item3" value={1} />
          <label htmlFor="item3">Item 3</label>
        </div>
      </div>
      <div className={classes.filteredItem}>
        <h2>Filter by price</h2>
        <div className={classes.inputItem}>
          <span>0</span>
          <input
            type="range"
            min={0}
            max={1000}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <span>{maxPrice}</span>
        </div>
      </div>
      <div className={classes.filteredItem}>
        <h2>Sort by</h2>
        <div className={classes.inputItem}>
          <input
            type="radio"
            id="asc"
            value="asc"
            name="price"
            onChange={(e) => setSort("asc")}
          />
          <label htmlFor="asc">price (Lowest Price)</label>
        </div>
        <div className={classes.inputItem}>
          <input
            type="radio"
            id="desc"
            value="desc"
            name="price"
            onChange={(e) => setSort("desc")}
          />
          <label htmlFor="asc">price (Lowest Price)</label>
        </div>
      </div>
    </>
  );
};

export default FilterProducts;
