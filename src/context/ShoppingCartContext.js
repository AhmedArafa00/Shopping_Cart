import {createContext, useContext, useState } from "react";

const ShoppingCardContext = createContext({})

const ShoppingCartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])
    const getItemQuantity = (id) => {
      return cartItems.find((item)=> item.id === id)?.quantity || 0;
    }
    const increaseCartQuantity = (id) => {
      setCartItems((currItems) => {
        if (currItems.find((item) => item.id === id) == null) {
          return [...currItems, { id, quantity: 1 }];
        } else {
          return currItems.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity + 1 };
            } else {
              return item;
            }
          });
        }
      });
    };
    const decreaseCartQuantity = (id) => {
      setCartItems((currItems) => {
        if (currItems.find((item) => item.id === id)?.quantity === 1) {
          return currItems.filter((item) => item.id !== id);
        } else {
          return currItems.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return item;
            }
          });
        }
      });
    };
    const removeFromCart = (id) => {
      setCartItems((currItems) => currItems.filter((item) => item.id !== id));
    };
  return (
    <ShoppingCardContext.Provider value={{
      getItemQuantity,
      increaseCartQuantity,
      decreaseCartQuantity,
      removeFromCart,
      cartItems,
    }}>
        {children}
    </ShoppingCardContext.Provider>
  )
}

export default ShoppingCartProvider
export const useShoppingCart  = () => {
return (
    useContext(ShoppingCardContext)
)
}
