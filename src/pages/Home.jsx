import { useNavigate } from "react-router-dom";
import couchImg from "../assets/images/couch.png";
import dotsGreen from "../assets/images/dots-green.svg";
import helpYou from "../assets/images/HelpYou.png";
import post1 from "../assets/images/post-1.jpg";
import post2 from "../assets/images/post-2.jpg";
import post3 from "../assets/images/post-3.jpg";
import WhyChooseUs from "../components/whyChooseUs";
import Testemonial from "../components/Testemonial";
import ProductCard from "../components/ProductCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
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
      {/* TOP SECTION */}
      <section className="w-full flex justify-center bg-MentGrean text-white">
        <div className="container px-5 py-20 flex flex-col lg:flex-row items-center gap-10">
          <div
            data-aos="fade-right"
            data-aos-once="false"
            className="lg:w-1/2 flex flex-col gap-12"
          >
            <h1 className="text-3xl md:text-6xl font-bold">
              Modern Interior Design Studio
            </h1>

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

          <div
            data-aos="fade-left"
            className="lg:w-1/2 flex justify-center relative"
          >
            <img className="absolute right-0" src={dotsGreen} alt="" />
            <img src={couchImg} alt="Couch" className="max-w-full z-40" />
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="w-full flex justify-center bg-creamy text-black">
        <div className="container flex flex-col md:flex-row px-5 py-20">
          <div className="left w-full lg:w-115 px-5 py-20 flex flex-col gap-6">
            <h2 className=" text-2xl md:text-4xl font-semibold text-black">
              Crafted with excellent material.
            </h2>

            <p className="text-GrayBold">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>

            <button
              onClick={() => navigate("/shop")}
              className="w-40 cursor-pointer text-xl font-bold bg-black px-7 py-4 rounded-4xl text-white"
            >
              Explore
            </button>
          </div>
          <div className="right grid grid-cols-1 md:grid-cols-3 gap-10">
            {products.map((el) => (
              <ProductCard key={el.documentId} product={el} />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* section help You */}
      <section className="w-full bg-creamy pb-20 flex justify-center">
        <div className="container overflow-hidden flex gap-6 flex-col lg:flex-row">
          <div data-aos="fade-right" className="left">
            <img className="w-full lg:w-500" src={helpYou} alt="" />
          </div>
          <div
            data-aos="fade-left"
            className="right p-5 flex flex-col gap-7 text-black"
          >
            <h1 className="text-4xl font-semibold">
              We Help You Make Modern Interior Design
            </h1>
            <p className="text-GrayBold text-lg">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant morbi tristique senectus et netus et malesuada
            </p>
            <div className="grid grid-cols-2 p-5 gap-5">
              <li>Donec vitae odio quis nisl dapibus malesuada</li>
              <li>Donec vitae odio quis nisl dapibus malesuada</li>
              <li>Donec vitae odio quis nisl dapibus malesuada</li>
              <li>Donec vitae odio quis nisl dapibus malesuada</li>
            </div>
            <button
              onClick={() => navigate("/shop")}
              className="w-40 cursor-pointer text-xl font-bold bg-black px-7 py-4 rounded-4xl text-white"
            >
              Explore
            </button>
          </div>
        </div>
      </section>

      <Testemonial />

      {/* section Recent Blog */}
      <section className="w-full pb-50 bg-creamy flex justify-center">
        <div className="container p-4 text-black flex flex-col gap-5">
          <h1 className="text-4xl font-bold">Recent Blog</h1>
          <div className="parent w-full flex flex-col md:flex-row gap-7">
            <div className="son w-full md:w-100">
              <img
                className="hover:scale-90 transition-transform duration-300 rounded-4xl"
                src={post1}
                alt=""
              />
              <p className="text-lg font-semibold">
                First Time Home Owner Ideas{" "}
                <span className="text-GrayBold text-lg">by</span> Kristin Watson{" "}
                <span className="text-GrayBold text-lg">on</span> Dec 19, 2021
              </p>
            </div>
            <div className="son w-full md:w-100">
              <img
                className="hover:scale-90 transition-transform duration-300 rounded-4xl"
                src={post2}
                alt=""
              />
              <p className="text-lg font-semibold">
                How To Keep Your Furniture Clean{" "}
                <span className="text-GrayBold text-lg">by</span> Robert Fox{" "}
                <span className="text-GrayBold text-lg">on</span> Dec 15, 2021
              </p>
            </div>
            <div className="son w-full md:w-100">
              <img
                className="hover:scale-90 transition-transform duration-300 rounded-4xl"
                src={post3}
                alt=""
              />
              <p className="text-lg font-semibold">
                Small Space Furniture Apartment Ideas{" "}
                <span className="text-GrayBold text-lg">by</span> Kristin Watson{" "}
                <span className="text-GrayBold text-lg">on</span> Dec 12, 2021
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
