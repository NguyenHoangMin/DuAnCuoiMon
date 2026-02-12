import { Link } from "react-router-dom";
import "./Home.css";
import image1 from "../assets/pham-quynh-anh-xinh-sao-phai-khoc-dia-cd_c531e631f6294d808e8a16d61c55c22b_grande.jpg";
import image2 from "../assets/img_1955_3a3664e05d5144e0a25344299cc4b02a_grande.jpg";
import image3 from "../assets/buc-tuong-can-bang-boxset-dia-cd_d008a1fd98c546b5b4f3ff58f56e5c94_grande.jpg";
import image4 from "../assets/pham-quynh-anh-loi-hoi-dap-2008-e-p-dia-cd_cd910750c081428b9896a891dd132547_grande.png";
import image5 from "../assets/mockup-5_b1ca714115a0465ca91726799d313d26_grande.jpg";
import image6 from "../assets/artwork_tinhconmemai_1__2b2bc47538c54ed8a33bfa4499a90782_grande.jpg";
import image7 from "../assets/lan-nha-nha-digipak-dia-cd_5598a61c6a01402fbdef1be4aa3b775b_grande.jpg";
import image8 from "../assets/pham_hoai_nam-trinh_jazz-cd-album_trinh_cong_son_cb748a578ba142578488d97e655b49ae_grande.jpg";
import image9 from "../assets/phung_khanh_linh-album_dau_tay-yesteryear_0c10b7bf68f544019cf2b9fe8f267b88_grande.jpeg";
import image10 from "../assets/amee_dreamee-cd-jewel_case_68b368223ab84c5fac837e32d2d3b967_grande.jpg";
import image11 from "../assets/20f0ac35-89ca-4934-b863-a6292f0596da_f2f7a8a6e7e9456ba88c9ece44622b88_grande.jpg";
import image12 from "../assets/tung_dung-album_da_vu_tru-multiverse_cf1f920e68e94e06bd6714c60f23fc56_grande.jpg";
import image13 from "../assets/cd1421ed-421f-4e17-ac7c-74aac29719d3_1674e688794f4445939830c5bea2f908_grande.jpg";
import image14 from "../assets/duc-tuan-tron-mot-kiep-yeu-lam-phuong-album-2020_7c580d7ce96a4b2c91cb833a56616659_grande.jpg";
import image15 from "../assets/lan-nha-nhien-dia-cd_b8cd3d9941d54edc853daf93c9b6afc7_grande.jpg";
import image16 from "../assets/amee-mongmee-mini-album_bed1ee197c8d4b49b54341920dd68e7e_grande.jpg";

const albums = [
  {
    name: "Phạm Quỳnh Anh - Xinh Sao Phải Khóc (EP) - Đĩa CD",
    price: "300,000đ",
    img: image1,
  },
  {
    name: "Trung Quân x Bùi Anh Tuấn - B.U.I (EP) - Đĩa CD",
    price: "300,000đ",
    img: image2,
  },
  {
    name: "Bức Tường - Cân Bằng (Limited Boxset) - Đĩa CD",
    price: "950,000đ",
    img: image3,
  },
  {
    name: "Phạm Quỳnh Anh - Lời Hồi Đáp 2008 (E.P) - Đĩa CD",
    price: "250,000đ",
    img: image4,
  },
  {
    name: "The Kollect - Tái Sinh - Đĩa CD",
    price: "380,000đ",
    img: image5,
  },
  {
    name: "Trọng Bắc hát Hồ Tiến Đạt - Tình Còn Mê Mãi - Đĩa CD",
    price: "350,000đ",
    img: image6,
  },
  {
    name: "Lân Nhã - Nhã (Digipak) - Đĩa CD",
    price: "300,000đ",
    img: image7,
  },
  {
    name: "Phạm Hoài Nam - Trịnh Jazz - Đĩa CD",
    price: "300,000đ",
    img: image8,
  },
];

const albums2 = [
  {
    name: "Phùng Khánh Linh - Yesteryear (Standard) - Đĩa CD",
    price: "300,000đ",
    img: image9,
  },
  {
    name: "Amee - Dreamee (Reissued) - Đĩa CD",
    price: "300,000đ",
    img: image10,
  },
  {
    name: "Tlinh x Low G - FLVR (EP) - Đĩa CD",
    price: "950,000đ",
    img: image11,
  },
  {
    name: "Tùng Dương - Multiverse (Đa vũ trụ) - Đĩa CD",
    price: "250,000đ",
    img: image12,
  },
  {
    name: "Hoàng Thùy Linh - Link - The 4th studio album (boxset) - Đĩa CD",
    price: "380,000đ",
    img: image13,
  },
  {
    name: "Đức Tuấn - Trọn một kiếp yêu - Đĩa CD",
    price: "350,000đ",
    img: image14,
  },
  {
    name: "Lân Nhã - Nhiên - Đĩa - Đĩa CD",
    price: "300,000đ",
    img: image15,
  },
  {
    name: "Amee - Mộngmee - Đĩa CD",
    price: "300,000đ",
    img: image16,
  },
];

const Home = () => {
  return (
    <>
      {/* Banner */}
      <div className="banner-container">
        <img
          src="https://file.hstatic.net/1000304920/collection/dia_cd-dvd-cua_hang_bang_dia_nhac_c2363917fb59478e90b1a4dccf16b9ab_master.jpg"
          alt=""
        />
      </div>

      {/* Giới thiệu */}
      <div className="records-section">
        <div className="content">
          <h1>1001 NỖI TRĂN TRỞ CỦA</h1>

          <div className="logo-gioithieu">
            <span>Sol</span>Music
          </div>

          <p className="sub">
            "<span>SOL</span>MUSIC ƠI, CÒN ĐĨA NÀY HEM?"
          </p>

          <div className="info-box">
            <div className="info-item">
              <span className="dot"></span>
              <p>
                Mỗi lần bạn hỏi câu này là SolMusic lại bồn chồn ghê gớm.
                SolMusic muốn đĩa về nhanh nhanh để còn đem ra khoe cho oách,
                nên có ngón gì về (hoặc sắp về) là SolMusic vác hết lên đây bày
                liền. Mời bạn vô lựa nha!
              </p>
            </div>

            <div className="info-item">
              <span className="dot"></span>
              <p>
                Nếu đĩa không sẵn hàng hoặc chưa có trên web thì bạn cứ nhắn tin
                để SolMusic báo giá order riêng tư nha. Hứa danh dự sẽ rep nhanh
                và đẹp trai nhất!!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* San pham */}
      <div className="album-container-box">
        <h2 className="title">ALBUM BÁN CHẠY NHẤT</h2>

        <div className="album-container" id="albumList">
          {albums2.map((album) => {
            return (
              <div className="album-card">
                <img src={album.img} alt={album.name} />
                <p className="album-name">{album.name}</p>
                <p className="price">{album.price}</p>
                <button className="btn-add">XEM CHI TIẾT</button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cam kết */}
      <div className="vqc-wrapper">
        <h2 className="title">SOLMUSIC CAM KẾT</h2>

        <div className="grid-box">
          <div className="item">
            <div className="icon">
              {/* <img src="icon-custom.png" alt=""> */}
            </div>
            <div className="text">
              <h3>NHẬN ĐẶT ĐĨA THEO YÊU CẦU</h3>
              <a href="#">Tìm hiểu thêm</a>
            </div>
          </div>

          <div className="item">
            <div className="icon">
              {/* <img src="icon-truck.png" alt=""> */}
            </div>
            <div className="text">
              <h3>SHIP TOÀN QUỐC, FREESHIP ĐƠN HÀNG ĐĨA TỪ 2 TRIỆU ĐỒNG</h3>
              <a href="#">Tìm hiểu thêm</a>
            </div>
          </div>

          <div className="item">
            <div className="icon">{/* <img src="icon-disc.png" alt=""> */}</div>
            <div className="text">
              <h3>ĐĨA ĐƯỢC BẢO QUẢN CHU ĐÁO</h3>
              <a href="#">Tìm hiểu thêm</a>
            </div>
          </div>

          <div className="item">
            <div className="icon">{/* <img src="icon-box.png" alt=""> */}</div>
            <div className="text">
              <h3>VẬN CHUYỂN AN TOÀN, TRÁNH HƯ HẠI ĐĨA</h3>
              <a href="#">Tìm hiểu thêm</a>
            </div>
          </div>
        </div>
      </div>
      {/* Quảng cáo */}
      <div className="quangcao-container">
        <div className="left-block">
          <div className="left-content-quangcao">
            <h2>BỐI RỐI CHƯA BIẾT NÊN MUA GÌ?</h2>
            <p>
              Đôi khi bạn cần gợi ý đĩa nhạc hay. <br />
              Đôi khi bạn cần tư vấn chọn quà tặng. <br />
              Đừng ngần ngại liên hệ với SolMusic qua:
            </p>
            <div className="socials">
              <a href="#" className="social-btn">
                <span>📸</span> @SOLMUSIC.VN
              </a>
              <a href="#" className="social-btn">
                <span>📘</span> FB.COM/SOLMUSIC.VN
              </a>
            </div>
          </div>
        </div>

        <div className="right-block">
          <div className="right-content-quangcao">
            <h2>
              ĐĂNG KÝ NHẬN TIN, <br />
              VOUCHER VỀ TAY
            </h2>
            <p>
              Đăng ký để nhận thông tin mới nhất <br />
              về đĩa mới về sản phẩm, khuyến mãi...
            </p>
            <button className="btn-register">ĐĂNG KÝ NGAY</button>
          </div>
          <div className="icon-ticket"></div>
        </div>
      </div>

      {/* San pham ban chay nhat */}
      <div className="album-container-box">
        <h2 className="title">ALBUM NỔI BẬT</h2>

        <div className="album-container" id="albumList">
          {albums.map((album) => {
            return (
              <div className="album-card">
                <img src={album.img} alt={album.name} />
                <p className="album-name">{album.name}</p>
                <p className="price">{album.price}</p>
                <button className="btn-add">XEM CHI TIẾT</button>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2 */}

      <div className="playlist">
        <div className="playlist-left">
          <h2>SOLMUSIC PLAYLIST</h2>
          <p>
            Ở các nơi khác, nhân viên không nghe nhạc tránh xao lãng. <br />
            Ở SolMusic, chúng tôi ép nhau "phải" nghe nhạc 24/7. <br />
            Stalk xem chúng tôi đang nghe nhạc gì.
          </p>
        </div>
        <div className="playlist-right">
          <button className="playlist-btn">PLAYLIST</button>
          <h3>SOLMUSIC ĐANG NGHE GÌ?</h3>
          <div class="icons">
            <i class="fa-brands fa-tiktok"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-spotify"></i>
          </div>
        </div>
      </div>

      {/* Thêm */}
      <div className="them">
        <a href="">1</a>
        <a href="">2</a>
        <a href="">3</a>
        <a href="">...</a>
        <a href="">9</a>
      </div>
    </>
  );
};
export default Home;
