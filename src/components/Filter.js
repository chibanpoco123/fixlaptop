import React from 'react';
import './Filter.css';

function Filter({ filters, setFilters }) {
  const handleCheckboxChange = (category, value) => {
    setFilters(prev => {
      const updatedCategory = { ...prev[category] };

      if (updatedCategory[value]) {
        // Nếu tùy chọn đã được chọn, loại bỏ nó
        delete updatedCategory[value];
      } else {
        // Nếu tùy chọn chưa được chọn, thêm nó vào với giá trị true
        updatedCategory[value] = true;
      }

      return {
        ...prev,
        [category]: updatedCategory,
      };
    });
  };

  return (
    <div className="filter-container">
      <h3>Bộ lọc tìm kiếm</h3>

      {/* CPU */}
      <div className="filter-section">
        <h4>Loại CPU</h4>
        <label>
          <input
            type="checkbox"
            checked={filters.cpu?.['CPU thế hệ H'] || false}
            onChange={() =>
              handleCheckboxChange('cpu', 'CPU thế hệ H')
            }
          />
          CPU thế hệ H
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.cpu?.['Intel Core i5'] || false}
            onChange={() =>
              handleCheckboxChange('cpu', 'Intel Core i5')
            }
          />
          Intel Core i5
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.cpu?.['Intel Core i7'] || false}
            onChange={() =>
              handleCheckboxChange('cpu', 'Intel Core i7')
            }
          />
          Intel Core i7
        </label>
      </div>

      {/* RAM */}
      <div className="filter-section">
        <h4>RAM</h4>
        <label>
          <input
            type="checkbox"
            checked={filters.ram?.['4GB'] || false}
            onChange={() =>
              handleCheckboxChange('ram', '4GB')
            }
          />
          4GB
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.ram?.['8GB'] || false}
            onChange={() =>
              handleCheckboxChange('ram', '8GB')
            }
          />
          8GB
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.ram?.['16GB'] || false}
            onChange={() =>
              handleCheckboxChange('ram', '16GB')
            }
          />
          16GB
        </label>
      </div>

      {/* Màn hình */}
      <div className="filter-section">
        <h4>Kích thước màn hình</h4>
        <label>
          <input
            type="checkbox"
            checked={filters.screen?.['Dưới 14 inch'] || false}
            onChange={() =>
              handleCheckboxChange('screen', 'Dưới 14 inch')
            }
          />
          Dưới 14 inch
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.screen?.['14 - 15 inch'] || false}
            onChange={() =>
              handleCheckboxChange('screen', '14 - 15 inch')
            }
          />
          14 - 15 inch
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.screen?.['15 - 17 inch'] || false}
            onChange={() =>
              handleCheckboxChange('screen', '15 - 17 inch')
            }
          />
          15 - 17 inch
        </label>
      </div>

      {/* Ổ cứng */}
      <div className="filter-section">
        <h4>Ổ cứng</h4>
        <label>
          <input
            type="checkbox"
            checked={filters.storage?.['SSD 512GB'] || false}
            onChange={() =>
              handleCheckboxChange('storage', 'SSD 512GB')
            }
          />
          SSD 512GB
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.storage?.['SSD 1TB'] || false}
            onChange={() =>
              handleCheckboxChange('storage', 'SSD 1TB')
            }
          />
          SSD 1TB
        </label>
      </div>

      {/* Card đồ họa */}
      <div className="filter-section">
        <h4>Card đồ họa</h4>
        <label>
          <input
            type="checkbox"
            checked={filters.graphics?.['NVIDIA GeForce MX'] || false}
            onChange={() =>
              handleCheckboxChange('graphics', 'NVIDIA GeForce MX')
            }
          />
          NVIDIA GeForce MX Series
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.graphics?.['RTX 3050'] || false}
            onChange={() =>
              handleCheckboxChange('graphics', 'RTX 3050')
            }
          />
          NVIDIA RTX 3050
        </label>
      </div>
    </div>
  );
}

export default Filter;
