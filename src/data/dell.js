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
        id: 1,
        name: "Laptop Dell Inspiron 15 3520 i5 1235U/16GB/512GB/120Hz/OfficeHS/Win11 (N5I5052W1)",
        price: 20010900,
        image: "/images/laptop1.jpg",
        images: [
          "/images/laptop1.jpg",
          "/images/laptop1.1.jpg",
          "/images/laptop1.2.jpg",
          "/images/laptop1.3.jpg",
        ],
        
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li>Intel Core i5 Alder Lake - 1235U</li>
              <li>Số nhân: 10</li>
              <li>Số luồng: 12</li>
              <li>Tốc độ CPU: 1.3Ghz</li>
            </ul>
          )
        },
          {title: "RAM, Ổ cứng", 
             content:(
              <ul>
                <li> RAM: 16GB</li>
                <li>Loại RAM: DDR4 2 khe (1 khe 8 GB + 1 khe 8 GB)</li>
                <li>Ổ cứng: 512GB SSD</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình: 15.6"</li>
              <li>Độ phần giải: Full HD (1920 x 1080)</li>
              <li>Tần số quét: 120Hz</li>
            </ul>  
            )
          },
          {title: "Card màn hình", 
            content: (
            <ul>
              <li>Card màn hình: Card tích hợp - Intel Iris Xe Graphics</li>
              
            </ul>  
            )
          },
          
        ],
        promotions: [
          'Tặng balo Laptop trị giá 900.000đ',
          'Tặng phụ kien Laptop trị giá 1.000.000đ'
        ],
        ...calculatePrices(21990000, 9),
        specs: [
          { 
            icon: FaMemory, 
            text: "RAM 16GB" 
          },
          { 
            icon: HiMiniCpuChip, 
            text: "Intel Core i5-1235U" 
          },
          { 
            icon: FaWindows, 
            text: "Tặng Office Home&Student" 
          }
        ],
        installment: "Trả góp 0%",
        
      },
      {
        id: 2,
        name: "Laptop Dell Latitude 3440 i5 1235U/16GB/512GB/Win11 (L3440-I51235U-16G512G)",
        image: "/images/laptop2.jpg",
        price: 22091500,
        images: [
          "/images/laptop2.jpg",
          "/images/laptop2.1.jpg",
          "/images/laptop2.2.jpg",
          "/images/laptop2.3.jpg",
        ],
        ...calculatePrices(25990000, 15),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li>Intel Core i5 Alder Lake - 1235U</li>
              <li>Số nhân: 10</li>
              <li>Số luồng: 12</li>
              <li>Tốc độ CPU: 1.3Ghz</li>
            </ul>
          )
        },
          {title: "RAM, Ổ cứng", 
             content:(
              <ul>
                <li> RAM: 16GB</li>
                <li>Loại RAM: DDR4 2 khe (1 khe 8 GB + 1 khe 8 GB)</li>
                <li>Ổ cứng: 512GB SSD</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình: 14"</li>
              <li>Độ phần giải: Full HD (1920 x 1080)</li>
              <li>Tần số quét: 60Hz</li>
            </ul>  
            )
          },
          {title: "Card màn hình", 
            content: (
            <ul>
             
              
            </ul>  
            )
          },
          
        ],
        specs: [
          { 
            icon: FaMemory, 
            text: "RAM 16GB" 
          },
          { 
            icon: HiMiniCpuChip, 
            text: "Intel Core i5-1235U" 
          },
          { 
            icon: FaWindows, 
            text: "Tặng Office Home&Student" 
          }
        ],
        installment: "Trả góp 0%",
      
      },
      {
        id: 3,
        name: "Laptop Dell Inspiron 15 3530 i7 1355U/16GB/1TB/120Hz/OfficeHS/Win11 (P16WD)",
        image: "/images/laptop3.jpg",
        price:22091500,
        images: [
          "/images/laptop3.jpg",
          "/images/laptop3.1.jpg",
          "/images/laptop3.2.jpg",
          "/images/laptop3.3.jpg",
        ],
        ...calculatePrices(25990000, 15),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li>Intel Core i7 Raptor Lake - 1355U</li>
              <li>Số nhân: 10</li>
              <li>Số luồng: 12</li>
              <li>Tốc độ CPU: ...</li>
            </ul>
          )
        },
          {title: "RAM, Ổ cứng", 
             content:(
              <ul>
                <li> RAM: 16GB</li>
                <li>Loại RAM: DDR4 2 khe (1 khe 8 GB + 1 khe 8 GB)</li>
                <li>Ổ cứng: 1 TB SSD M.2 PCIe</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình: 15.6"</li>
              <li>Độ phần giải: Full HD (1920 x 1080)</li>
              <li>Tần số quét: 120Hz</li>
            </ul>  
            )
          },
          {title: "Card màn hình", 
            content: (
            <ul>
              <li>Card màn hình: Card tích hợp - Intel Iris Xe Graphics</li>
            </ul>  
            )
          },
          
        ],
        specs: [
          { 
            icon: FaMemory, 
            text: "RAM 16GB" 
          },
          { 
            icon: HiMiniCpuChip, 
            text: "Intel Core i7 Raptor Lake - 1355U" 
          },
          { 
            icon: FaWindows, 
            text: "Tặng Office Home&Student" 
          }
        ],
        installment: "Trả góp 0%",
      
      },
      {
        id: 4,
        name: "Laptop Dell Latitude 3440 i5 1235U/16GB/512GB/Win11 (L3440-I51235U-16G512G)",
        image: "/images/laptop4.jpg",
        price: 18590700,
        images: [
          "/images/laptop4.jpg",
          "/images/laptop4.1.jpg",
          "/images/laptop4.2.jpg",
          "/images/laptop4.3.jpg",
        ],
        ...calculatePrices(19990000, 7),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li>Intel Core i5 Raptor Lake - 1335U</li>
              <li>Số nhân: 10</li>
              <li>Số luồng: 12</li>
              <li>Tốc độ CPU: 1.3Ghz</li>
            </ul>
          )
        },
          {title: "RAM, Ổ cứng", 
             content:(
              <ul>
                <li> RAM: 16GB</li>
                <li>Loại RAM: DDR4 2 khe (1 khe 8 GB + 1 khe 8 GB)</li>
                <li>Ổ cứng: 512 GB SSD NVMe PCIe</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình: 15.6"</li>
              <li>Độ phần giải: Full HD (1920 x 1080)</li>
              <li>Tần số quét: 120Hz</li>
            </ul>  
            )
          },
          {title: "Card màn hình", 
            content: (
              <ul>
                <li>Card tích hợp - Intel Iris Xe Graphics</li>
              </ul>  
            )
          },
          
        ],
        specs: [
          { 
            icon: FaMemory, 
            text: "RAM 16GB" 
          },
          { 
            icon: HiMiniCpuChip, 
            text: "Intel Core i5-1335U" 
          },
          { 
            icon: FaWindows, 
            text: "Tặng Office Home&Student" 
          }
        ],
        installment: "Trả góp 0%",
      
      },
      {
        id: 5,
        name: "Laptop Dell Inspiron 15 3530 i7 1355U/16GB/512GB/120Hz/OfficeHS/Win11 (71043888)",
        image: "/images/laptop5.jpg",
        price:20822700,
        images: [
          "/images/laptop5.jpg",
          "/images/laptop5.1.jpg",
          "/images/laptop5.2.jpg",
          "/images/laptop5.3.jpg",
        ],
        ...calculatePrices(22390000, 7),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li>Intel Core i7 Raptor Lake - 1355U</li>
              <li>Số nhân: 10</li>
              <li>Số luồng: 12</li>
              <li>Tốc độ CPU: 1.7Ghz</li>
            </ul>
          )
        },
          {title: "RAM, Ổ cứng", 
             content:(
              <ul>
                <li> RAM: 16GB</li>
                <li>Loại RAM: DDR4 2 khe (1 khe 8 GB + 1 khe 8 GB)</li>
                <li>Ổ cứng: 512 GB SSD NVMe PCIe</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình: 15.6"</li>
              <li>Độ phần giải: Full HD (1920 x 1080)</li>
              <li>Tần số quét: 120Hz</li>
            </ul>  
            )
          },
          {title: "Card màn hình", 
            content: (
            <ul>
              <li>Card tích hợp - Intel Iris Xe Graphics</li>
            </ul>  
            )
          },
          
        ],
        specs: [
          { 
            icon: FaMemory, 
            text: "RAM 16GB" 
          },
          { 
            icon: HiMiniCpuChip, 
            text: "Intel Core i7 - 1355U" 
          },
          { 
            icon: FaWindows, 
            text: "Tặng Office Home&Student" 
          }
        ],
        installment: "Trả góp 0%",
      
      },
      {
        id: 6,
        name: "Laptop Dell Inspiron 14 5440 Core 7 150U/16GB/1TB/OfficeHS/Win11 (7FN5J)",
        image: "/images/laptop6.jpg",
        price : 25100700,
        images: [
          "/images/laptop6.jpg",
          "/images/laptop6.1.jpg",
          "/images/laptop6.2.jpg",
          "/images/laptop6.3.jpg",
        ],
        ...calculatePrices(26990000, 7),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li>Intel Core 7 Raptor Lake - 150U</li>
              <li>Số nhân: 10</li>
              <li>Số luồng: 12</li>
              <li>Tốc độ CPU: ...</li>
            </ul>
          )
        },
          {title: "RAM, Ổ cứng", 
             content:(
              <ul>
                <li> RAM: 16GB</li>
                <li>Loại RAM: DDR5 2 khe (1 khe 8 GB + 1 khe 8 GB)</li>
                <li>Ổ cứng: 1 TB SSD M.2 PCIe</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình: 14"</li>
              <li>Độ phần giải: Full HD+ </li>
              <li>Tần số quét: 60Hz</li>
            </ul>  
            )
          },
          {title: "Card màn hình", 
            content: (
            <ul>
              <li>Card tích hợp - Intel Graphics</li>
            </ul>  
            )
          },
          
        ],
        specs: [
          { 
            icon: FaMemory, 
            text: "RAM 16GB" 
          },
          { 
            icon: HiMiniCpuChip, 
            text: "Intel Core 7 - 150U" 
          },
          { 
            icon: FaWindows, 
            text: "Tặng Office Home&Student" 
          }
        ],
        installment: "Trả góp 0%",
      
      },
      {
        id: 7,
        name: "Laptop Dell Inspiron 16 5640 Core 7 150U/16GB/1TB/2GB MX570A/OfficeHS/Win11 (KHPF5)",
        image: "/images/laptop7.jpg",
        price: 28015015,
        images: [
          "/images/laptop7.jpg",
          "/images/laptop7.1.jpg",
          "/images/laptop7.2.jpg",
          "/images/laptop7.3.jpg",
        ],
        ...calculatePrices(29490000, 5),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li>Intel Core 7 Raptor Lake - 150U</li>
              <li>Số nhân: 10</li>
              <li>Số luồng: 12</li>
              <li>Tốc độ CPU:....</li>
            </ul>
          )
        },
          {title: "RAM, Ổ cứng", 
             content:(
              <ul>
                <li> RAM: 16GB</li>
                <li>Loại RAM: DDR5 2 khe (1 khe 8 GB + 1 khe 8 GB)</li>
                <li>Ổ cứng: 1 TB SSD M.2 PCIe</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình: 16"</li>
              <li>Độ phần giải: Full HD (1920 x 1200)</li>
              <li>Tần số quét: 60Hz</li>
            </ul>  
            )
          },
          {title: "Card màn hình", 
            content: (
            <ul>
              <li>Card rời - NVIDIA Geforce MX570A, 2 GB</li>
            </ul>  
            )
          },
          
        ],
        specs: [
          { 
            icon: FaMemory, 
            text: "RAM 16GB" 
          },
          { 
            icon: HiMiniCpuChip, 
            text: "Intel Core 7 - 150U" 
          },
          { 
            icon: FaWindows, 
            text: "Tặng Office Home&Student" 
          }
        ],
        installment: "Trả góp 0%",
      
      },
      {
        id: 8,
        name: "Laptop Dell Latitude 3540 i5 1235U/16GB/512GB/Win11 (71038100)",
        image: "/images/laptop8.jpg",
        price: 17.091000,
        images: [
          "/images/laptop8.jpg",
          "/images/laptop8.1.jpg",
          "/images/laptop8.2.jpg",
          "/images/laptop8.3.jpg",
        ],
        ...calculatePrices(18990000, 10),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li>Intel Core i5 Alder Lake - 1235U</li>
              <li>Số nhân: 10</li>
              <li>Số luồng: 12</li>
              <li>Tốc độ CPU: 1.3Ghz</li>
            </ul>
          )
        },
          {title: "RAM, Ổ cứng", 
             content:(
              <ul>
                <li> RAM: 16GB</li>
                <li>Loại RAM: DDR4 2 khe (1 khe 8 GB + 1 khe 8 GB)</li>
                <li>Ổ cứng: 512 GB SSD NVMe PCIe Gen 4.0</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình: 15.6"</li>
              <li>Độ phần giải: Full HD (1920 x 1080)</li>
              <li>Tần số quét: 60Hz</li>
            </ul>  
            )
          },
          {title: "Card màn hình", 
            content: (
            <ul>
               <li>Card tích hợp - Intel Iris Xe Graphics</li>
            </ul>  
            )
          },
          
        ],
        specs: [
          { 
            icon: FaMemory, 
            text: "RAM 16GB" 
          },
          { 
            icon: HiMiniCpuChip, 
            text: "Intel Core i5 - 1235U" 
          },
          { 
            icon: FaWindows, 
            text: "Tặng Office Home&Student" 
          }
        ],
        installment: "Trả góp 0%",
      
      },
      {
        id: 9,
        name: "Laptop Dell Latitude 3440 i7 1355U/16GB/512GB/Win11 (71038103)",
        image: "/images/laptop9.jpg",
        price:24.560900,
        images: [
          "/images/laptop9.jpg",
          "/images/laptop9.1.jpg",
          "/images/laptop9.2.jpg",
          "/images/laptop9.3.jpg",
        ],
        ...calculatePrices(26990000, 9),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li>Intel Core i7 Raptor Lake - 1355U</li>
              <li>Số nhân: 10</li>
              <li>Số luồng: 12</li>
              <li>Tốc độ CPU: 1.7Ghz</li>
            </ul>
          )
        },
          {title: "RAM, Ổ cứng", 
             content:(
              <ul>
                <li> RAM: 16GB</li>
                <li>Loại RAM: DDR4 2 khe (1 khe 8 GB + 1 khe 8 GB)</li>
                <li>Ổ cứng: 512 GB SSD NVMe PCIe Gen 4.0</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình: 14"</li>
              <li>Độ phần giải: Full HD (1920 x 1080)</li>
              <li>Tần số quét: 60Hz</li>
            </ul>  
            )
          },
          {title: "Card màn hình", 
            content: (
            <ul>
              <li>Card tích hợp - Intel Iris Xe Graphics</li>
            </ul>  
            )
          },
          
        ],
        specs: [
          { 
            icon: FaMemory, 
            text: "RAM 16GB" 
          },
          { 
            icon: HiMiniCpuChip, 
            text: "Intel Core i7 - 1355U" 
          },
          { 
            icon: FaWindows, 
            text: "Tặng Office Home&Student" 
          }
        ],
        installment: "Trả góp 0%",
      
      },
      {
        id: 10,
        name: "Dell Inspiron 7440 Core 7 150U (N7440-C7U161W11IBU)",
        image: "/images/laptop10.jpg",
        price :32.765500,
        images: [
          "/images/laptop10.jpg",
          "/images/laptop10.1.jpg",
          "/images/laptop10.2.jpg",
          "/images/laptop10.3.jpg",
        ],
        ...calculatePrices(34490000, 5),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li>Intel Core 7 Raptor Lake - 150U</li>
              <li>Số nhân: 10</li>
              <li>Số luồng: 12</li>
              <li>Tốc độ CPU: ...</li>
            </ul>
          )
        },
          {title: "RAM, Ổ cứng", 
             content:(
              <ul>
                <li> RAM: 16GB</li>
                <li>Loại RAM: DDR5 2 khe (1 khe 8 GB + 1 khe 8 GB)</li>
                <li>Ổ cứng: 1 TB SSD M.2 PCIe</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình: 14"</li>
              <li>Độ phần giải: Full HD+</li>
              <li>Tần số quét: 60Hz</li>
            </ul>  
            )
          },
          {title: "Card màn hình", 
            content: (
            <ul>
              <li>Card tích hợp - Intel Graphics</li>
            </ul>  
            )
          },
          
        ],
        specs: [
          { 
            icon: FaMemory, 
            text: "RAM 16GB" 
          },
          { 
            icon: HiMiniCpuChip, 
            text: "Intel Core 7 - 150U" 
          },
          { 
            icon: FaWindows, 
            text: "Tặng Office Home&Student" 
          }
        ],
        installment: "Trả góp 0%",
      
      },
      {
        id: 11,
        name: "Dell XPS 13 9340 Ultra 7 155H (HXRGT)",
        image: "/images/laptop11.jpg",
        price : 56.390600,
        images: [
          "/images/laptop11.jpg",
          "/images/laptop11.1.jpg",
          "/images/laptop11.2.jpg",
          "/images/laptop11.3.jpg",
        ],
        ...calculatePrices(59990000, 6),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li>Intel Core Ultra 7 Meteor Lake - 155H</li>
              <li>Số nhân: 16</li>
              <li>Số luồng: 22</li>
              <li>Tốc độ CPU: ...</li>
            </ul>
          )
        },
          {title: "RAM, Ổ cứng", 
             content:(
              <ul>
                <li> RAM: 16GB</li>
                <li>Loại RAM: LPDDR5X (Onboard)</li>
                <li>Ổ cứng: 1 TB SSD M.2 PCIe</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình: 13.4"</li>
              <li>Độ phần giải: QHD+ (2560 x 1600)</li>
              <li>Tần số quét: 60Hz</li>
            </ul>  
            )
          },
          {title: "Card màn hình", 
            content: (
            <ul>
                <li>Card tích hợp - Intel Arc Graphics</li>
            </ul>  
            )
          },
          
        ],
        specs: [
          { 
            icon: FaMemory, 
            text: "RAM 16GB" 
          },
          { 
            icon: HiMiniCpuChip, 
            text: "Intel Core Ultra 7 - 155H" 
          },
          { 
            icon: FaWindows, 
            text: "Tặng Office Home&Student" 
          }
        ],
        installment: "Trả góp 0%",
      
      },
      {
        id: 12,
        name: "Dell G15 5530 i9 13900HX (i9HX161W11GR4060)",
        image: "/images/laptop12.jpg",
        price: 41.109100,
        images: [
          "/images/laptop12.jpg",
          "/images/laptop12.1.jpg",
          "/images/laptop12.2.jpg",
          "/images/laptop12.3.jpg",
        ],
        ...calculatePrices(46190000, 11),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li>Intel Core i9 Raptor Lake - 13900HX</li>
              <li>Số nhân: 24</li>
              <li>Số luồng: 32</li>
              <li>Tốc độ CPU: 3.90Ghz</li>
            </ul>
          )
        },
          {title: "RAM, Ổ cứng", 
             content:(
              <ul>
                <li> RAM: 16GB</li>
                <li>Loại RAM: DDR5 2 khe (1 khe 8 GB + 1 khe 8 GB)</li>
                <li>Ổ cứng: 1 TB SSD M.2 PCIe Gen 4 (Có thể tháo ra, lắp thanh khác tối đa 2 TB)</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình: 15.6"</li>
              <li>Độ phần giải: Full HD (1920 x 1080)</li>
              <li>Tần số quét: 165Hz</li>
            </ul>  
            )
          },
          {title: "Card màn hình", 
            content: (
            <ul>
              <li>Card rời - NVIDIA GeForce RTX 4060, 8 GB</li>
            </ul>  
            )
          },
          
        ],
        specs: [
          { 
            icon: FaMemory, 
            text: "RAM 16GB" 
          },
          { 
            icon: HiMiniCpuChip, 
            text: "Intel Core i9 - 13900HX" 
          },
          { 
            icon: FaWindows, 
            text: "Tặng Office Home&Student" 
          }
        ],
        installment: "Trả góp 0%",
      
      },
      {
        id: 13,
        name: "Dell G15 5530 i7 13650HX (i7HX161W11GR4060)",
        image: "/images/laptop13.jpg",
        price : 41.109100,
        images: [
          "/images/laptop13.jpg",
          "/images/laptop13.1.jpg",
          "/images/laptop13.2.jpg",
          "/images/laptop13.3.jpg",
        ],
        ...calculatePrices(41990000, 11),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li>Intel Core i7 Raptor Lake - 13650HX</li>
              <li>Số nhân: 14</li>
              <li>Số luồng: 20</li>
              <li>Tốc độ CPU: 2.6Ghz</li>
            </ul>
          )
        },
          {title: "RAM, Ổ cứng", 
             content:(
              <ul>
                <li> RAM: 16GB</li>
                <li>Loại RAM: DDR5 2 khe (1 khe 8 GB + 1 khe 8 GB)</li>
                <li>Ổ cứng: 1 TB SSD M.2 PCIe Gen 4 (Có thể tháo ra, lắp thanh khác tối đa 2 TB)</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình: 15.6"</li>
              <li>Độ phần giải: Full HD (1920 x 1080)</li>
              <li>Tần số quét: 165Hz</li>
            </ul>  
            )
          },
          {title: "Card màn hình", 
            content: (
            <ul>
              <li>Card rời - NVIDIA GeForce RTX 4060, 8 GB</li>
            </ul>  
            )
          },
          
        ],
        specs: [
          { 
            icon: FaMemory, 
            text: "RAM 16GB" 
          },
          { 
            icon: HiMiniCpuChip, 
            text: "Intel Core i7 - 13650HX" 
          },
          { 
            icon: FaWindows, 
            text: "Tặng Office Home&Student" 
          }
        ],
        installment: "Trả góp 0%",
      
      },
      {
        id: 14,
        name: "Dell Vostro 3420 i5 1235U (V4I5702W1)",
        
        image: "/images/laptop14.jpg",
        price: 37.371100,
        images: [
          "/images/laptop14.jpg",
          "/images/laptop14.1.jpg",
          "/images/laptop14.2.jpg",
          "/images/laptop14.3.jpg",
        ],
        ...calculatePrices(16190000, 5),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li>Intel Core i5 Alder Lake - 1235U</li>
              <li>Số nhân: 10</li>
              <li>Số luồng: 12</li>
              <li>Tốc độ CPU: 1.3Ghz</li>
            </ul>
          )
        },
          {title: "RAM, Ổ cứng", 
             content:(
              <ul>
                <li> RAM: 8GB</li>
                <li>Loại RAM: DDR4 2 khe (1 khe 8 GB + 1 khe rời)</li>
                <li>Ổ cứng: 512 GB SSD NVMe PCIe (Có thể tháo ra, lắp thanh khác tối đa 2 TB)</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình: 14"</li>
              <li>Độ phần giải: Full HD (1920 x 1080)</li>
              <li>Tần số quét: 60Hz</li>
            </ul>  
            )
          },
          {title: "Card màn hình", 
            content: (
            <ul>
              <li>Card tích hợp - Intel UHD Graphics (Iris Xe Graphics chỉ hoạt động với RAM kênh đôi)</li>
            </ul>  
            )
          },
          
        ],
        specs: [
          { 
            icon: FaMemory, 
            text: "RAM 16GB" 
          },
          { 
            icon: HiMiniCpuChip, 
            text: "Intel Core i5-1235U" 
          },
          { 
            icon: FaWindows, 
            text: "Tặng Office Home&Student" 
          }
        ],
        installment: "Trả góp 0%",
      
      },
      {
        id: 15,
        name: "Laptop Dell G16 	Intel Core i7-12700H",
        image: "/images/laptop15.jpg",
        price: 31.441500,
        images: [
          "/images/laptop15.jpg",
          "/images/laptop15.1.jpg",
          "/images/laptop15.2.jpg",
          "/images/laptop15.3.jpg",
        ],
        ...calculatePrices(36990000, 15),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li>Intel Core i7-12700H</li>
              <li>Số nhân: 14</li>
              <li>Số luồng: 20</li>
              <li>Tốc độ CPU: 4.7Ghz</li>
            </ul>
          )
        },
          {title: "RAM, Ổ cứng", 
             content:(
              <ul>
                <li> RAM: 16GB</li>
                <li>Loại RAM: DDR5 2 khe (1 khe 8 GB + 1 khe 8 GB)</li>
                <li>Ổ cứng: SSD M.2 NMVe 512GB</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình: 16"</li>
              <li>Độ phần giải: QHD+ (2560x1600)</li>
              <li>Tần số quét: 165Hz</li>
            </ul>  
            )
          },
          {title: "Card màn hình", 
            content: (
            <ul>
              <li>NVIDIA GeForce RTX 3060 6GB GDDR6 (140W)</li>
            </ul>  
            )
          },
          
        ],
        specs: [
          { 
            icon: FaMemory, 
            text: "RAM 16GB" 
          },
          { 
            icon: HiMiniCpuChip, 
            text: "Intel Core i7-12700H " 
          },
          { 
            icon: FaWindows, 
            text: "Tặng Office Home&Student" 
          }
        ],
        installment: "Trả góp 0%",
      
      },
      {
        id: 16,
        name: "Dell Inspiron 14 5430 i5 1340P (N5430-i5P165W11SL2050)",
        image: "/images/laptop16.jpg",
        price : 25.321500,
        images: [
          "/images/laptop16.jpg",
          "/images/laptop16.1.jpg",
          "/images/laptop16.2.jpg",
          "/images/laptop16.3.jpg",
        ],
        ...calculatePrices(29790000, 15),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li>Intel Core i5 Raptor Lake - 1340P</li>
              <li>Số nhân: 12</li>
              <li>Số luồng: 16</li>
              <li>Tốc độ CPU: 1.9Ghz</li>
            </ul>
          )
        },
          {title: "RAM, Ổ cứng", 
             content:(
              <ul>
                <li> RAM: LPDDR5 (Onboard)</li>
                <li>Loại RAM: DDR4 2 khe (1 khe 8 GB + 1 khe 8 GB)</li>
                <li>Ổ cứng: 512 GB SSD NVMe PCIe (Có thể tháo ra, lắp thanh khác tối đa 2 TB (2280) / 1 TB (2230))</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình: 14"</li>
              <li>Độ phần giải: QHD+ (2560 x 1600) 16:10</li>
              <li>Tần số quét: 120Hz</li>
            </ul>  
            )
          },
          {title: "Card màn hình", 
            content: (
            <ul>
                <li>Card rời - NVIDIA GeForce RTX 2050, 4 GB</li>
            </ul>  
            )
          },
          
        ],
        specs: [
          { 
            icon: FaMemory, 
            text: "RAM 16GB" 
          },
          { 
            icon: HiMiniCpuChip, 
            text: "Intel Core i5-1235U" 
          },
          { 
            icon: FaWindows, 
            text: "Tặng Office Home&Student" 
          }
        ],
        installment: "Trả góp 0%",
      
      },
      {
        id: 17,
        name: "Dell Precision 15 3581 i7 13800H (71024677)",
        image: "/images/laptop17.jpg",
        price : 25.321500,
        images: [
          "/images/laptop17.jpg",
          "/images/laptop17.1.jpg",
          "/images/laptop17.2.jpg",
          "/images/laptop17.3.jpg",
        ],
        ...calculatePrices(57290000, 2),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li>Intel Core i7 Raptor Lake - 13800H</li>
              <li>Số nhân: 14</li>
              <li>Số luồng: 20</li>
              <li>Tốc độ CPU: 2.5Ghz</li>
            </ul>
          )
        },
          {title: "RAM, Ổ cứng", 
             content:(
              <ul>
                <li> RAM: 32GB</li>
                <li>Loại RAM: DDR5 2 khe (1 khe 16 GB + 1 khe 16 GB)</li>
                <li>Ổ cứng: 1 TB SSD M.2 PCIe</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình: 15.6"</li>
              <li>Độ phần giải: Full HD (1920 x 1080)</li>
              <li>Tần số quét: 60Hz</li>
            </ul>  
            )
          },
          {title: "Card màn hình", 
            content: (
            <ul>
              <li>Card rời - NVIDIA GeForce RTX A500, 4 GB</li>
            </ul>  
            )
          },
          
        ],
        specs: [
          { 
            icon: FaMemory, 
            text: "RAM 16GB" 
          },
          { 
            icon: HiMiniCpuChip, 
            text: "Intel Core i7 - 13800H" 
          },
          { 
            icon: FaWindows, 
            text: "Tặng Office Home&Student" 
          }
        ],
        installment: "Trả góp 0%",
      
      },
      {
        id: 18,
        name: "Dell Vostro 15 3520 i5 1235U (i5U165W11GRU)",
        image: "/images/laptop18.jpg",
        price : 16.480300,
        images: [
          "/images/laptop18.jpg",
          "/images/laptop18.1.jpg",
          "/images/laptop18.2.jpg",
          "/images/laptop18.3.jpg",
        ],
        ...calculatePrices(16990000, 3),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li>Intel Core i5 Alder Lake - 1235U</li>
              <li>Số nhân: 10</li>
              <li>Số luồng: 12</li>
              <li>Tốc độ CPU: 1.3Ghz</li>
            </ul>
          )
        },
          {title: "RAM, Ổ cứng", 
             content:(
              <ul>
                <li> RAM: 16GB</li>
                <li>Loại RAM: DDR4 2 khe (1 khe 8 GB + 1 khe 8 GB)</li>
                <li>Ổ cứng: 512GB SSD</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình: 14"</li>
              <li>Độ phần giải: Full HD (1920 x 1080)</li>
              <li>Tần số quét: 60Hz</li>
            </ul>  
            )
          },
          {title: "Card màn hình", 
            content: (
            <ul>
             
              
            </ul>  
            )
          },
          
        ],
        specs: [
          { 
            icon: FaMemory, 
            text: "RAM 16GB" 
          },
          { 
            icon: HiMiniCpuChip, 
            text: "Intel Core i5-1235U" 
          },
          { 
            icon: FaWindows, 
            text: "Tặng Office Home&Student" 
          }
        ],
        installment: "Trả góp 0%",
      
      },
      {
        id: 19,
        name: "Dell Inspiron 14 5440 Core 7 150U (7FN5J)",
        image: "/images/laptop19.jpg",
        price : 25.100700,
        images: [
          "/images/laptop19.jpg",
          "/images/laptop19.1.jpg",
          "/images/laptop19.2.jpg",
          "/images/laptop19.3.jpg",
        ],
        ...calculatePrices(26990000, 7),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li>Intel Core 7 Raptor Lake - 150U</li>
              <li>Số nhân: 10</li>
              <li>Số luồng: 12</li>
              <li>Tốc độ CPU: 1.3Ghz</li>
            </ul>
          )
        },
          {title: "RAM, Ổ cứng", 
             content:(
              <ul>
                <li> RAM: 16GB</li>
                <li>Loại RAM: DDR4 2 khe (1 khe 8 GB + 1 khe 8 GB)</li>
                <li>Ổ cứng: 512GB SSD</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình: 14"</li>
              <li>Độ phần giải: Full HD (1920 x 1080)</li>
              <li>Tần số quét: 60Hz</li>
            </ul>  
            )
          },
          {title: "Card màn hình", 
            content: (
            <ul>
             
              
            </ul>  
            )
          },
          
        ],
        specs: [
          { 
            icon: FaMemory, 
            text: "RAM 16GB" 
          },
          { 
            icon: HiMiniCpuChip, 
            text: "Intel Core 7 - 150U" 
          },
          { 
            icon: FaWindows, 
            text: "Tặng Office Home&Student" 
          }
        ],
        installment: "Trả góp 0%",
      
      },
      {
        id: 20,
        name: "Dell XPS 13 9340 Ultra 5 125H (XPSU5934W1)",
        image: "/images/laptop20.jpg",
        price: 25.100700,
        images: [
          "/images/laptop20.jpg",
          "/images/laptop20.1.jpg",
          "/images/laptop20.2.jpg",
          "/images/laptop20.3.jpg",
        ],
        ...calculatePrices(56990000, 7),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li>Intel Core Ultra 5 Meteor Lake - 125H</li>
              <li>Số nhân: 10</li>
              <li>Số luồng: 12</li>
              <li>Tốc độ CPU: 1.3Ghz</li>
            </ul>
          )
        },
          {title: "RAM, Ổ cứng", 
             content:(
              <ul>
                <li> RAM: 16GB</li>
                <li>Loại RAM: DDR4 2 khe (1 khe 8 GB + 1 khe 8 GB)</li>
                <li>Ổ cứng: 512GB SSD</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình: 14"</li>
              <li>Độ phần giải: Full HD (1920 x 1080)</li>
              <li>Tần số quét: 60Hz</li>
            </ul>  
            )
          },
          {title: "Card màn hình", 
            content: (
            <ul>
             
              
            </ul>  
            )
          },
          
        ],
        specs: [
          { 
            icon: FaMemory, 
            text: "RAM 16GB" 
          },
          { 
            icon: HiMiniCpuChip, 
            text: "Intel Core Ultra 5 Meteor Lake - 125H" 
          },
          { 
            icon: FaWindows, 
            text: "Tặng Office Home&Student" 
          }
        ],
        installment: "Trả góp 0%",
      
      },
];

export default allProducts;
