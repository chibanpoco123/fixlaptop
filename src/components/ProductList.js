import React, { useState, useEffect, useCallback, useContext } from "react";
import { products } from "../data/products";
import "./ProductList.css";
import Filter from "./Filter";
import { Link } from "react-router-dom";
import { productText } from "../context/Product/ProductContext";

function ProductList({ searchQuery }) {
  const [filters, setFilters] = useState({
    cpu: {},
    priceRange: {},
    ram: {},
    screen: {},
    storage: {},
    graphics: {},
    price: null,
  });

  const { productsCT, dispatch } = useContext(productText);
  console.log(" check trang home ", productsCT);

  const [filteredProducts, setFilteredProducts] = useState(productsCT.products);

  const filterProducts = useCallback(
    (products) => {
      return products.filter((product) => {
        const matchesSearchQuery =
          !searchQuery ||
          product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSearchQuery;
      });
    },
    [searchQuery]
  );

  console.log(" check trang home ", productsCT.products);

  useEffect(() => {
    setFilteredProducts(filterProducts(products));
  }, [filters, filterProducts]);

  return (
    <div className="product-list-page">
      <Filter filters={filters} setFilters={setFilters} />
      <div className="product-list-container">
        <h1>Danh sách sản phẩm ({productsCT.products.length})</h1>
        {filteredProducts.length === 0 ? (
          <p>Không tìm thấy sản phẩm</p>
        ) : (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                style={{ textDecoration: "none" }}
                className="product-card-link"
              >
                <div className="product-card">
                  <div className="product-image-container">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />
                  </div>
                  <div className="product-details">
                    <h3 className="product-name">{product.name}</h3>
                    <div className="product-price">
                      {product.salePrice.toLocaleString()}đ
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductList;
