import { Link, useNavigate } from "react-router-dom";
import "./About.css";
import { Button } from "antd";

const About = () => {
  return (
    <>
      <div class="about-container">
        <div class="about-layer">
          <h2>ABOUT SOLMUSIC</h2>
          <p>Về chúng tôi</p>
        </div>
      </div>

      <div class="story">
        <div class="story-container">
          <h2 class="story-title">CÂU CHUYỆN CỦA SOLMUSIC</h2>

          <p>
            SolMusic là một cửa hàng đĩa than với gốc ở Hà Nội còn ngọn thì vươn
            ra khắp Việt Nam. Thành lập từ năm 2018 bởi 2 người trẻ yêu âm nhạc,
            tầm nhìn của chúng tôi không chỉ là bán đĩa than mà rộng hơn: đưa âm
            nhạc tới bạn qua tất cả các giác quan.
          </p>

          <p>
            Âm nhạc nên đến với bạn qua đôi tai, đôi mắt, bàn tay, trí não và cả
            trái tim. SolMusic hiểu rằng định dạng tốt nhất để giữ gìn sự nguyên
            bản của âm thanh và trọn vẹn cảm xúc của người nghe chính là chiếc
            đĩa than.
          </p>

          <p>
            Còn biểu tượng nào kinh điển hơn đĩa than khi nói tới âm nhạc? Đơn
            giản, mộc mạc nhưng cũng có lúc rực sắc, trang trọng, một mảnh ghép
            của lịch sử theo cả nghĩa đen và bóng.
          </p>

          <p>
            Và trên hết, là món quà tuyệt vời cho những tâm hồn yêu âm nhạc.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
