// ProductSection.jsx
import { useContext } from "react";
 import { CartContext } from "./Cartcontext"; 

export default function ProductSection({ products }) {
    const { addToCart } = useContext(CartContext);

    // ⭐ Product rating stars render karne ka function
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <span key={i} className="text-yellow-400">
                    ★
                </span>
            );
        }

        if (hasHalfStar) {
            stars.push(
                <span key="half" className="text-yellow-400">
                    ★
                </span>
            );
        }

        const emptyStars = 5 - stars.length;
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <span key={`empty-${i}`} className="text-gray-400">
                    ★
                </span>
            );
        }

        return stars;
    };

    return (
        <main className="flex-1 max-w-[90%] mx-auto">
            {/* Section Heading */}
            <div className="bg-white py-4 px-6 mb-4 rounded shadow-sm">
                <h1 className="text-2xl font-bold text-gray-800">
                    Featured Products
                </h1>
                <p className="text-gray-600">
                    Most popular products in ShopEasy
                </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-sm overflow-hidden transform transition hover:scale-[1.02] hover:shadow-md border border-gray-200"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-bold text-gray-800 mb-1 line-clamp-1">
                                {product.name}
                            </h2>
                            <p className="text-gray-600 text-sm mb-2 line-clamp-2 h-10">
                                {product.desc}
                            </p>

                            {/* Rating */}
                            <div className="flex items-center mb-2">
                                <div className="flex">{renderStars(product.rating)}</div>
                                <span className="text-blue-600 text-sm ml-1">
                                    {product.rating}
                                </span>
                            </div>

                            {/* Price + Add to Cart Button */}
                            <div className="flex items-center justify-between mt-3">
                                <span className="text-xl font-bold text-gray-900">
                                    ${product.price.toFixed(2)}
                                </span>
                                <button
                                    onClick={() => addToCart(product)}
                                    className="bg-[#ffd814] block hover:bg-[#f7ca00] text-gray-900 py-2 px-4 rounded-full text-sm font-medium transition shadow-sm hover:shadow focus:outline-none"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
