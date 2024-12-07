import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Hàm đăng nhập
  const login = (username, password) => {
    // Logic xác thực tạm thời
    if (username === "user@gmail.com" && password === "password") {
      setIsAuthenticated(true);
      alert("Đăng nhập thành công");
      navigate('/'); // Điều hướng về trang chủ sau khi đăng nhập thành công
    } else {
      alert("Tên đăng nhập hoặc mật khẩu không đúng");
    }
  };

  // Hàm đăng xuất
  const logout = () => {
    setIsAuthenticated(false);
    alert("Đã đăng xuất");
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
