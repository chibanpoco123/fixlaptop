import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider
import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";
import { products } from "./data/products";
import Checkout from "./components/Checkout";
import OrderSuccess from "./components/OrderSuccess";
import Cart from "./components/Cart";
import LoginSignup from "./components/LoginSignup";
import Acer from "./components/AcerPage";
import Lenovo from "./components/Lenovopage";
import Dell from "./components/Dellpage";
import AdminPage from "./components/Admin"; // Import trang admin
import Asus from "./components/Asuspage";
import { ProductContext } from "./context/Product/ProductContext";
function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <AuthProvider>
        <ProductContext>
          <CartProvider>
            <div className="app">
              <Header
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
              <Banner />
              <Routes>
                <Route
                  path="/"
                  element={<ProductList searchQuery={searchQuery} />}
                />
                <Route
                  path="/product/:id"
                  element={<ProductDetail products={products} />}
                />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-success" element={<OrderSuccess />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<LoginSignup />} />
                <Route path="/acer" element={<Acer />} /> {/* Path for Acer */}
                <Route path="/lenovo" element={<Lenovo />} />{" "}
                {/* Path for Acer */}
                <Route path="/dell" element={<Dell />} /> {/* Path for dell */}
                <Route path="/admin" element={<AdminPage />} />{" "}
                {/* Đảm bảo bạn có trang Admin */}
                <Route path="/asus" element={<Asus />} />{" "}
                {/* Đảm bảo bạn có trang Admin */}
              </Routes>
              <Footer />
            </div>
          </CartProvider>
        </ProductContext>
      </AuthProvider>
    </Router>
  );
}

export default App;
