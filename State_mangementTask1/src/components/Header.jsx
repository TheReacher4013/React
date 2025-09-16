import { useContext } from "react";
import { CartContext } from "./Cartcontext.jsx";

export default function Header({ toggleCart }) {
    const { cart } = useContext(CartContext);
    const cartItemsCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

    return (
        <header className="w-full bg-[#131921] py-3 shadow sticky top-0 z-50">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center">
                    <span className="text-white text-2xl font-bold tracking-tight mr-2">
                        ShopEasy
                    </span>
                    <span className="text-xs text-gray-300 italic">
                        Amazon-inspired
                    </span>
                </div>

                <button
                    className="relative text-white focus:outline-none p-2 hover:bg-[#232f3e] rounded"
                    onClick={toggleCart}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 3h2l.344 2.063A3 3 0 008.296 7H19a1 1 0 01.993.883l1 12A1 1 0 0120 21H7a1 1 0 01-1-1V6H3V3z"
                        />
                    </svg>

                    {cartItemsCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-[#ff9900] text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                            {cartItemsCount}
                        </span>
                    )}
                </button>
            </div>
        </header>
    );
}
