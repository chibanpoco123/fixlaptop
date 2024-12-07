import React from 'react';
import './Footer.css'; // Import CSS for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-support">
        <div>
          <h3>Tổng đài hỗ trợ</h3>
          <p>Gọi mua: <strong>1900 232 460</strong> (8:00 - 21:30)</p>
          <p>Khiếu nại: <strong>1800.1062</strong> (8:00 - 21:30)</p>
          <p>Bảo hành: <strong>1900 232 464</strong> (8:00 - 21:00)</p>
        </div>
      </div>
      <div className="footer-company">
        <h3>Về công ty</h3>
        <ul>
          <li><a href="/">Giới thiệu công ty (MWG.vn)</a></li>
          <li><a href="/">Tuyển dụng</a></li>
          <li><a href="/">Gửi góp ý, khiếu nại</a></li>
          <li><a href="/">Tìm siêu thị (2,965 shop)</a></li>
        </ul>
      </div>
      <div className="footer-info">
        <h3>Thông tin khác</h3>
        <ul>
          <li><a href="/">Tích điểm Quà tặng VIP</a></li>
          <li><a href="/">Lịch sử mua hàng</a></li>
          <li><a href="/">Dịch vụ vệ sinh máy lạnh</a></li>
          <li><a href="/">Tìm hiểu về mua trả chậm</a></li>
          <li><a href="/">Chính sách bảo hành</a></li>
        </ul>
      </div>
      <div className="footer-social">
        <h3>Website cùng tập đoàn</h3>
        <div className="footer-links">
          <a href="/">TopZone</a>
          <a href="/">Điện máy XANH</a>
          <a href="/">Bách hóa XANH</a>
          <a href="/">Nhà thuốc An Khang</a>
          <a href="/">Việc làm</a>
          <a href="/">EraBlue</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2018. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở KH &amp; ĐT TP.HCM cấp ngày 02/01/2007.
        </p>
        <p>
          Địa chỉ: 128 Trần Quang Khải, P.Tân Định, Q.1, TP.Hồ Chí Minh. Điện thoại: 028 38125960. Email:
          <a href="mailto:latop.vn@gmail.com">laptop.vn@gmail.com</a>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
