import { useContext } from "react";
import { useGetProducts } from "../../hooks/useGetProducts";
import { Product } from "./product";
import "./styles.css";
import { IShopContext, ShopContext } from "../../context/shop-context";
import { Navigate } from "react-router-dom";

export const ShopPage = () => {
  const { products } = useGetProducts();
  const { isAuthenticated } = useContext<IShopContext>(ShopContext);

  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  }

  return (
    <div className="shop">
      <section className="welcome-banner">
        <div className="translucent-container">
          <div className="welcome-text">
            <h1>Welcome to Nourished</h1>
            <p>Your Culinary Haven for Fresh, Healthy, Homemade Delights!</p>
            {/* <a href="#menu" className="explore-button">
            Explore Our Menu
          </a> */}
          </div>
        </div>
      </section>
      <div className="menu-title">
        <h2>Menu</h2>
      </div>
      <div className="products">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};
