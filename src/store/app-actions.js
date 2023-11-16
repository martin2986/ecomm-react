import { appAction } from "./app";
import { fetchAsos, queryClient } from "../Util/Http";
export const fetchProductsAction = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const data = await queryClient.fetchQuery({
        queryKey: ["asos"],
        queryFn: fetchAsos,
        staleTime: 0,
      });
      return data;
    };

    try {
      const appData = await fetchData();
      dispatch(appAction.setProducts(appData.products || []));
    } catch (err) {
      console.error(err);
    }
  };
};
