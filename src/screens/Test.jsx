import { useState } from "react";
import "./Test.css";

const productsData = [
  {
    id: 1,
    name: "Hybrid Theory",
    artist: "Linkin Park",
    genre: "Rock",
    price: 300000,
    type: "CD",
  },
  {
    id: 2,
    name: "25",
    artist: "Adele",
    genre: "Pop",
    price: 350000,
    type: "Vinyl",
  },
  {
    id: 3,
    name: "Kind Of Blue",
    artist: "Miles Davis",
    genre: "Jazz",
    price: 400000,
    type: "Vinyl",
  },
];

function Test() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [type, setType] = useState("All");
  const [maxPrice, setMaxPrice] = useState(1000000);

  const filteredProducts = productsData.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (genre === "All" || item.genre === genre) &&
      (type === "All" || item.type === type) &&
      item.price <= maxPrice
    );
  });

  return (
    <div className="product-page">
      <h2>Danh sách đĩa nhạc</h2>

      {/* FILTER */}
      <div className="filter-box">
        <input
          type="text"
          placeholder="Tìm tên đĩa..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setGenre(e.target.value)}>
          <option value="All">Tất cả thể loại</option>
          <option value="Rock">Rock</option>
          <option value="Pop">Pop</option>
          <option value="Jazz">Jazz</option>
        </select>

        <select onChange={(e) => setType(e.target.value)}>
          <option value="All">Tất cả loại</option>
          <option value="CD">CD</option>
          <option value="Vinyl">Vinyl</option>
        </select>

        <input
          type="range"
          min="100000"
          max="1000000"
          step="50000"
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
        <span>Giá tối đa: {maxPrice.toLocaleString()} VNĐ</span>
      </div>

      {/* PRODUCT LIST */}
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div className="product-card" key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.artist}</p>
              <p>
                {item.genre} - {item.type}
              </p>
              <p>{item.price.toLocaleString()} VNĐ</p>
            </div>
          ))
        ) : (
          <p>Không tìm thấy sản phẩm phù hợp</p>
        )}
      </div>
    </div>
  );
}

export default Test;
