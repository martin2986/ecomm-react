import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import ProductItem from "../components/Products/ProductItem/ProductItem";
import { fetchProductDetail } from "../Util/Http";
import ProductDetailSkeleton from "../components/Skeleton/ProductDetailSkeleton";
import Error from "../components/Error";
const ProductDetail = () => {
  const params = useParams();
  const { id } = params;
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["detail", id],
    queryFn: () => fetchProductDetail(id),
    enabled: id !== undefined,
    staleTime: 15,
  });

  let content;

  if (isError) {
    content = (
      <Error
        message="Ops an error occured"
        text={error?.info.message || "Can't fetch this item, Please try again"}
      />
    );
  }

  if (isLoading) {
    content = (
      <div style={{ textAlign: "center" }}>
        <ProductDetailSkeleton />
      </div>
    );
  }

  if (data) {
    content = <ProductItem {...data} />;
  }

  return <>{content}</>;
};

export default ProductDetail;
