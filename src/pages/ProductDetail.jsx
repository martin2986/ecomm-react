import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import ProductItem from "../components/ProductItem/ProductItem";
import LoadingIndicator from "../UI/LoadingIndicator";
import { fetchAsosProduct } from "../Util/Http";
const ProductDetail = () => {
  const params = useParams();
  const { id } = params;

  const { data, isLoading } = useQuery({
    queryKey: ["asos", id],
    queryFn: () => fetchAsosProduct(id),
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
    content = <ProductItem {...data} />;
  }
  return <>{content}</>;
};

export default ProductDetail;
