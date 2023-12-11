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
import { sendCartData } from "./store/cart-actions";
import Favourite from "./pages/Favourite";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error title="Ops can't find this page" />,
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
    if (initials) {
      initials = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);
  return (
    <SkeletonTheme baseColor="#dbdbdc" highlightColor="#f3f3f4">
      <RouterProvider router={router} />
    </SkeletonTheme>
  );
}

export default App;
