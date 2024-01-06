import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { IShopContext, ShopContext } from "../context/shop-context";

export const Navbar = () => {
  const {
    isAuthenticated,
    setIsAuthenticated,
    getTotalCartAmount,
  } = useContext<IShopContext>(ShopContext);
  const logout = () => {
    setIsAuthenticated(false);
  };

  const subtotalAmount = getTotalCartAmount();

  return (
    <div className="navbar">
      <div className="navbar-title">
        <h1>Nourished.</h1>
      </div>

      <div className="navbar-links">
        {isAuthenticated && (
          <>
            <Link to="/">Shop</Link>
            <Link to="/purchased-items">Purchases</Link>
            <Link to="/checkout">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
            <span>${subtotalAmount.toFixed(2)}</span>
            <Link to="/auth" onClick={logout}>
              <FontAwesomeIcon icon={faRightFromBracket} />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
