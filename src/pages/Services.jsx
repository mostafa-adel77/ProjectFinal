import { useNavigate } from "react-router-dom";
import dotsGreen from "../assets/images/dots-green.svg";
import couchImg from "../assets/images/couch.png";
import truncImg from "../assets/images/truck.svg";
import bagImg from "../assets/images/bag.svg";
import supportImg from "../assets/images/support.svg";
import returnImg from "../assets/images/return.svg";
import ProductCard from "../components/productCard";
import Testemonial from "../components/Testemonial";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Services() {
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
      {/* TOP SECTION */}
      <section className="w-full flex justify-center bg-MentGrean text-white">
        <div className="container px-5 py-20 flex flex-col lg:flex-row items-center gap-10">
          {/* LEFT */}
          <div data-aos="fade-right" data-aos-once="false" className="lg:w-1/2 flex flex-col gap-12">
            <h1 className="text-3xl md:text-6xl font-bold">Services</h1>

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

          {/* RIGHT */}
          <div data-aos="fade-left" data-aos-once="false" className="lg:w-1/2 flex justify-center relative">
            <img className="absolute right-0" src={dotsGreen} alt="" />
            <img src={couchImg} alt="Couch" className="max-w-full z-40" />
          </div>
        </div>
      </section>

      {/* SECTION Services */}
      <section className="w-full pt-20 pb-60 md:pb-40 lg:pb-20 xl:pb-10 flex justify-center bg-creamy">
        <div className="container px-5 flex flex-col gap-10">
          <div className=" w-full grid grid-cols-2 md:grid-cols-4 gap-10 text-black">
            <div className="flex flex-col gap-3">
              <img
                className="w-10 bg-Gray rounded-full p-1"
                src={truncImg}
                alt=""
              />
              <p>Fast & Free Shipping</p>
              <p className="text-GrayBold">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <img
                className="w-10 bg-Gray rounded-full p-1"
                src={bagImg}
                alt=""
              />
              <p>Easy to Shop</p>
              <p className="text-GrayBold">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <img
                className="w-10 bg-Gray rounded-full p-1"
                src={supportImg}
                alt=""
              />
              <p>24/7 Support</p>
              <p className="text-GrayBold">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <img
                className="w-10 bg-Gray rounded-full p-1"
                src={returnImg}
                alt=""
              />
              <p>Hassle Free Returns</p>
              <p className="text-GrayBold">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
          </div>
          <div className=" w-full grid grid-cols-2 md:grid-cols-4 gap-10 text-black">
            <div className="flex flex-col gap-3">
              <img
                className="w-10 bg-Gray rounded-full p-1"
                src={truncImg}
                alt=""
              />
              <p>Fast & Free Shipping</p>
              <p className="text-GrayBold">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <img
                className="w-10 bg-Gray rounded-full p-1"
                src={bagImg}
                alt=""
              />
              <p>Easy to Shop</p>
              <p className="text-GrayBold">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <img
                className="w-10 bg-Gray rounded-full p-1"
                src={supportImg}
                alt=""
              />
              <p>24/7 Support</p>
              <p className="text-GrayBold">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <img
                className="w-10 bg-Gray rounded-full p-1"
                src={returnImg}
                alt=""
              />
              <p>Hassle Free Returns</p>
              <p className="text-GrayBold">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM SECTION */}
      <section className="w-full flex justify-center bg-creamy">
        <div className="container flex flex-col lg:flex-row">
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
          <div className="right grow px-5 py-15">
            <ProductCard />
          </div>
        </div>
      </section>

      {/* section Testemonial */}
      <Testemonial />
    </>
  );
}
