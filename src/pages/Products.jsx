import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import Error from "../components/Error";
import FilterProducts from "../components/FIlteredProducts/FilterProducts";
import Recommended from "../components/FIlteredProducts/Recommended/Recommended";
import ProductsItems from "../components/Products/ProductsItems/ProductsItems";
import CardSkeleton from "../components/Skeleton/CardSkeleton";
import Slider from "../components/Slider/Slider";
import { filteredData } from "../Util/HelperFn";
import { fetchProducts } from "../Util/Http";
const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const query = useSelector((state) => state.products.search);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 15,
  });

  let content;

  if (isError) {
    <Error
      message="Ops an error occured"
      text={
        error?.info.message || "Can't fetch product items, Please try again"
      }
    />;
  }

  if (isPending) {
    content = <CardSkeleton cards={9} />;
  }

  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const productItems = filteredData(data?.products, selectedCategory, query);
  console.log(productItems);
  if (productItems.length === 0) {
    content = <h3 className=" mt-5 ">Items not available</h3>;
  }

  if (productItems.length > 0) {
    content = <ProductsItems data={productItems} />;
  }

  useEffect(() => {
    document.title = "Products";

    return () => {
      document.title = "Ecomm Store";
    };
  }, []);

  return (
    <Container className="d-flex flex-sm-column flex-md-row gap-1 min-vh-100 mx-auto">
      <div className="d-none d-md-block w-25 ">
        <FilterProducts handleChange={handleChange} />
      </div>
      <div className="w-100 ">
        <Slider />
        <Recommended handleClick={handleClick} />

        <div className="text-center">{content}</div>
      </div>
    </Container>
  );
};

export default Products;
