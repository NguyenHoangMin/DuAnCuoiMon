import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectRoute from "./components/ProtectRoute";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Shop from "./screens/Shop";
import ProductDetail from "./screens/ProductDetail";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/home"
          element={
            <ProtectRoute>
              <Home />
            </ProtectRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectRoute>
              <About />
            </ProtectRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectRoute>
              <Contact />
            </ProtectRoute>
          }
        />
        <Route
          path="/shop"
          element={
            <ProtectRoute>
              <Shop />
            </ProtectRoute>
          }
        />
        <Route
          path="/product-detail/:id"
          element={
            <ProtectRoute>
              <ProductDetail />
            </ProtectRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
