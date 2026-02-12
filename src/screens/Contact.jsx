import "./Contact.css";
import { Button } from "antd";

const Contact = () => {
  return (
    <>
      <div class="contact">
        <div class="contact-container">
          <h1 class="contact-title">LIÊN HỆ</h1>

          <p class="contact-intro">
            Bất kỳ thắc mắc, cần sự hỗ trợ hay đề nghị hợp tác, hãy liên hệ với
            SolMusic bằng cách tiện cho bạn nhất dưới đây:
          </p>

          <div class="contact-block">
            <h2 class="highlight">HOTLINE:</h2>
            <p>
              <strong>Gọi điện thoại:</strong> 0973561497 (từ 9AM - 9PM)
            </p>
          </div>

          <div class="contact-block">
            <h2>ĐỊA CHỈ CỬA HÀNG:</h2>
            <p>Số 71 Nguyễn Chí Thanh, Phường Giảng Võ, Hà Nội.</p>
          </div>

          <div class="contact-block">
            <h2>CHAT TRỰC TIẾP QUA MXH:</h2>
            <p>
              Chat trực tiếp với SolMusic qua
              <strong class="link-contact">FACEBOOK PAGE</strong> hoặc
              <strong class="link-contact">INSTAGRAM</strong>.
            </p>
          </div>

          <div class="contact-block">
            <h2>GỬI EMAIL</h2>
            <p>
              Email CSKH SolMusic:
              <a href="mailto:sale@solmusic.vn">sale@solmusic.vn</a>
            </p>
          </div>

          <p class="contact-note">
            Có rất nhiều lí do để bạn phải liên hệ với SolMusic. Ví dụ từng có
            khách inbox SolMusic hỏi đế văn năm nay vào tác phẩm nào?! SolMusic
            hứa sẽ phản hồi nhanh nhất có thể.
          </p>

          <p class="contact-note">
            Các thắc mắc về Chính sách đổi trả hay các thông tin thường gặp bạn
            có thể tham khảo ở cuối trang.
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
