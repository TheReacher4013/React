import { CartProvider } from "./context/CartContext";
import CartSection from "./Pages/CartSection";
import ProductCard from "./components/ProductCard";

const sampleProducts = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Headphones", price: 2000 },
  { id: 4, name: "Smart Watch", price: 5000 },
  { id: 5, name: "Tablet", price: 15000 },
  { id: 6, name: "Camera", price: 25000 },
];

function App() {
  return (
    <CartProvider>
      <h1 className="text-3xl font-bold text-rose-700 text-center my-6">SHOPPING CART</h1>
      <div className="grid grid-cols-3 gap-4 p-6">
        {sampleProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <CartSection />
    </CartProvider>
  );
}

export default App;
