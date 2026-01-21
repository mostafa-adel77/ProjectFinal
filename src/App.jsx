import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import LayoutHeader from "./LayoutHeader";
import Shop from "./pages/Shop";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import ScrollTopButton from "./components/ScrollTopButton";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutHeader />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="aboutUs" element={<AboutUs />} />
            <Route path="services" element={<Services />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contactUs" element={<ContactUs />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="success" element={<Success />} />
          </Route>

          <Route path="*" element={<h1>Error 404 | Page Not Found</h1>} />
        </Routes>
        <ScrollTopButton />
        <Footer />
      </BrowserRouter>
  );
}
