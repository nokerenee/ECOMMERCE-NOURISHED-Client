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
      <img
        src="https://www.naturemade.com/cdn/shop/articles/healthy-foods-to-eat_960x.jpg?v=1611988563"
        alt="Healthy Foods"
        className="shop-image"
      />
      <div className="products">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};
