import { useNavigate } from "react-router-dom";
import couchImg from "../assets/images/couch.png";
import dotsGreen from "../assets/images/dots-green.svg";
import ProductCard from "../components/ProductCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Shop() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  let domain = "http://localhost:1337";
  let url = domain + "/api/products";

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 120,
    });

    axios
      .get(url, { params: { populate: "*" } })
      .then((res) => setProducts(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {/* section shop */}
      <section className="w-full flex justify-center bg-MentGrean text-white">
        <div className="container flex flex-col md:flex-row gap-10 px-5 py-20 justify-between">
          <div
            data-aos="fade-right"
            data-aos-once="false"
            className="lg:w-1/2 flex flex-col gap-12"
          >
            <h1 className="text-3xl md:text-6xl font-bold">Shop</h1>

            <p className="text-Gray">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>

            <div className="flex gap-5">
              <button
                onClick={() => navigate("/shop")}
                className="text-xl font-bold bg-Yellow px-6 py-4 rounded-4xl text-MentGrean hover:cursor-pointer hover:text-white hover:bg-MentGrean border-2 hover:border-white"
              >
                Shop Now
              </button>

              <button className="text-xl font-bold bg-MentGrean px-7 py-4 rounded-4xl border-2 border-Gray hover:cursor-pointer hover:bg-black hover:border-white">
                Explore
              </button>
            </div>
          </div>

          <div data-aos="fade-left">
            <div className="lg:w-150 flex justify-center relative">
              <img className="absolute right-0" src={dotsGreen} alt="" />
              <img src={couchImg} alt="Couch" className="max-w-full z-40" />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="w-full flex justify-center bg-creamy text-black px-5 py-20">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((el) => (
            <ProductCard key={el.documentId} product={el} />
          ))}
          {products.map((el) => (
            <ProductCard key={el.documentId} product={el} />
          ))}
          {products.map((el) => (
            <ProductCard key={el.documentId} product={el} />
          ))}
        </div>
      </section>
    </>
  );
}
