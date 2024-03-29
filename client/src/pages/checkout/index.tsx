import { useContext } from "react";
import { useGetProducts } from "../../hooks/useGetProducts";
import { IProduct } from "../../models/interfaces";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export const CheckoutPage = () => {
  const { getCartItemCount, getTotalCartAmount, checkout } =
    useContext(ShopContext);
  const { products } = useGetProducts();

  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <section className="cart-banner"></section>
      <div className="cart-page">
        <div>
          <h1>Shopping Cart</h1>
        </div>
        <div className="cart-page">
          {products.map((product: IProduct) => {
            if (getCartItemCount(product._id) !== 0) {
              return <CartItem key={product._id} product={product} />;
            }
          })}
        </div>

        {totalAmount > 0 ? (
          <div className="checkout">
            <p>Subtotal: ${totalAmount.toFixed(2)}</p>
            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button
              onClick={() => {
                checkout(localStorage.getItem("userID"));
              }}
            >
              Checkout
            </button>
          </div>
        ) : (
          <h2>Your Shopping Cart is Empty</h2>
        )}
      </div>
    </div>
  );
};
