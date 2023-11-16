import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Error from "./components/Error";
import RootLayout from "./components/Layout/RootLayout";
import CartCheckout from "./pages/CartCheckout";
import Checkout from "./pages/Checkout";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import { fetchProductsAction } from "./store/app-actions";
import { fetchCartData, sendCartData } from "./store/cart-actions";
import Favourite from "./pages/Favourite";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error message="Ops can't find this page" />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      { path: ":id", element: <ProductDetail /> },
      { path: "cart", element: <CartCheckout /> },
      { path: "checkout", element: <Checkout /> },
      { path: "favourite", element: <Favourite /> },
    ],
  },
]);
let initials = true;
function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(fetchProductsAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (initials) {
      initials = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);
  return <RouterProvider router={router} />;
}

export default App;
