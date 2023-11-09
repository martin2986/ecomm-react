import Slider from "../components/Slider/Slider";
import ProductsItems from "../components/ProductsItems/ProductsItems";
import FilterProducts from "../components/FIlteredProducts/FilterProducts";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../Util/Http";
const Products = () => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 0,
  });

  const loadData = [];

  for (const key in data) {
    loadData.push({
      id: key,
      title: data[key].title,
      description: data[key].description,
      price: data[key].price,
      img1: data[key].img1,
      img2: data[key].img2,
      isNew: data[key].isNew,
    });
  }
  return (
    <div className="products">
      <div className="left">
        <FilterProducts />
      </div>
      <div className="right">
        <Slider />
        {/*  */}
        <div>
          <ProductsItems data={loadData} />
        </div>
      </div>
    </div>
  );
};

export default Products;
