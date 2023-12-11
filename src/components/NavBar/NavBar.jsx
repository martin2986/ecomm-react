import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { appAction } from "../../store/app";
import Cart from "../Cart/Cart";
import LinkItem from "../LinkItem/LinkIcon";
import Search from "../Search/Search";
import classes from "./NavBar.module.scss";
const NavBar = () => {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const location = useLocation();
  const homePage = location.pathname === "/";

  const handleChange = (input) => {
    dispatch(appAction.searchInput(input));
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <>
      <Container>
        <nav className="navbar">
          <h2>
            <Link className={classes.link} to="/">
              Yourstore
            </Link>
          </h2>

          <div className={classes.right}>
            <div className={classes.items}>
              <LinkItem to="/" title="Products" />
            </div>

            <div className={classes.icons}>
              {homePage && <Search handleChange={handleChange} />}
              <LinkItem to="favourite" icon={<FavoriteBorderOutlinedIcon />} />

              <div
                onClick={() => setShowCart(!showCart)}
                className={classes["cart-icon"]}
              >
                <ShoppingCartOutlinedIcon />
                {quantity > 0 && (
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.3 }}
                    key={quantity}
                  >
                    {quantity}
                  </motion.span>
                )}
              </div>
            </div>
          </div>
        </nav>
        {showCart && <Cart onHideCart={hideCartHandler} />}
      </Container>
    </>
  );
};

export default NavBar;
