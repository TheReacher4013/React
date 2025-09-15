import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="border p-4 rounded-md shadow-md text-center">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p>{product.price}</p>
            <button
                onClick={() => addToCart(product)}
                className="bg-teal-700 text-white px-3 py-1 mt-2 rounded hover:bg-fuchsia-800"
            >ADD To CART
            </button>
        </div>
    );
};

export default ProductCard;
