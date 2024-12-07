import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Checkout.css';

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { products, totalQuantity, totalAmount } = location.state || {};

  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    phone: '',
    address: '',
    province: '',
    district: '',
    ward: '',
    note: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [paymentMethod, setPaymentMethod] = useState('');

  // Kiểm tra nếu không có sản phẩm trong giỏ hàng, chuyển về trang giỏ hàng
  useEffect(() => {
    if (!products || products.length === 0) {
      navigate('/cart');
    }
  }, [products, navigate]);

  // Hàm validate form
  const validateForm = () => {
    const errors = {};

    if (!formData.email) {
      errors.email = 'Vui lòng nhập email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email không hợp lệ';
    }

    if (!formData.fullName) {
      errors.fullName = 'Vui lòng nhập họ tên';
    }

    if (!paymentMethod) {
      errors.payment = 'Vui lòng chọn phương thức thanh toán';
    }

    return errors;
  };

  // Hàm xử lý gửi form đặt hàng
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const confirmed = window.confirm('Bạn có chắc chắn muốn đặt hàng?');
    if (!confirmed) return;

    setIsSubmitting(true);

    try {
      // Giả lập API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Tạo thông tin đơn hàng
      const orderData = {
        orderId: `#${Math.floor(Math.random() * 10000)}`,
        email: formData.email,
        fullName: formData.fullName,
        phone: formData.phone,
        paymentMethod,
        products: products.map((product) => ({
          id: product.id,
          name: product.name,
          quantity: product.quantity,
          price: product.salePrice,
        })),
        totalQuantity,
        totalAmount,
      };

      // Lưu đơn hàng vào localStorage
      const orders = JSON.parse(localStorage.getItem('orders') || '[]');
      orders.push(orderData);
      localStorage.setItem('orders', JSON.stringify(orders));

      // Chuyển hướng đến trang xác nhận thành công
      navigate('/order-success', { state: { orderData } });
    } catch (error) {
      console.error('Error:', error);
      alert('Có lỗi xảy ra khi đặt hàng');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Hàm xử lý thay đổi dữ liệu trong form
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  // Nếu không có sản phẩm trong giỏ hàng, hiển thị thông báo chuyển hướng
  if (!products) {
    return <div className="loading">Đang chuyển hướng...</div>;
  }

  return (
    <div className="checkout-container">
      <div className="checkout-left">
        <h2>Laptop.vn</h2>

        <div className="checkout-section">
          <div className="section-header">
            <h3>Thông tin nhận hàng</h3>
            <button className="login-button">Đăng nhập</button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleFormChange}
                className={formErrors.email ? 'error' : ''}
              />
              {formErrors.email && (
                <span className="error-message">{formErrors.email}</span>
              )}
            </div>

            <div className="form-group">
              <input
                type="text"
                name="fullName"
                placeholder="Họ và tên"
                value={formData.fullName}
                onChange={handleFormChange}
                className={formErrors.fullName ? 'error' : ''}
              />
              {formErrors.fullName && (
                <span className="error-message">{formErrors.fullName}</span>
              )}
            </div>

            <div className="phone-input">
              <select className="country-select">
                <option value="VN">🇻🇳 +84</option>
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="Số điện thoại (tùy chọn)"
                value={formData.phone}
                onChange={handleFormChange}
              />
            </div>

            <input
              type="text"
              name="address"
              placeholder="Địa chỉ (tùy chọn)"
              value={formData.address}
              onChange={handleFormChange}
            />

            <select
              name="province"
              value={formData.province}
              onChange={handleFormChange}
            >
              <option value="">Tỉnh thành</option>
              <option value="Hà Nội">Hà Nội</option>
              <option value="Đà Nẵng">Vĩnh Phúc</option>
              <option value="Đà Nẵng">Bắc Ninh</option>
              <option value="Đà Nẵng">Quảng Ninh</option>
              <option value="Đà Nẵng">Hải Dương</option>
              <option value="Đà Nẵng">Hải Phòng</option>
              <option value="Đà Nẵng">Hưng Yên</option>
              <option value="Đà Nẵng">Thái Bình</option>
              <option value="Đà Nẵng">Hà Nam</option>
              <option value="Đà Nẵng">Nam Định</option>
              <option value="Đà Nẵng">Ninh Bình</option>
              <option value="Đà Nẵng">Hà Giang</option>
              <option value="Đà Nẵng">Cao Bằng</option>
              <option value="Đà Nẵng">Bắc Kạn</option>
              <option value="Đà Nẵng">Tuyên Quang</option>
              <option value="Đà Nẵng">Lào Cai</option>
              <option value="Đà Nẵng">Yên Bái</option>
              <option value="Đà Nẵng">Thái Nguyên</option>
              <option value="Đà Nẵng">Lạng Sơn</option>
              <option value="Đà Nẵng">Bắc Giang</option>
              <option value="Đà Nẵng">Phú Thọ</option>
              <option value="Đà Nẵng">Điện Biên</option>
              <option value="Đà Nẵng">Lai Châu</option>
              <option value="Đà Nẵng">Sơn La</option>
              <option value="Đà Nẵng">Hòa Binh</option>
              <option value="Đà Nẵng">Thanh Hóa</option>
              <option value="Đà Nẵng">Nghệ An</option>
              <option value="Đà Nẵng">Hà Tĩnh</option>
              <option value="Đà Nẵng">Quảng Bình</option>
              <option value="Đà Nẵng">Quảng Trị</option>
              <option value="Đà Nẵng">Thừa Thiên Huế</option>
              <option value="Đà Nẵng">Đà Nẵng</option>
              <option value="Đà Nẵng">Quảng Nam</option>
              <option value="Đà Nẵng">Quảng Ngãi</option>
              <option value="Đà Nẵng">Bình Định</option>
              <option value="Đà Nẵng">Phú Yên</option>
              <option value="Đà Nẵng">Kháng Hòa</option>
              <option value="Đà Nẵng">Ninh Thuận</option>
              <option value="Đà Nẵng">Tây Nguyên</option>
              <option value="Đà Nẵng">Kon Tum</option>
              <option value="Đà Nẵng">Gia Lai</option>
              <option value="Đà Nẵng">Đắk Låk</option>
              <option value="Đà Nẵng">Đắk Nông</option>
              <option value="Đà Nẵng">Lâm Đồng</option>
              <option value="Đà Nẵng">Bình Phước</option>
              <option value="Đà Nẵng">Tây Ninh</option>
              <option value="Đà Nẵng">Bình Dương</option>
              <option value="Đà Nẵng">Đồng Nai</option>
              <option value="Đà Nẵng">Bà Rịa-Vùng Tàu</option>
              <option value="Đà Nẵng">TP.Hồ Chí Minh</option>
              <option value="Đà Nẵng">Long An</option>
              <option value="Đà Nẵng">Tiền Giang</option>
              <option value="Đà Nẵng">Bến Tre</option>
              <option value="Đà Nẵng">Trà Vinh</option>
              <option value="Đà Nẵng">Vinh Long</option>
              <option value="Đà Nẵng">Đồng Tháp</option>
              <option value="Đà Nẵng">An Giang</option>
              <option value="Đà Nẵng">Kiên Giang</option>
              <option value="Đà Nẵng">Cần Thơ</option>
              <option value="Đà Nẵng">Hậu Giang</option>
              <option value="Đà Nẵng">Sóc Trăng</option>
              <option value="Đà Nẵng">Bạc Liêu</option>
              <option value="Đà Nẵng">Cà Mau</option>
            </select>

            <select
              name="district"
              value={formData.district}
              onChange={handleFormChange}
            >
              <option value="">Quận huyện (tùy chọn)</option>
            </select>

            <select
              name="ward"
              value={formData.ward}
              onChange={handleFormChange}
            >
              <option value="">Phường xã (tùy chọn)</option>
            </select>

            <textarea
              name="note"
              placeholder="Ghi chú (tùy chọn)"
              value={formData.note}
              onChange={handleFormChange}
            />

            <div className="payment-section">
              <h3>Thanh toán</h3>
              <div className="payment-methods">
                <label className="payment-method">
                  <input
                    type="radio"
                    name="payment"
                    value="bank"
                    checked={paymentMethod === 'bank'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <span>Chuyển khoản</span>
                </label>

                <label className="payment-method">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <span>Thu hộ (COD)</span>
                </label>
                {formErrors.payment && (
                  <span className="error-message">{formErrors.payment}</span>
                )}
              </div>
            </div>

            <div className="checkout-actions">
              <button
                type="submit"
                className="order-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'ĐANG XỬ LÝ...' : 'ĐẶT HÀNG'}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="checkout-right">
        <h3>Đơn hàng ({totalQuantity} sản phẩm)</h3>

        <div className="order-items">
          {products.map((product, index) => (
            <div key={index} className="order-item">
              <div className="product-info">
                <span className="quantity-badge">{product.quantity}</span>
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <div>
                  <p className="product-name">{product.name}</p>
                </div>
              </div>
              <div className="product-price">
                {(product.salePrice * product.quantity).toLocaleString()}đ
              </div>
            </div>
          ))}
        </div>

        <div className="price-summary">
          <div className="price-row">
            <span>Tạm tính</span>
            <span>{totalAmount.toLocaleString()}đ</span>
          </div>
          <div className="price-row total">
            <span>Tổng cộng</span>
            <span>{totalAmount.toLocaleString()}đ</span>
          </div>
        </div>

        <div className="checkout-actions">
          <a href="/cart" className="back-link">
            ← Quay về giỏ hàng
          </a>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
