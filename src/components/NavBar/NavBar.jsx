import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import classes from "./NavBar.module.scss";
const NavBar = () => {
  const [showCart, setShowCart] = useState(false);
  const quantity = useSelector((state) => state.cart.totalQuantity);

  const navRef = useRef();

  const hideCartHandler = () => {
    setShowCart(false);
  };
  return (
    <>
      <nav className={classes.navbar}>
        <h2>
          <Link className={classes.link} to="/">
            Yourstore
          </Link>
        </h2>

        <div ref={navRef} className={classes.right}>
          <div className={classes.items}>
            <Link className={classes.link} to="/">
              Products
            </Link>
          </div>

          <div className={classes.icons}>
            <form>
              <input type="search" required />
              <SearchIcon className=" searchIcon" />
            </form>
            <Link to="favourite">
              <FavoriteBorderOutlinedIcon />
            </Link>

            <div
              onClick={() => setShowCart(!showCart)}
              className={classes["cart-icon"]}
            >
              <ShoppingCartOutlinedIcon />
              {quantity > 0 && <span>{quantity}</span>}
            </div>
          </div>
        </div>
      </nav>
      {showCart && <Cart onHideCart={hideCartHandler} />}
    </>
  );
};

export default NavBar;
