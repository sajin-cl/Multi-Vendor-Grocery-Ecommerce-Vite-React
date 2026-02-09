import axios from 'axios';
import { useState, useEffect, createContext, useContext } from 'react'


const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);


  useEffect(() => {
    fetchCart();
  }, []);


  const fetchCart = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/cart", { withCredentials: true });
      setCartItems(res.data);
      setCartCount(res.data.length);
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const addToCart = async (productId, quantity) => {
    try {
      await axios.post('http://localhost:4000/api/cart', { productId, quantity }, { withCredentials: true });
      await fetchCart();
    }
    catch (err) {
      console.error(err);
      throw err;
    }
  };


  const updateCartItem = async (cartItemId, quantity) => {
    try {
      await axios.patch(`http://localhost:4000/api/cart/${cartItemId}`, { quantity }, { withCredentials: true });
      await fetchCart();

    }
    catch (err) {
      console.error(err);
      throw err;
    }
  }


  const removeCartItem = async (cartItemId) => {
    try {

      await axios.delete(`http://localhost:4000/api/cart/${cartItemId}`, { withCredentials: true });
      await fetchCart();
    }
    catch (err) {
      console.error(err);
      throw err;
    }
  };

  return (

    <CartContext.Provider value={{ cartCount, cartItems, addToCart, removeCartItem, updateCartItem }}>
      {children}
    </CartContext.Provider>

  )
};

export const useCart = () => useContext(CartContext);