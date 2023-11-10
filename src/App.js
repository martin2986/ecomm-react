import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Layout/RootLayout";
import Error from "./components/Error";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductsAction } from "./store/app-actions";
import { sendCartData, fetchCartData } from "./store/cart-actions";
import CartCheckout from "./pages/CartCheckout";
import Checkout from "./pages/Checkout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error message="Ops can't find this page" />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "products",
        children: [
          { index: true, element: <Products /> },
          { path: ":id", element: <ProductDetail /> },
        ],
      },
      { path: "cart", element: <CartCheckout /> },
      { path: "checkout", element: <Checkout /> },
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
