// components/RegisterForm.jsx
import React from 'react';
import './AuthForms.css';

function RegisterForm() {
  return (
    <div className="register-form">
      <h3>Đăng Ký</h3>
      <input type="text" placeholder="Tên người dùng" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Mật khẩu" />
      <button className="auth-submit">Đăng Ký</button>
    </div>
  );
}

export default RegisterForm;
