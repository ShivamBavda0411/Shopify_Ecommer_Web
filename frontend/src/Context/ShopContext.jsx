import React, {createContext, useState} from "react";
import all_product from "../assets/all_product";
import CartItems from "../Components/CartItems/CartItems";

export const ShopContext = createContext(null);
const getDefaultCart = () =>{
    let cart = {};
    for (const product of all_product) {
        cart[product.id] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) =>{
    const [cartItems,setCartItems] = useState(getDefaultCart())
    

    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:(prev[itemId] || 0)+1}));
        console.log(cartItems);
    }
  
        const removeFromCart = (itemId) =>{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1})
            )
        }
  
        const getTotalCartAmount = () =>{
            let totalAmount = 0;
            for(const item in cartItems)
            {
                if(cartItems[item]>0){
                    let itemInfo  = all_product.find((product)=>product.id === Number(item))
                    if (itemInfo) {
                        totalAmount += itemInfo.new_price * cartItems[item];
                    }
                }
            }
            return totalAmount;
        }

        const getTotalCartItems = () =>{
            let totalItmes = 0;
            for(const item in cartItems)
            {
                if(cartItems[item]>0){
                    totalItmes += cartItems[item];
                }
              
            }
            return totalItmes;
        }
        const contextValue={getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
    return (
        <ShopContext.Provider value={contextValue}>
{props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;