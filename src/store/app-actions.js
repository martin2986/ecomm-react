import { appAction } from "./app";
import { fetchProducts, queryClient } from "../Util/Http";
export const fetchProductsAction = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const data = await queryClient.fetchQuery({
        queryKey: ["prod"],
        queryFn: fetchProducts,
        staleTime: 0,
      });
      return data;
    };

    try {
      const appData = await fetchData();
      dispatch(appAction.setProducts(appData || []));
    } catch (err) {
      console.error(err);
    }
  };
};
