import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './OrderSuccess.css';

function OrderSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderData } = location.state || {};

  // Nếu không có dữ liệu orderData, chuyển hướng về trang chủ
  if (!orderData) {
    navigate('/');
    return null;
  }

  // Xử lý sự kiện in đơn hàng
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="order-success-container">
      {/* Logo thương hiệu */}
      <h2 className="brand">Laptop.vn</h2>

      {/* Thông báo thành công */}
      <div className="success-message">
        <div className="success-icon">
          <svg viewBox="0 0 24 24" fill="currentColor" className="success-check">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg>
        </div>
        <h3>Cảm ơn bạn đã đặt hàng!</h3>
        <p>Một email xác nhận đã được gửi tới <strong>{orderData.email}</strong>.</p>
        <p>Xin vui lòng kiểm tra email để biết thêm chi tiết.</p>
      </div>

      {/* Thông tin đơn hàng */}
      <div className="order-details">
        <div className="order-info">
          <h4>Thông tin người mua</h4>
          <div className="info-content">
            <p><strong>Họ tên:</strong> {orderData.fullName}</p>
            <p><strong>Email:</strong> {orderData.email}</p>
            <p><strong>Số điện thoại:</strong> {orderData.phone || 'Không có'}</p>
          </div>
        </div>

        <div className="payment-info">
          <h4>Phương thức thanh toán</h4>
          <p>{orderData.paymentMethod === 'bank' ? 'Chuyển khoản' : 'Thanh toán khi nhận hàng (COD)'}</p>
        </div>
      </div>

      {/* Chi tiết sản phẩm đã đặt */}
      <div className="order-summary">
        <div className="order-header">
          <h4>Đơn hàng {orderData.orderId} ({orderData.totalQuantity} sản phẩm)</h4>
        </div>

        <div className="order-items">
          {orderData.products.map((product, index) => (
            <div key={index} className="order-item">
              <div className="product-info">
                <span className="quantity-badge">{product.quantity}</span>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-details">
                  <p className="product-name">{product.name}</p>
                  <p className="product-variant">
                    {product.variants && product.variants.length > 0 
                      ? product.variants[0].name 
                      : 'Không có tùy chọn'}
                  </p>
                </div>
              </div>
              <div className="product-price">
                {(product.price * product.quantity).toLocaleString()}₫
              </div>
            </div>
          ))}
        </div>

        <div className="price-summary">
          <div className="price-row">
            <span>Tạm tính</span>
            <span>{orderData.totalAmount.toLocaleString()}₫</span>
          </div>
          <div className="price-row total">
            <span>Tổng cộng</span>
            <span>{orderData.totalAmount.toLocaleString()}₫</span>
          </div>
        </div>
      </div>

      {/* Các hành động */}
      <div className="order-actions">
        <button 
          className="continue-shopping"
          onClick={() => navigate('/')}
        >
          Tiếp tục mua hàng
        </button>
        <button 
          className="print-order"
          onClick={handlePrint}
        >
          <i className="print-icon">🖨️</i> In hóa đơn
        </button>
      </div>
    </div>
  );
}

export default OrderSuccess;
