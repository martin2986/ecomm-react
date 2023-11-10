import Slider from "../components/Slider/Slider";
import ProductsItems from "../components/ProductsItems/ProductsItems";
import FilterProducts from "../components/FIlteredProducts/FilterProducts";
import { useSelector } from "react-redux";

const Products = () => {
  const appState = useSelector((state) => state.products.filetedProduct);
  console.log(appState);

  return (
    <div className="products">
      <div className="left">
        <FilterProducts data={appState} />
      </div>
      <div className="right">
        <Slider />
        {/*  */}
        <div>
          <ProductsItems data={appState} />
        </div>
      </div>
    </div>
  );
};

export default Products;
