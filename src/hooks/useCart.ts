import { useContext, useMemo } from 'react'
import { CartContext, CartItem } from 'contexts/Cart'

export function useCart() {
  const [cart, setCart] = useContext(CartContext)

  const quantityOfItemSelected = useMemo(() => cart.length, [cart])

  const totalPrice = useMemo(
    () => cart.reduce((prev, curr) => prev + curr.quantity * curr.price, 0),
    [cart]
  )

  function handleAddToCart(movie: Omit<CartItem, 'quantity'>) {
    setCart((prev) => {
      const itemExist = prev.find((item) => item.id === movie.id)
      if (!itemExist) prev.push({ ...movie, quantity: 1 })
      return [...prev]
    })
  }

  function handleQuantity(action: 'decrease' | 'increase', movieId: string) {
    setCart((prev) => {
      const indexExist = prev.findIndex((item) => item.id === movieId)
      
      if (indexExist >= 0) {
        const updatedCart = [...prev]

        switch (action) {
          case 'increase':
            updatedCart[indexExist] = {
              ...updatedCart[indexExist],
              quantity: updatedCart[indexExist].quantity + 1
            }

            return updatedCart
          case 'decrease':
            if (updatedCart[indexExist].quantity === 0) return updatedCart
          
            updatedCart[indexExist] = {
              ...updatedCart[indexExist],
              quantity: updatedCart[indexExist].quantity - 1
            }

            return updatedCart
          default:
            return prev
        }
      }

      return prev
    })
  }

  return {
    cart,
    totalPrice,
    handleQuantity,
    handleAddToCart,
    quantityOfItemSelected,
  }
}
