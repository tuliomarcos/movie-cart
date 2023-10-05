import { Dispatch, SetStateAction, createContext, useState } from "react";

export interface CartItem {
  id: string
  image: string
  title: string
  price: number
  quantity: number
}

export const CartContext = createContext<[CartItem[], Dispatch<SetStateAction<CartItem[]>>]>([[], () => {}])

export function CartContextProvider(props: React.PropsWithChildren) {
  const [cart, setCart] = useState<CartItem[]>([])
  
  return <CartContext.Provider value={[cart, setCart]}>
    {props.children}
  </CartContext.Provider>
}