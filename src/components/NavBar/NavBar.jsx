import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import classes from "./NavBar.module.scss";
const NavBar = () => {
  const [showCart, setShowCart] = useState(false);

  const toggleCartHandler = () => {
    setShowCart(!showCart);
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
            <Link className={classes.link} href="products">
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
            <div onClick={toggleCartHandler} className={classes["cart-icon"]}>
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
