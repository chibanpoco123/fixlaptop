import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../assets/slides/slide1.png';
import slide2 from '../assets/slides/slide2.png';
import slide3 from '../assets/slides/slide3.png';
import slide4 from '../assets/slides/slide4.png';
import slide5 from '../assets/slides/slide5.png';
import slide6 from '../assets/slides/slide6.png';
import './Banner.css';

function Banner() {
  // State cho countdown
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Tạo thời gian kết thúc (ví dụ: 24 giờ từ thời điểm hiện tại)
    const endTime = new Date();
    endTime.setHours(endTime.getHours() + 24);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = endTime - now;

      if (difference <= 0) {
        // Hết thời gian
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        // Tính toán thời gian còn lại
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);

    // Cleanup timer khi component unmount
    return () => clearInterval(timer);
  }, []);

  const slides = [
    {
      image: slide1,
      
    },
    {
      image: slide2,
      
    },
    {
      image: slide3,
      
    },
    {
      image: slide4,
     
    },
    {
      image: slide5,
    },
    {
        image: slide6,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2400,
    fade: true,
    cssEase: 'linear',
    pauseOnHover: true,
    arrows: true
  };

  // Format số thành dạng 2 chữ số (thêm số 0 phía trước nếu cần)
  const formatNumber = (number) => {
    return number.toString().padStart(2, '0');
  };

  return (
    <div className="banner-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="banner-slide">
            <div 
              className="slide-content"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              
            </div>
          </div>
        ))}
      </Slider>
      
      <div className="countdown">
        <p>Kết thúc sau</p>
        <div className="timer">
          <div className="time-block">
            <span className="time-value">{formatNumber(timeLeft.hours)}</span>
            
          </div>
          <span className="time1">:</span>
          <div className="time-block">
            <span className="time-value">{formatNumber(timeLeft.minutes)}</span>
           
          </div>
          <span className="time1">:</span>
          <div className="time-block">
            <span className="time-value">{formatNumber(timeLeft.seconds)}</span>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;