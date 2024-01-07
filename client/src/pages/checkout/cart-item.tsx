import { useContext } from "react";
import { IProduct } from "../../models/interfaces";
import { ShopContext } from "../../context/shop-context";

interface Props {
  product: IProduct;
}

export const CartItem = (props: Props) => {
  const { _id, productName, description, price, stockQuantity, imageURL } =
    props.product;
  const { addToCart, removeFromCart, updateCartItemCount, getCartItemCount } =
    useContext(ShopContext);

  const cartItemCount = getCartItemCount(_id);

  return (
    <div className="cart-item">
      <img src={imageURL} alt={productName} />
      <div className="description">
        <h3>{productName}</h3>
        <p>Price: ${price}</p>
      </div>
      <div className="count-handler">
        <button onClick={() => addToCart(_id)}> + </button>
        <input
          value={cartItemCount}
          onChange={(e) => updateCartItemCount(Number(e.target.value), _id)}
        />
        <button onClick={() => removeFromCart(_id)}> - </button>
      </div>
    </div>
  );
};
