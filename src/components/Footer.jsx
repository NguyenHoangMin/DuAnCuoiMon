import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <h2 className="footer-logo">
              SOL<span>MUSIC</span>
            </h2>

            <div className="footer-social">
              <i className="fab fa-instagram"></i>
              <i className="fab fa-pinterest"></i>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <h3>ABOUT US</h3>
              <a href="#">Our Story</a>
              <a href="#">Sol Music Blog</a>
              <a href="#">History</a>
            </div>

            <div className="footer-col">
              <h3>PRODUCTS</h3>
              <a href="#">Music</a>
              <a href="#">Subscription</a>
              <a href="#">Custom Music</a>
              <a href="#">Footage</a>
            </div>

            <div className="footer-col">
              <h3>PLAYLISTS</h3>
              <a href="#">Newsletter</a>
              <a href="#">Careers</a>
              <a href="#">Press</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>

        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/js/all.min.js"></script> */}
      </div>
    </>
  );
};

export default Footer;
