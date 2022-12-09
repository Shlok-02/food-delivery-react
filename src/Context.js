import { createContext, useContext, useState } from "react";

const Cart = createContext();

const Context = ({ children }) => {
    const [cart, setCart] = useState([]);
    const[subTotal,setSubTotal]=useState(0)

       return (
      <Cart.Provider value={{ cart, setCart,subTotal,setSubTotal }}>
        {children}
      </Cart.Provider>
    );
  };
  
  export const CartState = () => {
    return useContext(Cart);
  };
  
  export default Context;