import image1 from '../images/acer-aspire-720.jpg';
import image2 from '../images/acer-aspire4.jpg';
import image3 from '../images/acer-nitro-5-tiger3.jpg';
import image4 from '../images/acer-predator-helios-neo-phn16-71-53m7-i5-8.jpg';
import image5 from '../images/acer-swift-ai-sf14-51-75vp-ultra-7.jpg';
import image6 from '../images/acer1.jpg';
import image7 from '../images/acer-aspire-720.jpg';
import image8 from '../images/acer-aspire4.jpg';
import image9 from '../images/acer-nitro-5-tiger3.jpg';
import image10 from '../images/acer-predator-helios-neo-phn16-71-53m7-i5-8.jpg';
import image11 from '../images/acer-swift-ai-sf14-51-75vp-ultra-7.jpg';
import image12 from '../images/acer1.jpg';
import { name } from 'xml-name-validator';

const calculatePrices = (originalPrice, discountPercent) => {
  const discount = Math.round(originalPrice * (discountPercent / 100));
  const salePrice = originalPrice - discount;
  
  return {
    originalPrice,
    salePrice,
    discount,
    discountPercent
  };
};
export const products = [
  { id: 21, name: 'Laptop Acer Aspire Lite 14 51M 59BN i5', price: 2000000, image: image6, category: 'Đồ Điện Tử' },
  { id: 22, name: 'Acer Aspire 720', price: 1200, image: image1, category: 'Đồ Điện Tử' },
  { id: 23, name: 'Acer Aspire 4', price: 1400, image: image2, category: 'Đồ Điện Tử' },
  { id: 24, name: 'Acer Nitro 5 Tiger', price: 1600, image: image3, category: 'Đồ Điện Tử' },
  { id: 25, name: 'Acer Predator Helios', price: 1800, image: image4, category: 'Đồ Điện Tử' },
  { id: 26, name: 'Acer Swift AI SF14', price: 2000, image: image5, category: 'Đồ Điện Tử' },
];

export const products2 = [
  { id: 27, name: "Acer Nitro 5 Tiger(r)", price: 1000, image: "/images/27.1.jpg",category: 'Đồ Điện Tử' },
  { id: 28, name: 'Acer Aspire 720', price: 1200,  image: "/images/28.1.jpg", category: 'Đồ Điện Tử' },
  { id: 29, name: 'Acer Nitro (r)', price: 1400, image: image9, category: 'Đồ Điện Tử' },
  { id: 30, name: 'Acer Nitro 5 Tiger', price: 1600, image: image10, category: 'Đồ Điện Tử' },
  { id: 31, name: 'Acer Predator Helios', price: 1800, image: image11, category: 'Đồ Điện Tử' },
  { id: 32, name: 'Acer Swift AI SF14', price: 2000, image: image12, category: 'Đồ Điện Tử' },
];

export const allProducts = [...products, ...products2];
