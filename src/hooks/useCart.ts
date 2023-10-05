import { useContext, useMemo } from "react";
import { CartContext, CartItem } from "contexts/Cart";

export function useCart() {
  const [cart, setCart] = useContext(CartContext)
  
  const quantityOfItemSelected = useMemo(() => cart.length, [cart]) 

  function handleAddToCart(movie: Omit<CartItem, 'quantity'>) {
    setCart((prev) => {
      const itemExist = prev.find(item => item.id === movie.id)
      if(!itemExist) prev.push({...movie, quantity: 1})
      return [...prev]
    })
  }

  return {
    cart,
    handleAddToCart,
    quantityOfItemSelected,
  }
} 