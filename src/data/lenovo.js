// lenovo.js
import { FaMemory, FaMicrochip, FaWindows } from 'react-icons/fa';
import { HiMiniCpuChip } from "react-icons/hi2";

// Tính toán % giảm giá
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

export const allProducts = [
  {
    id: 33,
    name: "Laptop Lenovo ThinkPad X1 Carbon i5 1235U/8GB/512GB SSD/Intel Iris Xe/Win11",
    image: "/images/i1.png",
    images: [
      "/images/i1.1.jgp",
      "/images/laptop2.1.jpg",
      "/images/laptop2.2.jpg",
    ],
    category: "Laptop",
    details: [
      {
        title: "Bộ xử lý",
        content: (
          <ul>
            <li>Intel Core i5 Alder Lake - 1235U</li>
            <li>Số nhân: 10</li>
            <li>Số luồng: 12</li>
            <li>Tốc độ CPU: 1.3GHz</li>
          </ul>
        ),
      },
      {
        title: "RAM, Ổ cứng",
        content: (
          <ul>
            <li>RAM: 8GB</li>
            <li>Loại RAM: DDR4</li>
            <li>Ổ cứng: 512GB SSD</li>
          </ul>
        ),
      },
      {
        title: "Màn hình",
        content: (
          <ul>
            <li>Màn hình: 14"</li>
            <li>Độ phân giải: Full HD (1920 x 1080)</li>
          </ul>
        ),
      },
      {
        title: "Card màn hình",
        content: (
          <ul>
            <li>Card màn hình: Intel Iris Xe Graphics</li>
          </ul>
        ),
      },
    ],
    promotions: [
      'Tặng túi chống sốc trị giá 300.000đ',
      'Giảm giá 10% khi mua kèm chuột và bàn phím',
    ],
    ...calculatePrices(18990000, 8),
    specs: [
      {
        icon: FaMemory,
        text: "RAM 8GB",
      },
      {
        icon: HiMiniCpuChip,
        text: "Intel Core i5-1235U",
      },
      {
        icon: FaWindows,
        text: "Windows 11 Home",
      },
    ],
    installment: "Trả góp 0%",
  },
  {
    id: 34,
    name: "Laptop Lenovo ThinkPad X1 Carbon i5 1235U/8GB/512GB SSD/Intel Iris Xe/Win11",
    image: "/images/i2.png",
    images: [
      "/images/laptop2.jpg",
      "/images/laptop2.1.jpg",
      "/images/laptop2.2.jpg",
    ],
    category: "Laptop",
    details: [
      {
        title: "Bộ xử lý",
        content: (
          <ul>
            <li>Intel Core i5 Alder Lake - 1235U</li>
            <li>Số nhân: 10</li>
            <li>Số luồng: 12</li>
            <li>Tốc độ CPU: 1.3GHz</li>
          </ul>
        ),
      },
      {
        title: "RAM, Ổ cứng",
        content: (
          <ul>
            <li>RAM: 8GB</li>
            <li>Loại RAM: DDR4</li>
            <li>Ổ cứng: 512GB SSD</li>
          </ul>
        ),
      },
      {
        title: "Màn hình",
        content: (
          <ul>
            <li>Màn hình: 14"</li>
            <li>Độ phân giải: Full HD (1920 x 1080)</li>
          </ul>
        ),
      },
      {
        title: "Card màn hình",
        content: (
          <ul>
            <li>Card màn hình: Intel Iris Xe Graphics</li>
          </ul>
        ),
      },
    ],
    promotions: [
      'Tặng túi chống sốc trị giá 300.000đ',
      'Giảm giá 10% khi mua kèm chuột và bàn phím',
    ],
    ...calculatePrices(18990000, 8),
    specs: [
      {
        icon: FaMemory,
        text: "RAM 8GB",
      },
      {
        icon: HiMiniCpuChip,
        text: "Intel Core i5-1235U",
      },
      {
        icon: FaWindows,
        text: "Windows 11 Home",
      },
    ],
    installment: "Trả góp 0%",
  },
  {
    id: 35,
    name: "Laptop Lenovo ThinkPad X1 Carbon i5 1235U/8GB/512GB SSD/Intel Iris Xe/Win11",
    image: "/images/i3.png",
    images: [
      "/images/laptop2.jpg",
      "/images/laptop2.1.jpg",
      "/images/laptop2.2.jpg",
    ],
    category: "Laptop",
    details: [
      {
        title: "Bộ xử lý",
        content: (
          <ul>
            <li>Intel Core i5 Alder Lake - 1235U</li>
            <li>Số nhân: 10</li>
            <li>Số luồng: 12</li>
            <li>Tốc độ CPU: 1.3GHz</li>
          </ul>
        ),
      },
      {
        title: "RAM, Ổ cứng",
        content: (
          <ul>
            <li>RAM: 8GB</li>
            <li>Loại RAM: DDR4</li>
            <li>Ổ cứng: 512GB SSD</li>
          </ul>
        ),
      },
      {
        title: "Màn hình",
        content: (
          <ul>
            <li>Màn hình: 14"</li>
            <li>Độ phân giải: Full HD (1920 x 1080)</li>
          </ul>
        ),
      },
      {
        title: "Card màn hình",
        content: (
          <ul>
            <li>Card màn hình: Intel Iris Xe Graphics</li>
          </ul>
        ),
      },
    ],
    promotions: [
      'Tặng túi chống sốc trị giá 300.000đ',
      'Giảm giá 10% khi mua kèm chuột và bàn phím',
    ],
    ...calculatePrices(18990000, 8),
    specs: [
      {
        icon: FaMemory,
        text: "RAM 8GB",
      },
      {
        icon: HiMiniCpuChip,
        text: "Intel Core i5-1235U",
      },
      {
        icon: FaWindows,
        text: "Windows 11 Home",
      },
    ],
    installment: "Trả góp 0%",
  },
  {
    id: 36,
    name: "Laptop Lenovo ThinkPad X1 Carbon i5 1235U/8GB/512GB SSD/Intel Iris Xe/Win11",
    image: "/images/i4.png",
    images: [
      "/images/laptop2.jpg",
      "/images/laptop2.1.jpg",
      "/images/laptop2.2.jpg",
    ],
    category: "Laptop",
    details: [
      {
        title: "Bộ xử lý",
        content: (
          <ul>
            <li>Intel Core i5 Alder Lake - 1235U</li>
            <li>Số nhân: 10</li>
            <li>Số luồng: 12</li>
            <li>Tốc độ CPU: 1.3GHz</li>
          </ul>
        ),
      },
      {
        title: "RAM, Ổ cứng",
        content: (
          <ul>
            <li>RAM: 8GB</li>
            <li>Loại RAM: DDR4</li>
            <li>Ổ cứng: 512GB SSD</li>
          </ul>
        ),
      },
      {
        title: "Màn hình",
        content: (
          <ul>
            <li>Màn hình: 14"</li>
            <li>Độ phân giải: Full HD (1920 x 1080)</li>
          </ul>
        ),
      },
      {
        title: "Card màn hình",
        content: (
          <ul>
            <li>Card màn hình: Intel Iris Xe Graphics</li>
          </ul>
        ),
      },
    ],
    promotions: [
      'Tặng túi chống sốc trị giá 300.000đ',
      'Giảm giá 10% khi mua kèm chuột và bàn phím',
    ],
    ...calculatePrices(18990000, 8),
    specs: [
      {
        icon: FaMemory,
        text: "RAM 8GB",
      },
      {
        icon: HiMiniCpuChip,
        text: "Intel Core i5-1235U",
      },
      {
        icon: FaWindows,
        text: "Windows 11 Home",
      },
    ],
    installment: "Trả góp 0%",
  },
  {
    id: 37,
    name: "Laptop Lenovo ThinkPad X1 Carbon i5 1235U/8GB/512GB SSD/Intel Iris Xe/Win11",
    image: "/images/i6.png",
    images: [
      "/images/laptop2.jpg",
      "/images/laptop2.1.jpg",
      "/images/laptop2.2.jpg",
    ],
    category: "Laptop",
    details: [
      {
        title: "Bộ xử lý",
        content: (
          <ul>
            <li>Intel Core i5 Alder Lake - 1235U</li>
            <li>Số nhân: 10</li>
            <li>Số luồng: 12</li>
            <li>Tốc độ CPU: 1.3GHz</li>
          </ul>
        ),
      },
      {
        title: "RAM, Ổ cứng",
        content: (
          <ul>
            <li>RAM: 8GB</li>
            <li>Loại RAM: DDR4</li>
            <li>Ổ cứng: 512GB SSD</li>
          </ul>
        ),
      },
      {
        title: "Màn hình",
        content: (
          <ul>
            <li>Màn hình: 14"</li>
            <li>Độ phân giải: Full HD (1920 x 1080)</li>
          </ul>
        ),
      },
      {
        title: "Card màn hình",
        content: (
          <ul>
            <li>Card màn hình: Intel Iris Xe Graphics</li>
          </ul>
        ),
      },
    ],
    promotions: [
      'Tặng túi chống sốc trị giá 300.000đ',
      'Giảm giá 10% khi mua kèm chuột và bàn phím',
    ],
    ...calculatePrices(18990000, 8),
    specs: [
      {
        icon: FaMemory,
        text: "RAM 8GB",
      },
      {
        icon: HiMiniCpuChip,
        text: "Intel Core i5-1235U",
      },
      {
        icon: FaWindows,
        text: "Windows 11 Home",
      },
    ],
    installment: "Trả góp 0%",
  },
  {
    id: 38,
    name: "Laptop Lenovo ThinkPad X1 Carbon i5 1235U/8GB/512GB SSD/Intel Iris Xe/Win11",
    image: "/images/i7.png",
    images: [
      "/images/laptop2.jpg",
      "/images/laptop2.1.jpg",
      "/images/laptop2.2.jpg",
    ],
    category: "Laptop",
    details: [
      {
        title: "Bộ xử lý",
        content: (
          <ul>
            <li>Intel Core i5 Alder Lake - 1235U</li>
            <li>Số nhân: 10</li>
            <li>Số luồng: 12</li>
            <li>Tốc độ CPU: 1.3GHz</li>
          </ul>
        ),
      },
      {
        title: "RAM, Ổ cứng",
        content: (
          <ul>
            <li>RAM: 8GB</li>
            <li>Loại RAM: DDR4</li>
            <li>Ổ cứng: 512GB SSD</li>
          </ul>
        ),
      },
      {
        title: "Màn hình",
        content: (
          <ul>
            <li>Màn hình: 14"</li>
            <li>Độ phân giải: Full HD (1920 x 1080)</li>
          </ul>
        ),
      },
      {
        title: "Card màn hình",
        content: (
          <ul>
            <li>Card màn hình: Intel Iris Xe Graphics</li>
          </ul>
        ),
      },
    ],
    promotions: [
      'Tặng túi chống sốc trị giá 300.000đ',
      'Giảm giá 10% khi mua kèm chuột và bàn phím',
    ],
    ...calculatePrices(18990000, 8),
    specs: [
      {
        icon: FaMemory,
        text: "RAM 8GB",
      },
      {
        icon: HiMiniCpuChip,
        text: "Intel Core i5-1235U",
      },
      {
        icon: FaWindows,
        text: "Windows 11 Home",
      },
    ],
    installment: "Trả góp 0%",
  },
  {
    id: 39,
    name: "Laptop Lenovo ThinkPad X1 Carbon i5 1235U/8GB/512GB SSD/Intel Iris Xe/Win11",
    image: "/images/i8.png",
    images: [
      "/images/laptop2.jpg",
      "/images/laptop2.1.jpg",
      "/images/laptop2.2.jpg",
    ],
    category: "Laptop",
    details: [
      {
        title: "Bộ xử lý",
        content: (
          <ul>
            <li>Intel Core i5 Alder Lake - 1235U</li>
            <li>Số nhân: 10</li>
            <li>Số luồng: 12</li>
            <li>Tốc độ CPU: 1.3GHz</li>
          </ul>
        ),
      },
      {
        title: "RAM, Ổ cứng",
        content: (
          <ul>
            <li>RAM: 8GB</li>
            <li>Loại RAM: DDR4</li>
            <li>Ổ cứng: 512GB SSD</li>
          </ul>
        ),
      },
      {
        title: "Màn hình",
        content: (
          <ul>
            <li>Màn hình: 14"</li>
            <li>Độ phân giải: Full HD (1920 x 1080)</li>
          </ul>
        ),
      },
      {
        title: "Card màn hình",
        content: (
          <ul>
            <li>Card màn hình: Intel Iris Xe Graphics</li>
          </ul>
        ),
      },
    ],
    promotions: [
      'Tặng túi chống sốc trị giá 300.000đ',
      'Giảm giá 10% khi mua kèm chuột và bàn phím',
    ],
    ...calculatePrices(18990000, 8),
    specs: [
      {
        icon: FaMemory,
        text: "RAM 8GB",
      },
      {
        icon: HiMiniCpuChip,
        text: "Intel Core i5-1235U",
      },
      {
        icon: FaWindows,
        text: "Windows 11 Home",
      },
    ],
    installment: "Trả góp 0%",
  },
  {
    id: 40,
    name: "Laptop Lenovo ThinkPad X1 Carbon i5 1235U/8GB/512GB SSD/Intel Iris Xe/Win11",
    image: "/images/i9.png",
    images: [
      "/images/laptop2.jpg",
      "/images/laptop2.1.jpg",
      "/images/laptop2.2.jpg",
    ],
    category: "Laptop",
    details: [
      {
        title: "Bộ xử lý",
        content: (
          <ul>
            <li>Intel Core i5 Alder Lake - 1235U</li>
            <li>Số nhân: 10</li>
            <li>Số luồng: 12</li>
            <li>Tốc độ CPU: 1.3GHz</li>
          </ul>
        ),
      },
      {
        title: "RAM, Ổ cứng",
        content: (
          <ul>
            <li>RAM: 8GB</li>
            <li>Loại RAM: DDR4</li>
            <li>Ổ cứng: 512GB SSD</li>
          </ul>
        ),
      },
      {
        title: "Màn hình",
        content: (
          <ul>
            <li>Màn hình: 14"</li>
            <li>Độ phân giải: Full HD (1920 x 1080)</li>
          </ul>
        ),
      },
      {
        title: "Card màn hình",
        content: (
          <ul>
            <li>Card màn hình: Intel Iris Xe Graphics</li>
          </ul>
        ),
      },
    ],
    promotions: [
      'Tặng túi chống sốc trị giá 300.000đ',
      'Giảm giá 10% khi mua kèm chuột và bàn phím',
    ],
    ...calculatePrices(18990000, 8),
    specs: [
      {
        icon: FaMemory,
        text: "RAM 8GB",
      },
      {
        icon: HiMiniCpuChip,
        text: "Intel Core i5-1235U",
      },
      {
        icon: FaWindows,
        text: "Windows 11 Home",
      },
    ],
    installment: "Trả góp 0%",
  },
  {
    id: 41,
    name: "Laptop Lenovo ThinkPad X1 Carbon i5 1235U/8GB/512GB SSD/Intel Iris Xe/Win11",
    image: "/images/i10.png",
    images: [
      "/images/laptop2.jpg",
      "/images/laptop2.1.jpg",
      "/images/laptop2.2.jpg",
    ],
    category: "Laptop",
    details: [
      {
        title: "Bộ xử lý",
        content: (
          <ul>
            <li>Intel Core i5 Alder Lake - 1235U</li>
            <li>Số nhân: 10</li>
            <li>Số luồng: 12</li>
            <li>Tốc độ CPU: 1.3GHz</li>
          </ul>
        ),
      },
      {
        title: "RAM, Ổ cứng",
        content: (
          <ul>
            <li>RAM: 8GB</li>
            <li>Loại RAM: DDR4</li>
            <li>Ổ cứng: 512GB SSD</li>
          </ul>
        ),
      },
      {
        title: "Màn hình",
        content: (
          <ul>
            <li>Màn hình: 14"</li>
            <li>Độ phân giải: Full HD (1920 x 1080)</li>
          </ul>
        ),
      },
      {
        title: "Card màn hình",
        content: (
          <ul>
            <li>Card màn hình: Intel Iris Xe Graphics</li>
          </ul>
        ),
      },
    ],
    promotions: [
      'Tặng túi chống sốc trị giá 300.000đ',
      'Giảm giá 10% khi mua kèm chuột và bàn phím',
    ],
    ...calculatePrices(18990000, 8),
    specs: [
      {
        icon: FaMemory,
        text: "RAM 8GB",
      },
      {
        icon: HiMiniCpuChip,
        text: "Intel Core i5-1235U",
      },
      {
        icon: FaWindows,
        text: "Windows 11 Home",
      },
    ],
    installment: "Trả góp 0%",
  },
  {
    id: 42,
    name: "Laptop Lenovo ThinkPad X1 Carbon i5 1235U/8GB/512GB SSD/Intel Iris Xe/Win11",
    image: "/images/i11.png",
    images: [
      "/images/laptop2.jpg",
      "/images/laptop2.1.jpg",
      "/images/laptop2.2.jpg",
    ],
    category: "Laptop",
    details: [
      {
        title: "Bộ xử lý",
        content: (
          <ul>
            <li>Intel Core i5 Alder Lake - 1235U</li>
            <li>Số nhân: 10</li>
            <li>Số luồng: 12</li>
            <li>Tốc độ CPU: 1.3GHz</li>
          </ul>
        ),
      },
      {
        title: "RAM, Ổ cứng",
        content: (
          <ul>
            <li>RAM: 8GB</li>
            <li>Loại RAM: DDR4</li>
            <li>Ổ cứng: 512GB SSD</li>
          </ul>
        ),
      },
      {
        title: "Màn hình",
        content: (
          <ul>
            <li>Màn hình: 14"</li>
            <li>Độ phân giải: Full HD (1920 x 1080)</li>
          </ul>
        ),
      },
      {
        title: "Card màn hình",
        content: (
          <ul>
            <li>Card màn hình: Intel Iris Xe Graphics</li>
          </ul>
        ),
      },
    ],
    promotions: [
      'Tặng túi chống sốc trị giá 300.000đ',
      'Giảm giá 10% khi mua kèm chuột và bàn phím',
    ],
    ...calculatePrices(18990000, 8),
    specs: [
      {
        icon: FaMemory,
        text: "RAM 8GB",
      },
      {
        icon: HiMiniCpuChip,
        text: "Intel Core i5-1235U",
      },
      {
        icon: FaWindows,
        text: "Windows 11 Home",
      },
    ],
    installment: "Trả góp 0%",
  },
  {
    id: 43,
    name: "Laptop Lenovo ThinkPad X1 Carbon i5 1235U/8GB/512GB SSD/Intel Iris Xe/Win11",
    image: "/images/i12.png",
    images: [
      "/images/laptop2.jpg",
      "/images/laptop2.1.jpg",
      "/images/laptop2.2.jpg",
    ],
    category: "Laptop",
    details: [
      {
        title: "Bộ xử lý",
        content: (
          <ul>
            <li>Intel Core i5 Alder Lake - 1235U</li>
            <li>Số nhân: 10</li>
            <li>Số luồng: 12</li>
            <li>Tốc độ CPU: 1.3GHz</li>
          </ul>
        ),
      },
      {
        title: "RAM, Ổ cứng",
        content: (
          <ul>
            <li>RAM: 8GB</li>
            <li>Loại RAM: DDR4</li>
            <li>Ổ cứng: 512GB SSD</li>
          </ul>
        ),
      },
      {
        title: "Màn hình",
        content: (
          <ul>
            <li>Màn hình: 14"</li>
            <li>Độ phân giải: Full HD (1920 x 1080)</li>
          </ul>
        ),
      },
      {
        title: "Card màn hình",
        content: (
          <ul>
            <li>Card màn hình: Intel Iris Xe Graphics</li>
          </ul>
        ),
      },
    ],
    promotions: [
      'Tặng túi chống sốc trị giá 300.000đ',
      'Giảm giá 10% khi mua kèm chuột và bàn phím',
    ],
    ...calculatePrices(18990000, 8),
    specs: [
      {
        icon: FaMemory,
        text: "RAM 8GB",
      },
      {
        icon: HiMiniCpuChip,
        text: "Intel Core i5-1235U",
      },
      {
        icon: FaWindows,
        text: "Windows 11 Home",
      },
    ],
    installment: "Trả góp 0%",
  },
  {
    id: 44,
    name: "Laptop Lenovo ThinkPad X1 Carbon i5 1235U/8GB/512GB SSD/Intel Iris Xe/Win11",
    image: "/images/laptop2.jpg",
    images: [
      "/images/laptop2.jpg",
      "/images/laptop2.1.jpg",
      "/images/laptop2.2.jpg",
    ],
    category: "Laptop",
    details: [
      {
        title: "Bộ xử lý",
        content: (
          <ul>
            <li>Intel Core i5 Alder Lake - 1235U</li>
            <li>Số nhân: 10</li>
            <li>Số luồng: 12</li>
            <li>Tốc độ CPU: 1.3GHz</li>
          </ul>
        ),
      },
      {
        title: "RAM, Ổ cứng",
        content: (
          <ul>
            <li>RAM: 8GB</li>
            <li>Loại RAM: DDR4</li>
            <li>Ổ cứng: 512GB SSD</li>
          </ul>
        ),
      },
      {
        title: "Màn hình",
        content: (
          <ul>
            <li>Màn hình: 14"</li>
            <li>Độ phân giải: Full HD (1920 x 1080)</li>
          </ul>
        ),
      },
      {
        title: "Card màn hình",
        content: (
          <ul>
            <li>Card màn hình: Intel Iris Xe Graphics</li>
          </ul>
        ),
      },
    ],
    promotions: [
      'Tặng túi chống sốc trị giá 300.000đ',
      'Giảm giá 10% khi mua kèm chuột và bàn phím',
    ],
    ...calculatePrices(18990000, 8),
    specs: [
      {
        icon: FaMemory,
        text: "RAM 8GB",
      },
      {
        icon: HiMiniCpuChip,
        text: "Intel Core i5-1235U",
      },
      {
        icon: FaWindows,
        text: "Windows 11 Home",
      },
    ],
    installment: "Trả góp 0%",
  },

];

export default allProducts;
