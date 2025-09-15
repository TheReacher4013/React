import { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductSection from "./components/ProductSection";
import { CartProvider } from "./components/Cartcontext";

function App() {
  const [products, setProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const mockProducts = [
      {
        id: 1,
        name: "Wireless Earbuds",
        desc: "Noise cancellation with 24hr battery life",
        price: 89.99,
        image:
          "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.5,
      },
      {
        id: 2,
        name: "Smart Watch",
        desc: "Fitness tracker & heart rate monitor",
        price: 129.99,
        image:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.3,
      },
      {
        id: 3,
        name: "Tablet 10 inch",
        desc: "High resolution display, 64GB storage",
        price: 299.99,
        image:
          "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.7,
      },
      {
        id: 4,
        name: "Gaming Headset",
        desc: "7.1 surround sound, RGB lighting",
        price: 79.99,
        image:
          "https://images.unsplash.com/photo-1599669454699-248893623464?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.2,
      },
      {
        id: 5,
        name: "Bluetooth Speaker",
        desc: "Waterproof, 20W powerful sound",
        price: 49.99,
        image:
          "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.6,
      },
      {
        id: 6,
        name: "Wireless Keyboard",
        desc: "Ergonomic design, silent keys",
        price: 69.99,
        image:
          "https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.4,
      },
    ];
    setProducts(mockProducts);
  }, []);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartProvider>
      <Header toggleCart={toggleCart} />
      <ProductSection products={products} />
    </CartProvider>
  );
}

export default App;

