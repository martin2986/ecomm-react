import { useIsFetching } from "@tanstack/react-query";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterProducts from "../components/FIlteredProducts/FilterProducts";
import Recommended from "../components/FIlteredProducts/Recommended/Recommended";
import ProductsItems from "../components/ProductsItems/ProductsItems";
import Slider from "../components/Slider/Slider";
import LoadingIndicator from "../UI/LoadingIndicator";
const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const appState = useSelector((state) => state.products.products);
  const isPending = useIsFetching({ queryKey: ["asos"] });

  let content;

  if (isPending) {
    content = (
      <div style={{ textAlign: "center" }}>
        <LoadingIndicator />
      </div>
    );
  }

  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filteredData(appState, selected) {
    let filteredProducts = appState;

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ colour, brandName, price, name }) =>
          brandName.includes(selected) ||
          colour === selected ||
          price.current.value.toString() === selected ||
          name === selected
      );
    }

    return filteredProducts;
  }

  const result = filteredData(appState, selectedCategory);

  if (result) {
    content = <ProductsItems sephData={result} />;
  } else if (!result) {
    content = <h3>Currently out of Stock</h3>;
  }

  return (
    <div className="products">
      <div className="left">
        <FilterProducts handleChange={handleChange} />
      </div>

      <div className="right">
        <Slider />
        <Recommended handleClick={handleClick} />
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Products;
