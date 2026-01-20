import { useNavigate } from "react-router-dom";
import couchImg from "../assets/images/couch.png";
import dotsGreen from "../assets/images/dots-green.svg";
import ProductCard from "../components/productCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Shop() {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 120,
    });
  }, []);
  return (
    <>
      {/* section shop */}
    <section className="w-full flex justify-center bg-MentGrean text-white">
      <div className="container flex flex-col md:flex-row gap-10 px-5 py-20 justify-between ">
        <div data-aos="fade-right" data-aos-once="false" className="left flex flex-col gap-8">
          <h1 className="text-4xl font-bold lg:pt-20">Shop</h1>
          <p className="text-Gray">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="text-xl font-bold w-50 bg-Yellow px-6 py-4 rounded-4xl text-MentGrean hover:cursor-pointer hover:text-white hover:bg-MentGrean border-2 hover:border-white"
          >
            Shop Now
          </button>
        </div>
        <div data-aos="fade-left" data-aos-once="false" className="right">
          <div className="lg:w-150 flex justify-center relative">
            <img className="absolute right-0" src={dotsGreen} alt="" />
            <img src={couchImg} alt="Couch" className="max-w-full z-40" />
          </div>
        </div>
      </div>
    </section>
    
     {/* Section Order */}
    <section className="w-full bg-creamy">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
    </>
  );
}
