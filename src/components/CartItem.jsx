import React, { useEffect, useState } from "react";
import { BiMinus } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { fetchCart } from "../utils/fetchLocalStorageData";

const CartItem = ({ item, setFlag, flag }) => {
  const [{ cartItems }, dispatch] = useStateValue();
  const [qty, setQty] = useState(item.qty);

  const updateLocalQty = (action) => {
    if (action === "add") {
      setQty((prevQty) => prevQty + 1);
    } else {
      if (qty > 0) {
        setQty((prevQty) => prevQty - 1);
      }
    }
  };
  
  

  const updateGlobalQty = (action, id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        if (action === "add") {
          return { ...item, qty: item.qty + 1 };
        } else {
          return { ...item, qty: item.qty - 1 };
        }
      } else {
        return item;
      }
    });
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: updatedCartItems,
    });
  };

  const handleQtyUpdate = (action, id) => {
    updateLocalQty(action);
    updateGlobalQty(action, id);
    setFlag((prevFlag) => prevFlag + 1);
  };

  useEffect(() => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, qty };
      } else {
        return cartItem;
      }
    });
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  }, [qty]);

  return (
    <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
      <img
        src={item?.imageURL}
        className="w-20 h-20 max-w-[60px] rounded-full object-contain"
        alt=""
      />

      {/* name section*/}
      <div className="flex flex-col gap-2">
        <p className="text-base text-gray-50"> {item?.title}</p>
        <p className="text-sm block text-gray-300 font-semibold">
          $ {parseFloat(item?.price) * qty}
        </p>
      </div>
      {/* button section*/}
      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => handleQtyUpdate("remove", item?.id)}
        >
          <BiMinus className="text-gray-50" />
        </motion.div>
        <p
          className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center
  justify-center"
        >
          {qty}
        </p>
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => handleQtyUpdate("add", item?.id)}
        >
          <BiPlus className="text-gray-50" />
        </motion.div>
      </div>
    </div>
  );
};

export default CartItem;
