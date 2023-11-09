import ProductItem from "../components/ProductItem/ProductItem";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../Util/Http";
import LoadingIndicator from "../UI/LoadingIndicator";
const ProductDetail = () => {
  const params = useParams();
  const { id } = params;

  const { data, isLoading } = useQuery({
    queryKey: ["products", id],
    queryFn: ({ signal }) => fetchProduct({ id, signal }),
    enabled: id !== undefined,
  });

  let content;

  if (isLoading) {
    content = (
      <div style={{ textAlign: "center" }}>
        <LoadingIndicator />
      </div>
    );
  }

  if (data) {
    content = <ProductItem item={data} />;
  }
  return <>{content}</>;
};

export default ProductDetail;
