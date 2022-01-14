import React from "react";
import "./checkout.css";
import Subtotal from "../components/Subtotal/Subtotal";
import { useStateValue } from "../redux/StateProvider";
import CheckoutProduct from "../components/CheckoutProduct/CheckoutProduct";
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <>
      <div className="checkout">
        <div className="checkout__left">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/7191qk-xnFL.jpg"
            alt="ad-image"
            className="checkout__ad"
          />
          <div>
            <h2 className="checkout__title">Your shopping Basket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </>
  );
}

export default Checkout;
