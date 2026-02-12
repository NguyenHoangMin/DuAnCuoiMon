// import { Link } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { Button } from "antd";

const Header = () => {
  //
  const navigate = useNavigate();
  const currentUser = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))
    : null;
  console.log("===========currentUser", currentUser);
  //

  return (
    <>
      <div className="header-container">
        <div className="logo">
          SOL<span>MUSIC</span>
        </div>

        <div className="navbar">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
          {currentUser ? (
            <>
              <div className="div-tong">
                <div className="hi">Hello, {currentUser.fullName}</div>
                <Button
                  className="btnLogout"
                  type="default"
                  onClick={() => {
                    localStorage.removeItem("currentUser");
                    navigate("/login");
                  }}
                >
                  Logout
                </Button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="login">
                Sign In
              </Link>
              <Link to="/sign-up" className="create">
                Sign Up
              </Link>
            </>
          )}
          {/*  */}
          {/* <Link to="/login" className="login">
            Sign In
          </Link>
          <Link to="/sign-up" className="create">
            Sign Up
          </Link> */}
        </div>
      </div>
      {/* <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}
    </>
  );
};

export default Header;
