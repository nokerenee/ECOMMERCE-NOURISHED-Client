import { useContext } from "react";
import { IProduct } from "../../models/interfaces";
import { IShopContext, ShopContext } from "../../context/shop-context";
import "./styles.css";

interface Props {
  product: IProduct;
}

export const Product = (props: Props) => {
  const { _id, productName, description, price, stockQuantity, imageURL } =
    props.product;

  const { addToCart, getCartItemCount } = useContext<IShopContext>(ShopContext);

  const cartItemCount = getCartItemCount(_id);

  return (
    <div className="product">
      <img src={imageURL} alt={productName} />
      <div className="description">
        <h3>{productName}</h3>
        <p>{description}</p>
        <p>${price}</p>
      </div>
      <button className="add-to-cart-bttn" onClick={() => addToCart(_id)}>
        Add To Cart {cartItemCount > 0 && <>({cartItemCount})</>}
      </button>
      <div className="stock-quantity">
        {stockQuantity === 0 && <h2>OUT OF STOCK</h2>}
      </div>
    </div>
  );
};
