import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartSection = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                <div>
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index} className="mb-4 p-3 rounded">
                                <p className="font-semibold">{item.name}</p>
                                <p>
                                    Price: ₹{item.price} <br />
                                    Quantity: {item.quantity} <br />
                                    <strong>Total: ₹{item.price * item.quantity}</strong>
                                </p>
                                <button
                                    className="bg-red-600 text-white px-2 py-1 rounded mt-2"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>

                    <h3 className="mt-6 text-lg font-bold">
                        Cart Value: ₹{total}
                    </h3>
                </div>
            )}
        </div>
    );
};

export default CartSection;
