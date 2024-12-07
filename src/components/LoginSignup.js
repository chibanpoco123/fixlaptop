import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Thêm hook navigate từ react-router-dom
import { useAuth } from '../context/AuthContext'; // Import AuthContext for authentication
import './Login.css'; // Import CSS để thêm hiệu ứng xoay

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const { login } = useAuth(); // Thêm logic login từ AuthContext
  const { register } = useAuth(); // Thêm logic register từ AuthContext nếu có
  const navigate = useNavigate(); // Hook để điều hướng sau khi login thành công

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  // Logic đăng nhập
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value; // Thay email thành username
    const password = e.target.elements.password.value;

    // Kiểm tra tài khoản và mật khẩu mặc định
    if (username === 'admin' && password === '123456') {
      alert('Đăng nhập thành công');
      login(username, password); // Thực hiện login
      navigate('/admin'); // Chuyển hướng tới trang admin sau khi login thành công
    } else {
      console.log('Tên đăng nhập hoặc mật khẩu không đúng');
      alert('Tên đăng nhập hoặc mật khẩu không đúng');
    }
  };

  // Logic đăng ký
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    register(username, email, password); // Đăng ký qua context nếu có
  };

  return (
    <div className={`auth-container ${isLogin ? '' : 'flip'}`}>
      <div className="form-wrapper">
        {/* Form Đăng nhập */}
        <div className="form-container login-container">
          <form className="form" onSubmit={handleLoginSubmit}>
            <h2>Đăng nhập</h2>
            <input type="text" name="username" placeholder="Tên đăng nhập" required />
            <input type="password" name="password" placeholder="Mật khẩu" required />
            <button type="submit">Đăng nhập</button>
            <p className="toggle-text" onClick={toggleForm}>
              Bạn chưa có tài khoản? Đăng ký
            </p>
          </form>
        </div>

        {/* Form Đăng ký */}
        <div className="form-container signup-container">
          <form className="form" onSubmit={handleSignupSubmit}>
            <h2>Đăng ký</h2>
            <input type="text" name="username" placeholder="Tên đăng nhập" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Mật khẩu" required />
            <button type="submit">Đăng ký</button>
            <p className="toggle-text" onClick={toggleForm}>
              Bạn đã có tài khoản? Đăng nhập
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
