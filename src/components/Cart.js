import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    deleteFromCart,
    selectAllItems,
    selectItem,
    getCartTotal,
  } = useCart();

  const navigate = useNavigate();

  // Hàm xác nhận đơn hàng và chuyển hướng đến trang thanh toán
  const handleConfirmOrder = () => {
    if (cartItems.length > 0) {
      const totalAmount = getCartTotal();
      const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

      // Chỉ truyền các dữ liệu đơn giản
      navigate("/checkout", {
        state: {
            totalQuantity,
            totalAmount,
            products: cartItems.map(item => ({
            id: item.id,
            name: item.name,
            quantity: item.quantity,
            salePrice: item.salePrice,
            image: item.image,
        })),    
        },
      });
    } else {
      alert("Giỏ hàng của bạn trống!");
    }
  };

  return (
    <div className="cart-container">
      {cartItems.length === 0 ? (
        <div>
          <h2>Giỏ hàng của bạn trống!</h2>
        </div>
      ) : (
        <>
          <div className="cart-left">
            <div className="cart-header">
              <input
                type="checkbox"
                onChange={(e) => selectAllItems(e.target.checked)}
                checked={cartItems.every((item) => item.isSelected)}
              />
              <label>Chọn tất cả ({cartItems.length})</label>
            </div>
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <input
                  type="checkbox"
                  checked={item.isSelected || false}
                  onChange={() => selectItem(item.id)}
                />
                <img src={item.image} alt={item.name} className="product-image" />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Màu: {item.color || "Không xác định"}</p>
                  <div className="price-details">
                    <span className="current-price">
                      {item.salePrice
                        ? item.salePrice.toLocaleString() + "₫"
                        : "Giá không có sẵn"}
                    </span>
                    <span className="original-price">
                      {item.originalPrice
                        ? item.originalPrice.toLocaleString() + "₫"
                        : ""}
                    </span>
                  </div>
                </div>
                <div className="quantity-controls">
                  <button onClick={() => removeFromCart(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
                <button className="delete-button" onClick={() => deleteFromCart(item.id)}>
                  🗑️
                </button>
              </div>
            ))}
          </div>
          <div className="cart-right">
            <h3>Thông tin đơn hàng</h3>
            <div className="order-summary">
              <p>
                Tổng tiền: <span>{getCartTotal().toLocaleString()}₫</span>
              </p>
              <button className="confirm-order" onClick={handleConfirmOrder}>
                Xác nhận đơn
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
