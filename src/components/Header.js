import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext'; // Cart context
import { useAuth } from '../context/AuthContext'; // Authentication context
import './Header.css';

function Header({ searchQuery, setSearchQuery }) {
  const { getCartCount } = useCart();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuData = {
    sanpham: {
      title: "Sản phẩm",
      items: [
        {
          title: "Theo thương hiệu",
          subitems: ["Dell", "HP", "Asus", "Lenovo", "Acer"],  // Acer đã được thêm lại vào đây
        },
        {
          title: "Mẫu Laptop",
          subitems: [
            "Laptop Gaming",
            "Laptop Văn Phòng",
            "Laptop AI",
            "Laptop Mỏng Nhẹ",
          ],
        },
        {
          title: "Mức giá",
          subitems: [
            "Dưới 10 triệu",
            "10-20 triệu",
            "20-30 triệu",
            "Trên 30 triệu",
          ],
        },
      ],
    },
    phukien: {
      title: "Phụ kiện",
      items: [
        {
          title: "Phụ kiện laptop",
          subitems: ["Balo & Túi", "Chuột", "Adapter", "Lót chuột"],
        },
      ],
    },
  };

  const handleUserIconClick = () => {
    if (isAuthenticated) {
      logout();
    } else {
      navigate('/login');
    }
  };

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate('/')}>
        <img src="/logo.png" alt="LAPTOP.VN" />
      </div>

      <nav className="main-nav">
        {Object.entries(menuData).map(([key, menu]) => (
          <div
            key={key}
            className="nav-item"
            onMouseEnter={() => setActiveDropdown(key)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="nav-link">{menu.title}</button>
            {activeDropdown === key && (
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  {menu.items.map((category, index) => (
                    <div key={index} className="dropdown-category">
                      <h3>{category.title}</h3>
                      <ul>
                        {category.subitems.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <Link
                              to={item.toLowerCase() === "lenovo" ? "/lenovo" : 
                                 item.toLowerCase() === "acer" ? "/acer" : 
                                 item.toLowerCase() === "dell" ? "/dell" : 
                                 item.toLowerCase() === "asus" ? "/asus" :
                                 `/${key}/${item.toLowerCase().replace(/ /g, "-")}`}
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="header-actions">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch className="search-icon" />
        </div>

        <div
          className="user-icon-wrapper"
          onClick={handleUserIconClick}
          title={isAuthenticated ? 'Đăng xuất' : 'Đăng nhập'}
        >
          <FaUser className="user-icon" />
        </div>

        <div className="cart-icon-wrapper" onClick={() => navigate('/cart')}>
          <FaShoppingCart className="cart-icon" />
          <span className="cart-count">{getCartCount()}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
