import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { allProducts } from '../data/dell'; // Import dữ liệu
import './Acerpage.css';

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const productSectionRef = useRef(null);

  // Lọc sản phẩm theo danh mục
  const filteredProducts = selectedCategory === 'Tất cả'
    ? allProducts
    : allProducts.filter(product => product.category === selectedCategory);

  // Lọc sản phẩm theo từ khóa tìm kiếm
  const searchResults = filteredProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Hàm cuộn đến phần sản phẩm
  const scrollToProducts = () => {
    if (productSectionRef.current) {
      productSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Thêm sản phẩm vào giỏ hàng
  const handleAddToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    alert(`${product.name} đã được thêm vào giỏ hàng!`);
  };

  // Mua ngay sản phẩm
  const handleBuyNow = (product) => {
    const updatedCart = [product];
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    navigate('/cart', { state: { cartItems: updatedCart } });
  };

  return (
    <div className="top-bar">
      <h1>Acer</h1>

      <div className="category-filter">
        <label htmlFor="category">Chọn danh mục: </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="Tất cả">Tất cả</option>
          <option value="Đồ Điện Tử">Đồ Điện Tử</option>
        </select>
        {isSearchOpen && (
          <div className="search-bar">
            <input
              type="text"
              placeholder="Tìm sản phẩm..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        )}
      </div>

      <div className="product-list">
        {searchResults.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} className="product-image" />
            </Link>
            <h3>{product.name}</h3>
            {/* Hiển thị giá tiền */}
            <p>
              Giá: {product.price
                ? product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
                : 'Liên hệ'}
            </p>
            <p>Danh mục: {product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
