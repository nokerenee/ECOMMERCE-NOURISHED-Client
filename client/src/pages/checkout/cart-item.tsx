import { IProduct } from "../../models/interfaces";

interface Props {
  product: IProduct;
}

export const CartItem = (props: Props) => {
  const { _id, imageURL, productName, price } = props.product;
  return (
    <div className="cart-item">
      <img src={imageURL} />
      <div className="description">
        <h3>{productName}</h3>
        <p>Price: {price}</p>
      </div>
    </div>
  );
};
