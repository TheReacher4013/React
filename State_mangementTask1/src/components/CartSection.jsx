import { useContext } from "react";
import { CartContext } from "../components/Cartcontext";

export default function CartSection() {
    const {
        cart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        totalPrice,
    } = useContext(CartContext);
    console.log("CartContext:", CartContext);
    console.log("Cart Items:", cart);

    return (
        <div className="p-4 border mt-4">
            <h2 className="text-xl font-bold mb-2">Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                cart.map((item) => (
                    <div
                        key={item.id}
                        className="flex justify-between items-center border-b py-2"
                    >
                        <div>
                            <h4>{item.name}</h4>
                            <p>₹{item.price} x {item.quantity}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => decreaseQuantity(item.id)}
                                className="px-2 py-1 bg-gray-300 rounded"
                            >
                                -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                                onClick={() => increaseQuantity(item.id)}
                                className="px-2 py-1 bg-gray-300 rounded"
                            >
                                +
                            </button>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="px-2 py-1 bg-red-600 text-white rounded"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))
            )}
            {cart.length > 0 && (
                <h3 className="mt-4 font-bold">Total: ₹{totalPrice}</h3>
            )}
        </div>
    );
}

