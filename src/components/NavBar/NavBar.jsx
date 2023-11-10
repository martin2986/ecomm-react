import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import classes from "./NavBar.module.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
const NavBar = () => {
  const [showCart, setShowCart] = useState(false);
  const quantity = useSelector((state) => state.cart.totalQuantity);

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <div className={classes.navbar}>
      <div className={classes.navWrapper}>
        <div className={classes.left}>
          <div className={classes.item}>
            <Link className={classes.link} href="/">
              Store
            </Link>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.item}>
            <Link className={classes.link} to="products">
              Women
            </Link>
          </div>
          <div className={classes.item}>
            <Link className={classes.link} to="products">
              Kids
            </Link>
          </div>
          <div className={classes.item}>
            <Link className={classes.link} to="products">
              Beauty
            </Link>
          </div>
          <div className={classes.item}>
            <Link className={classes.link} to="products">
              Men
            </Link>
          </div>
          <div className={classes.icons}>
            <SearchIcon />
            <FavoriteBorderOutlinedIcon />
            <div
              onClick={() => setShowCart(!showCart)}
              className={classes["cart-icon"]}
            >
              <ShoppingCartOutlinedIcon />
              {quantity > 0 && <span>{quantity}</span>}
            </div>
          </div>
        </div>
      </div>
      {showCart && <Cart onHideCart={hideCartHandler} />}
    </div>
  );
};

export default NavBar;
