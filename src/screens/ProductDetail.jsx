import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Sản phẩm không tìm thấy</h2>
        <Link to="/shop">← Quay lại danh sách</Link>
      </div>
    );
  }

  // Lấy sản phẩm liên quan (cùng category)
  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  // Xử lý tăng/giảm số lượng
  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // Xử lý thêm vào giỏ
  const handleAddToCart = () => {
    alert(`Đã thêm ${quantity} sản phẩm "${product.name}" vào giỏ hàng!`);
  };

  return (
    <div className="product-detail-wrapper">
      {/* Back button */}
      <Link to="/shop" className="back-link">
        ← Quay lại
      </Link>

      {/* Product Detail Container */}
      <div className="product-detail-container">
        {/* Left: Image */}
        <div className="product-image-section">
          <div className="product-image-wrapper">
            <img src={product.img || "/placeholder.svg"} alt={product.name} />
          </div>
        </div>

        {/* Right: Info */}
        <div className="product-info-section">
          {/* Category */}
          <p className="product-category">{product.category}</p>

          {/* Title */}
          <h1 className="product-title">{product.name}</h1>

          {/* Artist */}
          <p className="product-artist">{product.artist}</p>

          {/* Divider */}
          <hr className="divider" />

          {/* Price */}
          <div className="price-section">
            <p className="product-price">
              {product.price.toLocaleString("vi-VN")} đ
            </p>
            <p className="product-stock">
              Tình trạng:{" "}
              <span className={product.stock ? "in-stock" : "out-of-stock"}>
                {product.stock ? "Còn hàng" : "Hết hàng"}
              </span>
            </p>
          </div>

          {/* Divider */}
          <hr className="divider" />

          {/* Description */}
          <div className="description-section">
            <h3>MÔ TẢ</h3>
            <p>{product.description}</p>
          </div>

          {/* Quantity Selector */}
          <div className="quantity-section">
            <button
              className="qty-btn"
              onClick={handleDecrement}
              disabled={quantity === 1}
            >
              −
            </button>
            <input type="text" value={quantity} readOnly className="qty-input" />
            <button className="qty-btn" onClick={handleIncrement}>
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            className="btn-add-cart"
            onClick={handleAddToCart}
            disabled={!product.stock}
          >
            THÊM VÀO GIỎ
          </button>

          {/* Product Details */}
          <div className="product-details">
            <h4>CHI TIẾT SẢN PHẨM</h4>
            <p>
              <strong>Format:</strong> {product.format}
            </p>
            <p>
              <strong>Danh mục:</strong> {product.category}
            </p>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="related-section">
          <h2>SẢN PHẨM LIÊN QUAN</h2>
          <div className="related-products">
            {relatedProducts.slice(0, 4).map((relProduct) => (
              <Link
                to={`/product-detail/${relProduct.id}`}
                key={relProduct.id}
                className="related-card"
              >
                <img src={relProduct.img || "/placeholder.svg"} alt={relProduct.name} />
                <p className="related-name">{relProduct.name}</p>
                <p className="related-price">
                  {relProduct.price.toLocaleString("vi-VN")} đ
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
