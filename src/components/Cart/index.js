import { CartContext } from "../CartContext";
import Header from "../Header";
import "./index.css";
import { useContext } from "react";
const Cart = () => {
  const { cartItems, updateCount } = useContext(CartContext);

  return (
    <>
      <div>
        <div>
          <Header />
        </div>
        <div>
          {cartItems.map((each) => (
            <div>
              <img src={each.imgurl} alt="cartImg" />
              <p>{each.name}</p>
              <div className="update">
                <div>
                  <button onClick={() => updateCount(each.id, -1, each.count)}>
                    -
                  </button>
                </div>
                <div>
                  <button>{each.count}</button>
                </div>
                <div>
                  <button onClick={() => updateCount(each.id, +1, each.count)}>
                    +
                  </button>
                </div>
              </div>
              <p>
                price:{each.price}*{each.count}=={each.price * each.count}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Cart;
