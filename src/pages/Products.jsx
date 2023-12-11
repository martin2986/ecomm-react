import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FilterProducts from "../components/FIlteredProducts/FilterProducts";
import Recommended from "../components/FIlteredProducts/Recommended/Recommended";
import ProductsItems from "../components/Products/ProductsItems/ProductsItems";
import Slider from "../components/Slider/Slider";
import { Container } from "react-bootstrap";
import { filteredData } from "../Util/HelperFn";
import CardSkeleton from "../components/Skeleton/CardSkeleton";
import { fetchProducts } from "../Util/Http";
import Error from "../components/Error";
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

  if (productItems) {
    content = <ProductsItems data={productItems} />;
  }

  useEffect(() => {
    document.title = "Products";

    return () => {
      document.title = "Ecomm Store";
    };
  }, []);

  return (
    <Container className="d-flex flex-sm-column flex-md-row gap-1 w-100 mx-auto">
      <div className="d-none d-md-block w-25">
        <FilterProducts handleChange={handleChange} />
      </div>
      <div className="w-100 ">
        <Slider />
        <Recommended handleClick={handleClick} />

        <div>{content}</div>
      </div>
    </Container>
  );
};

export default Products;
