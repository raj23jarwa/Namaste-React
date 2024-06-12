import React from "react";
import ItemList from "./ItemList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <div className="flex justify-center items-center gap-10">
        <h1 className="text-2xl font-bold"> Cart</h1>
        {cartItems.length !== 0 ? (
          <button
            className="bg-red-400 text-white rounded-lg text-md px-4 py-2"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        ) : null}
      </div>
      {/* <div className="w-1/2 m-auto border rounded-xl shadow-lg p-2 shadow-gray-400"> */}
      <div className="w-1/2 m-auto">

        {cartItems.length === 0 ? (
          "Your cart is empty"
        ) : (
          <ItemList items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
