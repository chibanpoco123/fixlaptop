import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { MdAddShoppingCart, MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { useCart } from '../context/CartContext'; // Import useCart
import './ProductDetail.css';
function ProductDetail({ products }) {
  const { id } = useParams(); // Lấy id từ URL
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openSection, setOpenSection] = useState(null); // Quản lý trạng thái accordion
  const { addToCart } = useCart(); // Lấy hàm addToCart từ CartContext
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng

  // Lấy sản phẩm từ danh sách dựa vào ID
  useEffect(() => {
    if (products && products.length > 0) {
      const selectedProduct = products.find((item) => item.id === parseInt(id));
      setProduct(selectedProduct);
    }
  }, [id, products]);

  if (!product) return <p>Không tìm thấy sản phẩm!</p>;

  const images = product.images || [product.image];

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const toggleSection = (index) => {
    setOpenSection((prevOpenSection) => (prevOpenSection === index ? null : index));
  };

  const handleAddToCart = () => {
    addToCart(product); // Thêm sản phẩm vào giỏ hàng
    setShowAddedMessage(true); // Hiển thị thông báo
    setTimeout(() => setShowAddedMessage(false), 3000); // Tự động ẩn thông báo sau 3 giây
  };

  const handleBuyNow = () => {
    const selectedProduct = {
      id: product.id,
      name: product.name,
      price: product.salePrice,
      quantity: 1,
      variants: product.variants || [],
      image: images[0],
    };

    const products = [selectedProduct];
    const totalQuantity = 1;
    const totalAmount = selectedProduct.price;

    // Chuyển hướng tới trang Checkout
    navigate('/checkout', {
      state: {
        products,
        totalQuantity,
        totalAmount,
      },
    });
  };

  return (
    <div className="product-detail">
      {/* Phần hình ảnh và thông tin chi tiết sản phẩm */}
      <div className="product-detail-left">
        <div className="main-image">
          <img src={images[currentImageIndex]} alt={product.name} />
          <button className="arrow left-arrow" onClick={handlePrev}>
            <MdArrowBackIos />
          </button>
          <button className="arrow right-arrow" onClick={handleNext}>
            <MdArrowForwardIos />
          </button>
        </div>
        <div className="image-gallery">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.name} ${index}`}
              className={currentImageIndex === index ? 'active' : ''}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>

        {product.details && product.details.length > 0 && (
          <div className="product-detail-extra">
            <h2>Thông số kỹ thuật</h2>
            <div className="product-details-accordion">
              {product.details.map((detail, index) => (
                <div
                  key={index}
                  className={`accordion-item ${openSection === index ? 'active' : ''}`}
                >
                  <button
                    className="accordion-header"
                    onClick={() => toggleSection(index)}
                  >
                    <span>{detail.title}</span>
                    <span className="arrow">{openSection === index ? '▲' : '▼'}</span>
                  </button>
                  {openSection === index && (
                    <div className="accordion-content">
                      {detail.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Phần thông tin sản phẩm */}
      <div className="product-detail-right">
        <h1>{product.name}</h1>
        <p className="sold-count">Đã bán: {product.soldCount}</p>
        <p className="product-price">
          <span className="sale-price">{product.salePrice.toLocaleString()}₫</span>
          <span className="original-price">{product.originalPrice.toLocaleString()}₫</span>
          <span className="discount">-{product.discountPercent}%</span>
        </p>
        <div className="promotion-section">
          <h3>Khuyến mãi</h3>
          <ul>
            {product.promotions &&
              product.promotions.map((promo, index) => (
                <li key={index}>
                  <input type="radio" name="promo" id={`promo${index}`} />
                  <label htmlFor={`promo${index}`}>{promo}</label>
                </li>
              ))}
          </ul>
        </div>
        <div className="buttons">
          <button className="add-to-cart" onClick={handleAddToCart}>
            <MdAddShoppingCart />
            Thêm vào giỏ
          </button>
          <button className="buy-now" onClick={handleBuyNow}>
            Mua ngay
          </button>
        </div>
      </div>

      {/* Thông báo thêm vào giỏ hàng */}
      {showAddedMessage && (
        <div className="added-to-cart-message">
          <p>Đã thêm vào giỏ hàng!</p>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
