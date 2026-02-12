import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import "./Shop.css";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("TẤT CẢ");
  const [priceRange, setPriceRange] = useState(1000000);

  // Lấy danh sách categories
  const categories = ["TẤT CẢ", ...new Set(products.map((p) => p.category))];

  // Lọc sản phẩm theo search, category, và giá
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.artist.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "TẤT CẢ" || product.category === selectedCategory;

      const matchesPrice = product.price <= priceRange;

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchTerm, selectedCategory, priceRange]);

  // Đếm sản phẩm theo từng category
  const getCategoryCount = (category) => {
    if (category === "TẤT CẢ") return products.length;
    return products.filter((p) => p.category === category).length;
  };

  // Reset filter
  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("TẤT CẢ");
    setPriceRange(1000000);
  };

  return (
    <div className="shop-wrapper">
      {/* Header */}
      <div className="shop-header">
        <div className="shop-header-left">
          <h1>DANH MỤC SẢN PHẨM</h1>
          <p>{filteredProducts.length} sản phẩm</p>
        </div>

        {/* Search bar */}
        <div className="shop-header-right">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm, nghệ sĩ..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>

      {/* Main container */}
      <div className="shop-container">
        {/* Sidebar Filter */}
        <aside className="shop-sidebar">
          {/* Category Filter */}
          <div className="filter-section">
            <h3 className="filter-title">DANH MỤC SẢN PHẨM</h3>
            <ul className="category-list">
              {categories.map((category) => (
                <li key={category}>
                  <label>
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                    />
                    <span>{category}</span>
                    <span className="category-count">
                      {getCategoryCount(category)}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Filter */}
          <div className="filter-section">
            <h3 className="filter-title">LỘC GIÁ</h3>
            <input
              type="range"
              min="0"
              max="1000000"
              step="50000"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="price-slider"
            />
            <p className="price-label">
              Giá tối đa: <strong>{priceRange.toLocaleString("vi-VN")} đ</strong>
            </p>
          </div>

          {/* Reset button */}
          <button className="btn-reset" onClick={handleResetFilters}>
            XÓA BỘ LỌC
          </button>
        </aside>

        {/* Product Grid */}
        <main className="shop-content">
          {filteredProducts.length > 0 ? (
            <div className="album-container">
              {filteredProducts.map((product) => (
                <div key={product.id} className="album-card">
                  <img src={product.img || "/placeholder.svg"} alt={product.name} />
                  <p className="album-name">{product.name}</p>
                  <p className="artist-name">{product.artist}</p>
                  <p className="price">
                    {product.price.toLocaleString("vi-VN")} đ
                  </p>
                  <Link to={`/product-detail/${product.id}`} className="btn-add">
                    XEM CHI TIẾT
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-products">
              <p>Không tìm thấy sản phẩm phù hợp</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Shop;
