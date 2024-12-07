
// import { FaMemory, FaMicrochip, FaWindows } from 'react-icons/fa';
// import { HiMiniCpuChip } from "react-icons/hi2";
import './products.css'
// Tinh toan % giam gia
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
    {
        id: 45,
        name: "Laptop cũ Asus X456UA 15.6 inch, Core i5-6200U, Ram 8GB, SSD 128GB",
        image: "/images/laptop1.webp",
        images: [
          "/images/laptop1.webp",
          "/images/laptop1.1.webp",
          "/images/laptop1.2.webp",
          "/images/laptop1.3.webp",
          "/images/laptop1.4.webp",
        ],
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li> Intel Core thế hệ 6 Core i5-6200U</li>
              <li>Số nhân: 10</li>
              <li>Số luồng: 12</li>
              <li>Tốc độ CPU: 2.3-2.8Ghz</li>
            </ul>
          )
        },
          {title: "RAM, Ổ cứng", 
             content:(
              <ul>
                <li> RAM: 8GB</li>
                <li>Loại RAM:  SODIM DDR3L kênh đôi (2 thanh 4GB)</li>
                <li>Ổ cứng: SSD 128GB</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình:15,6inch - tỉ lệ (16:9)"</li>
              <li>Độ phần giải: (1366x768) </li>
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
          'Tặng balo Laptop trị giá 599.000đ',
          'Tặng phụ kien Laptop trị giá 1.000.000đ'
        ],
        ...calculatePrices(31730000, 13),
        installment: "Trả góp 0%",
        
      },
      {
        id: 46,
        name: "Laptop Asus ROG Strix G16 Game, Màn hình 16 Inch 16: 10 FHD 165Hz",
        image: "/images/laptop2.webp",
        images: [
          "/images/laptop2.webp",
          "/images/laptop2.1.webp",
          "/images/laptop2.2.webp",
          "/images/laptop2.3.webp",
          "/images/laptop2.4.webp",
        ],
        ...calculatePrices(38990000, 5), /*giá tiền*/
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li>Intel Core i7-13650HX</li>
              <li>Số nhân: 10</li>
              <li>Số luồng: 12</li>
              <li>Tốc độ CPU: 32GB</li>
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
              <li>Màn hình: 16-inch"</li>
              <li>Độ phần giải: QHD+ 16:10 (2560 x 1600, WQXGA)</li>
              <li>Tần số quét: 240Hz</li>
            </ul>  
            )
          },
          {title: "Card màn hình", 
            content: (
            <ul>
             <li>Đạt chuẩn Pantone Validated  MUX Switch + NVIDIA® Advanced Optimus</li>
    
            </ul>  
            )
          },
          
        ],
        // specs: [
        //   { 
        //     icon: FaMemory, 
        //     text: "RAM 16GB" 
        //   },
        //   { 
        //     icon: HiMiniCpuChip, 
        //     text: "Intel Core i5-1235U" 
        //   },
        //   { 
        //     icon: FaWindows, 
        //     text: "Tặng Office Home&Student" 
        //   }
        // ],
        installment: "Trả góp 0%",
      
      },
      {
        id: 47,
        name: "Laptop Asus TUF Gaming A15 FA506NF-HN005W (AMD Ryzen 5-7535HS) (Đen) - Bảo hành 24 tháng",
        image: "/images/laptop3.webp",
        images: [
          "/images/laptop3.webp",
          "/images/laptop3.1.webp",
          "/images/laptop3.2.webp",
          "/images/laptop3.3.webp",
          "/images/laptop3.4.webp",
        ],
        ...calculatePrices(19990000, 25),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li> AMD Ryzen 5 7535HS</li>
              <li>Số nhân: 10</li>
              <li>Số luồng: 12</li>
              <li>Tốc độ CPU:4.5Ghz</li>    
            </ul>
          )
        },
          {title: "RAM, Ổ cứng", 
             content:(
              <ul>
                <li> RAM: 512GB</li>
                <li>Loại RAM: Asus TUF Gaming A15 FA506NF-HN005W</li>
                <li>Ổ cứng: 1 TB SSD M.2 PCIe</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình: 15.6 inch FHD (1920x1080)"</li>
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
    
        installment: "Trả góp 0%",
      
      },
      {
        id: 48,
        name: "Laptop Asus X541U (Core i5-7200U, RAM DDR4 4GB, SSD 180G, 15.6inch)",
        image: "/images/laptop4.webp",
        images: [
          "/images/laptop4.webp",
          "/images/laptop4.1.webp",
          "/images/laptop4.2.webp",
          "/images/laptop4.3.webp",
          "/images/laptop4.4.webp",
        ],
        ...calculatePrices(29990000, 10),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li>Core i5_7200u (GEN 7) 2.5gb up to 3.1ghz - chip U không lo nóng máy.</li>         
              <li>Số nhân: 10</li>
              <li>Số luồng: 12</li>
              <li>Tốc độ CPU: 1.3Ghz</li>
            </ul>
          )
        },
          {title: "RAM, Ổ cứng", 
             content:(
              <ul>
                <li> RAM: 4GB DDR4 </li>
                <li>Loại RAM: DDR4 2 khe (1 khe 8 GB + 1 khe 8 GB)</li>
                <li>Ổ cứng: 512 GB SSD NVMe PCIe</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình: 15.6″ HD (1366 x 768)"</li>
              <li> Ổ đĩa quang: đọc và ghi DVD.</li>
              <li>Tần số quét: 120Hz</li>
            </ul>  
            )
          },
          {title: "Card màn hình", 
            content: (
              <ul>
                <li>SSD 128Gb, màn hình đẹp 100%</li>
              </ul>  
            )
          },
          
        ],
        installment: "Trả góp 0%",
      
      },
      {
        id: 49,
        name: "Laptop ASUS Intel 16GB-1TB 15.6 Inch 1.5kg 180°Mở và đóng Máy tính xách tay mỏng học tập / trò chơi Máy tính xách tay",
        image: "/images/laptop5.webp",
        images: [
          "/images/laptop5.webp",
          "/images/laptop5.1.webp",
          "/images/laptop5.2.webp",
          "/images/laptop5.3.webp",
          "/images/laptop5.4.webp",
        ],
        ...calculatePrices(22390000, 7),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li>Intel Core i7</li>          
              <li>Số nhân: 10</li>
              <li>Số luồng: 12</li>
              <li>Tốc độ CPU: 1.7Ghz</li>
            </ul>
          )
        },
          {title: "RAM, Ổ cứng", 
             content:(
              <ul>
                <li> RAM: 16GB-1TB</li>
                <li>Loại RAM: DDR4 2 khe (1 khe 8 GB + 1 khe 8 GB)</li>
                <li>Ổ cứng: 512 GB SSD NVMe PCIe</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình: 15 Inches"</li>
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
        installment: "Trả góp 0%",
      
      },
      {
        id: 50,
        name: "[Window 10 ổ SSD 800gram] Laptop Asus X205TA E200H E202 siêu mỏng nhẹ màn hình 11.6 inch",
        image: "/images/laptop6.webp",
        images: [
          "/images/laptop6.webp",
          "/images/laptop6.1.webp",
          "/images/laptop6.2.webp",
          "/images/laptop6.3.webp",
          "/images/laptop6.4.webp",
        ],
        ...calculatePrices(19990000, 7),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li>Intel Atom x5 8350 Hoặc Intel Atom z3735</li>
              <li>Số nhân: 10</li>
              <li>Số luồng: 12</li>
              <li>Tốc độ CPU: 1.92 GHz</li>
            </ul>
          )
        },
          {title: "RAM, Ổ cứng", 
             content:(
              <ul>
                <li> RAM: 16GB</li>
                <li>Loại RAM: DDR5 2 khe (1 khe 8 GB + 1 khe 8 GB)</li>
                <li>Ổ cứng:  SSD 128gb</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình: 11.6 inch LED"</li>
              <li>Độ phần giải: Intel HD Graphics (Riêng bản dùng chip Intel N4000 sử dụng chip đồ họa Intel UHD 600) </li>
              <li>Tần số quét: 60Hz</li>
            </ul>  
            )
          },
          {title: "Card màn hình", 
            content: (
            <ul>
              <li>Intel HD Graphics (Riêng bản dùng chip Intel N4000 sử dụng chip đồ họa Intel UHD 600)</li>
            </ul>  
            )
          },
          
        ],
        installment: "Trả góp 0%",
      
      },
      {
        id: 51,
        name: "Laptop Asus E402S, ổ HDD 250GB, màn hình 14inch, độ đẹp như ảnh chụp còn hoạt động bt",
        image: "/images/laptop7.webp",
        images: [
          "/images/laptop7.webp",
          "/images/laptop7.1.webp",
          "/images/laptop7.2.webp",
          "/images/laptop7.3.webp",
          "/images/laptop7.4.webp",
        ],
        ...calculatePrices(39490000, 10),
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
                <li>Ổ cứng:  HDD 250GB</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình: 14inch"</li>
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
        installment: "Trả góp 0%",
      
      },
      {
        id: 52,
        name: "laptop ASUS K42 i5 ram4gb hhd 320 giá rẻ",
        image: "/images/laptop8.webp",
        images: [
          "/images/laptop8.webp",
          "/images/laptop8.1.webp",
          "/images/laptop8.2.webp",
          "/images/laptop8.3.webp",
          "/images/laptop8.4.webp",
        ],
        ...calculatePrices(18990000, 10),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li>Intel Core i3</li>         
              <li>Số nhân: 10</li>
              <li>Số luồng: 12</li>
              <li>Tốc độ CPU: 3.30Ghz</li>
            </ul>
          )
        },
          {title: "RAM, Ổ cứng", 
             content:(
              <ul>
                <li> RAM: 4GB</li>
                <li>Loại RAM: DDR4 2 khe (1 khe 8 GB + 1 khe 8 GB)</li>
                <li>Ổ cứng: 512 GB SSD NVMe PCIe Gen 4.0</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình: 14.0"</li>
              <li>Độ phần giải: Full HD (1920 x 1080)</li>
              <li>Tần số quét: 60Hz</li>
            </ul>  
            )
          },
          {title: "Card màn hình", 
            content: (
            <ul>
               <li>Máy đáp ứng nhu cầu công việc, cấu hình mức khá, làm việc, học tập, giải trí game nhẹ thậm chí là lol, fifa4,..</li>
            </ul>  
            )
          },
          
        ],
        installment: "Trả góp 0%",
      
      },
      {
        id: 53,
        name: "Laptop Mini NEC VersaPRO VH-4 I5-8200Y/8GB/512GB SSD/12.5inch FHD/ nặng 800g, siêu nhỏ gọn, có HDMI trình chiếu tốt",
        image: "/images/laptop9.webp",
        images: [
          "/images/laptop9.webp",
          "/images/laptop9.1.webp",
          "/images/laptop9.2.webp",
          "/images/laptop9.3.webp",
          "/images/laptop9.4.webp",
        ],
        ...calculatePrices(45990000, 15),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li>Intel Core m3-7Y30 4x1.6Ghz</li>
              <li>Số nhân: 10</li>
              <li>Số luồng: 12</li>
              <li>Tốc độ CPU: 720p HD webcam</li>
            </ul>
          )
        },
          {title: "RAM, Ổ cứng", 
             content:(
              <ul>
                <li> RAM: 4GB DDR3 SDRAM 2400MHz (Onboard)</li>
                <li>Loại RAM: DDR4 2 khe (1 khe 8 GB + 1 khe 8 GB)</li>
                <li>Ổ cứng: 512 GB SSD NVMe PCIe Gen 4.0</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình: 12.5 inch AntiGlare"</li>
              <li>Độ phần giải: Full HD IPS (1920×1080)</li>
              <li>Tần số quét: 70Hz</li>
            </ul>  
            )
          },
          {title: "Card màn hình", 
            content: (
            <ul>
              <li> 1X LAN, 2xUSB 3.0, 1x HDMI, 1 SD, 1x 3.5 audio jack, 1 typeC</li>
            </ul>  
            )
          },
          
        ],
        installment: "Trả góp 0%",
      
      },
      {
        id: 54,
        name: "Laptop Cũ Rẻ Asus X553MA Trắng Mỏng Nhẹ Ram 4gb / ổ 500gb / Màn 15.6inch / Làm Văn Phòng, Học Tập Mượt Mà, Tặng Phụ Kiện",
        image: "/images/laptop10.webp",
        images: [
          "/images/laptop10.webp",
          "/images/laptop10.1.webp",
          "/images/laptop10.2.webp",
          "/images/laptop10.3.webp",
          "/images/laptop10.4.webp",
        ],
        ...calculatePrices(34490000, 5),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li>Intel Celeron N2830 2.16GHz Max 2.41GHz </li>
              <li>Số nhân: 10</li>
              <li>Số luồng: 12</li>
              <li>Tốc độ CPU: Intel Celeron N2830 2.16GHz Max 2.41GHz</li>
            </ul>
          )
        },
          {title: "RAM, Ổ cứng", 
             content:(
              <ul>
                <li> RAM:  4 GB DDR3L</li>
                <li>Loại RAM: DDR5 2 khe (1 khe 8 GB + 1 khe 8 GB)</li>
                <li>Ổ cứng: 1 TB SSD M.2 PCIe</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình:15.6 inch đầy đủ phím số, HD (1366 × 768)"</li>
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
        installment: "Trả góp 0%",
      
      },
      {
        id: 55,
        name: "ASUS 15.6 '' 14 '' 13.3 17.3 '' 12.5 '' 11.6 '' Inch universal Chung laptop bọc bảo vệ màn hình phim",
        image: "/images/laptop11.webp",
        images: [
          "/images/laptop11.webp",
          "/images/laptop11.1.webp",
          "/images/laptop11.2.webp",
          "/images/laptop11.3.webp",
          "/images/laptop11.4.webp",
        ],
        ...calculatePrices(75990000, 23),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li>Ryzen R5-3500U(4 nhân 8 luồng)</li>
              <li>Số nhân: 16</li>
              <li>Số luồng: 22</li>
              <li>Tốc độ CPU: ...</li>
            </ul>
          )
        },
          {title: "RAM, Ổ cứng", 
             content:(
              <ul>
                <li> RAM: 8 GB  </li>
                <li>Loại RAM: LPDDR3Bus 2400</li>
                <li>Ổ cứng: SSD NVMe 256 (max 1ổ)</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình: 14inch"</li>
              <li>Độ phần giải: Full HD (1920 x 1080)</li>
              <li>Tần số quét: 3.7GHz</li>
            </ul>  
            )
          },
          {title: "Card màn hình", 
            content: (
            <ul>
                <li>14inch Full HD (1920 x 1080), IPS, phủ màu 100% sRGB. Viền NanoEdge4 hướng</li>
            </ul>  
            )
          },
          
        ],
        installment: "Trả góp 0%",
      
      },
      {
        id: 56,
        name: "Laptop ASUS Gaming Vivobook K3605ZU-RP296W (Intel Core i5-12500H | 16GB | 512GB | RTX 4050 | 16 inch WUXGA | Win 11",
        image: "/images/laptop12.webp",
        images: [
          "/images/laptop12.webp",
          "/images/laptop12.1.webp",
          "/images/laptop12.2.webp",
          "/images/laptop12.3.webp",
          "/images/laptop12.4.webp",
        ],
        ...calculatePrices(46190000, 11),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li>Intel Core i5-12500H Processor 2.5 GHz (18M Cache, up to 4.5 GHz, 4P+8E cores)</li>
              <li>Số nhân: 14</li>
              <li>Số luồng: 8</li>
              <li>Tốc độ CPU: 2.5Ghz</li>
            </ul>
          )
        },
          {title: "RAM, Ổ cứng", 
             content:(
              <ul>
                <li> RAM: 16GB </li>
                <li>Loại RAM: DDR4 on board + 1 khe SO-DIMM, nâng cấp tối đa 32GB</li>
                <li>Ổ cứng:  512GB M.2 NVMe™ PCIe® 4.0 SSD</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình: 15 Inches"</li>
              <li>Độ phần giải: Full HD (1920 x 1080)</li>
              <li>Tần số quét: 165Hz</li>
            </ul>  
            )
          },
          {title: "Card màn hình", 
            content: (
            <ul>
              <li>16 inch WUXGA (1920 x 1200) IPS 16:10, Anti-glare, 300nits 144Hz</li>
            </ul>  
            )
          },
          
        ],
        installment: "Trả góp 0%",
      
      },
      {
        id: 57,
        name: "Laptop ASUS Zenbook 14 OLED UX3405MA-PP475W Ultra 9 RAM 32GB SSD 1TB",
        image: "/images/laptop13.webp",
        images: [
          "/images/laptop13.webp",
          "/images/laptop13.1.webp",
          "/images/laptop13.2.webp",
          "/images/laptop13.3.webp",
          "/images/laptop13.4.webp",
        ],
        ...calculatePrices(41990000, 10),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li>Intel Core i9</li>         
              <li>Số nhân: 14</li>
              <li>Số luồng: 20</li>
              <li>Tốc độ CPU: 1TB</li>
            </ul>
          )
        },
          {title: "RAM, Ổ cứng", 
             content:(
              <ul>
                <li> RAM: 32GB</li>
                <li>Loại RAM: LPDDR5X on board</li>
                <li>Ổ cứng: 14" 3K (2880 x 1800) OLED 16:10 120Hz 600nits 100% DCI-P3</li>
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
              <li>Display 14" 3K (2880 x 1800) OLED 16:10 120Hz 600nits 100% DCI-P3</li>
            </ul>  
            )
          },
          
        ],
        installment: "Trả góp 0%",
      
      },
      {
        id: 58,
        name: "Laptop Cũ Asus X550L Trắng Mỏng Nhẹ Core i5 / Ram 8gb / ssd / card màn hình vga rời 2gb / Chơi Game, Đồ Họa Cực Khủng",
        image: "/images/laptop14.webp",
        images: [
          "/images/laptop14.webp",
          "/images/laptop14.1.webp",
          "/images/laptop14.2.webp",
          "/images/laptop14.3.webp",
          "/images/laptop14.4.webp",
        ],
        ...calculatePrices(50190000, 15),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li>Intel Core i5 4200 (1.6GHz Up to 2.6GHz)</li>
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
                <li>Ổ cứng: 500GB SATA 5400rpm</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình: GT 720M 2GB"</li>
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
        installment: "Trả góp 0%",
      
      },
      {
        id: 59,
        name: "Laptop Asus Vivobook 15 OLED A1505VA-MA468W (Core i5-13500H & 15.6inch 2.8K)",
        image: "/images/laptop15.webp",
        images: [
          "/images/laptop15.webp",
          "/images/laptop15.1.webp",
          "/images/laptop15.2.webp",
          "/images/laptop15.3.webp",
          "/images/laptop15.4.webp",
        ],
        ...calculatePrices(39990000, 15),
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
                <li> RAM: 16GB (8GB Onboard + 8GB) </li>
                <li>Loại RAM: DDR4 3200MHz (1x SO-DIMM socket, up to 16GB SDRAM)</li>
                <li>Ổ cứng:  512GB M.2 NVMe™ PCIe® 3.0 SSD</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình:15.6 "</li>
              <li>Độ phần giải: inch 2.8K (2880 x 1800) OLED 16:10 aspect ratio </li>
              <li>Tần số quét: 165Hz</li>
            </ul>  
            )
          },
          {title: "Card màn hình", 
            content: (
            <ul>
              <li>inch 2.8K (2880 x 1800) OLED 16:10 aspect ratio,</li>
            </ul>  
            )
          },
          
        ],
    
        installment: "Trả góp 0%",
      
      },
      {
        id: 60,
        name: "Laptop xách tay giá rẻ Thinkpad X1 Carbon Gen 7,6,5,4 | I5 – 8350U | Ram 8GB | SSD 256GB",
        image: "/images/laptop16.webp",
        images: [
          "/images/laptop16.webp",
          "/images/laptop16.1.webp",
          "/images/laptop16.2.webp",
          "/images/laptop16.3.webp",
          "/images/laptop16.4.webp",
        ],
        ...calculatePrices(29790000, 15),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li>Intel® Core™ i5-8350U CPU 8*1.8Ghz, (8M Cache, up to 4.0 GHz)</li>
              <li>Số nhân: 12</li>
              <li>Số luồng: 16</li>
              <li>Tốc độ CPU: 1.9GB</li>
            </ul>
          )
        },
          {title: "RAM, Ổ cứng", 
             content:(
              <ul>
                <li> RAM: 256GB</li>
                <li>Loại RAM: DDR4 2 khe (1 khe 8 GB + 1 khe 8 GB)</li>
                <li>Ổ cứng: 512 GB SSD NVMe PCIe (Có thể tháo ra, lắp thanh khác tối đa 2 TB (2280) / 1 TB (2230))</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình: 14 Inches"</li>
              <li>Độ phần giải: QHD+ (2560 x 1600) 16:10</li>
              <li>Tần số quét: 120Hz</li>
            </ul>  
            )
          },
          {title: "Card màn hình", 
            content: (
            <ul>
                <li>14.0″ LED-Backlit HD Anti-Glare Matte Display FHD (1920*1080)</li>
            </ul>  
            )
          },
          
        ],
    
        installment: "Trả góp 0%",
      
      },
      {
        id: 61,
        name: "Laptop ASUS Gaming Vivobook K3605ZU-RP296W (Intel Core i5-12500H | 16GB | 512GB | RTX 4050 | 16 inch WUXGA | Win 11",
        image: "/images/laptop17.webp",
        images: [
          "/images/laptop17.webp",
          "/images/laptop17.1.webp",
          "/images/laptop17.2.webp",
          "/images/laptop17.3.webp",
          "/images/laptop17.4.webp",
        ],
        ...calculatePrices(72290000, 25),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li> Intel Core i5-12500H </li>
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
                <li>Loại RAM: (18M Cache, up to 4.5 GHz, 4P+8E cores)</li>
                <li>Ổ cứng: 512GB M.2 NVMe™ PCIe® 4.0 SSD</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình:16 inch WUXGA (1920 x 1200) IPS 16:10, Anti-glare, 300nits 144Hz"</li>
              <li>Độ phần giải: Full HD (1920 x 1080)</li>
              <li>Tần số quét: 60Hz</li>
            </ul>  
            )
          },
          {title: "Card màn hình", 
            content: (
            <ul>
              <li>16 inch WUXGA (1920 x 1200) IPS 16:10, Anti-glare, 300nits 144Hz</li>
            </ul>  
            )
          },
          
        ],
    
        installment: "Trả góp 0%",
      
      },
      {
        id: 62,
        name: "Laptop Asus Vivobook 14 X1404ZA-NK386W (i3-1215U) (Xanh) - Bảo hành 24 tháng",
        image: "/images/laptop18.webp",
        images: [
          "/images/laptop18.webp",
          "/images/laptop18.1.webp",
          "/images/laptop18.2.webp",
          "/images/laptop18.3.webp",
          "/images/laptop18.4.webp",
        ],
        ...calculatePrices(26990000, 5),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li>Intel Core i3-1215U 6 nhân, 8 luồng, và tốc độ xử lý từ 1.2 GHz đến 4.4 GHz</li>
              <li>Số nhân: 10</li>
              <li>Số luồng: 12</li>
              <li>Tốc độ CPU: 4.4Ghz</li>
            </ul>
          )
        },
          {title: "RAM, Ổ cứng", 
             content:(
              <ul>
                <li> RAM: 8GB</li>
                <li>Loại RAM: DDR4 2 khe (1 khe 8 GB + 1 khe 8 GB)</li>
                <li>Ổ cứng: 512GB SSD</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình: 14 Inches"</li>
              <li>Độ phần giải:  Full HD IPS</li>
              <li>Tần số quét: 60Hz</li>
            </ul>  
            )
          },
          {title: "Card màn hình", 
            content: (
            <ul>
             
              <li>Chip đồ họa Onboard Intel UHD Graphics giúp tốc độ xử lý hình ảnh mượt mà và đồ hoạ sắc nét. Dù không dành cho các tác vụ đồ họa nặng, nhưng đối với công việc văn phòng và giải trí cơ bản, đây là sự lựa chọn ổn định</li>
            </ul>  
            )
          },
          
        ],
        installment: "Trả góp 0%",
      
      },
      {
        id: 63,
        name: "Laptop Asus E402S, ổ HDD 250GB, màn hình 14inch, độ đẹp như ảnh chụp còn hoạt động bt",
        image: "/images/laptop19.webp",
        images: [
          "/images/laptop19.webp",
          "/images/laptop19.1.webp",
          "/images/laptop19.2.webp",
          "/images/laptop19.3.webp",
          "/images/laptop19.4.webp",
        ],
        ...calculatePrices(39990000, 17),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li>HDD 250GB</li>
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
              <li>Màn hình: 14inch"</li>
              <li>Độ phần giải: Full HD</li>
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
    
        installment: "Trả góp 0%",
      
      },
      {
        id: 64,
        name: "2024ASUS Factory Laptop Intel Core i7 RAM: 16GB/SSD: 1TB 15.6 inch Gaming Laptop Vân tay Mở khóa Windows 11",
        image: "/images/laptop20.webp",
        images: [
          "/images/laptop20.webp",
          "/images/laptop20.1.webp",
          "/images/laptop20.2.webp",
          "/images/laptop20.3.webp",
          "/images/laptop20.4.webp",
        ],
        ...calculatePrices(56990000, 7),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li>Intel Core i7-8000 Series</li>
              <li>Số nhân: 10</li>
              <li>Số luồng: 12</li>
              <li>Tốc độ CPU: 5.0GHz</li>
            </ul>
          )
        },
          {title: "RAM, Ổ cứng", 
             content:(
              <ul>
                <li> RAM: 8G </li>
                <li>Loại RAM: DDR4 128GB-1024GB Solid State</li>
                <li>Ổ cứng: 512GB SSD</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình: 15,6 inch"</li>
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
    
        installment: "Trả góp 0%",
      
      },
      {
        id: 65,
        name: "ASUS GAMING FX504 CORE I5 8300H RAM 16G SSD 256G+1T 15.6INCH VGA GTX 1050",
        image: "/images/laptop21.webp",
        images: [
          "/images/laptop21.webp",
          "/images/laptop21.1.webp",
          "/images/laptop20.2.webp",
          "/images/laptop20.3.webp",
          "/images/laptop20.4.webp",
        ],
        ...calculatePrices(56990000, 7),
        details: [
          {title: "Bộ xử lý",
          content: (
            <ul>
              <li> i5 8300H tốc độ 8X2.3G, turbo lên 4.0G, (8cpus), chạy cực mạnh</li>
              <li>Số nhân: 10</li>
              <li>Số luồng: 12</li>
              <li>Tốc độ CPU: 1.3Ghz</li>
            </ul>
          )
        },
          {title: "RAM, Ổ cứng", 
             content:(
              <ul>
                <li> RAM: 16G MAX 32GB</li>
                <li>Loại RAM:  SSD 256G+1T</li>
                <li>Ổ cứng: 512GB SSD</li>
              </ul>
             )
            },
          {title: "Màn hình", 
            content: (
            <ul>
              <li>Màn hình: 15.6in 15.6in "</li>
              <li>Độ phần giải: Full HD IPS ( 1920x1080)</li>
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
    
        installment: "Trả góp 0%",
      
      },
    

];

export default products;
export const allProducts = [...products]; // Hoặc cách khác tùy thuộc vào cấu trúc của bạn
