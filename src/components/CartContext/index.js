import { createContext, useState } from "react";
export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  const [items, Uitems] = useState([
    {
      id: 1,
      name: "apple",
      imgurl:
        "https://tse3.mm.bing.net/th?id=OIP.DYs6-8iT1mpNgUolx4BCLgHaHn&pid=Api&P=0&h=180",
      count: 0,
      price: 40,
    },
    {
      id: 2,
      name: "orange",
      imgurl:
        "https://tse2.mm.bing.net/th?id=OIP.kbQpRu_UcxvT9SuBVquXMQHaHI&pid=Api&P=0&h=180",
      count: 0,
      price: 50,
    },
    {
      id: 3,
      name: "banana",
      imgurl:
        "https://tse2.mm.bing.net/th?id=OIP.dsu7SZi1uUOsJmZnVHClWgHaEK&pid=Api&P=0&h=180",
      count: 0,
      price: 60,
    },
    {
      id: 4,
      imgurl:
        "https://tse2.mm.bing.net/th?id=OIP.d2yfEY0Rc_Kql-1zV3iZyQHaHa&pid=Api&P=0&h=180",
      count: 0,
      price: 50,
    },
  ]);
  const updateCount = (id, sign, count) => {
    if (count >= 0) {
      Uitems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, count: item.count + sign } : item
        )
      );
    }
  };
  const cartItems = items.filter((item) => item.count > 0);
  return (
    <CartContext.Provider value={{ items, updateCount, cartItems }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
