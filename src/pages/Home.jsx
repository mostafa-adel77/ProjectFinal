import { useNavigate } from "react-router-dom";
import couchImg from "../assets/images/couch.png";
import truncImg from "../assets/images/truck.svg";
import bagImg from "../assets/images/bag.svg";
import supportImg from "../assets/images/support.svg";
import returnImg from "../assets/images/return.svg";
import ProductCard from "../components/productCard";
import whyChooseImg from "../assets/images/why-choose-us-img.jpg";
import dotsGreen from "../assets/images/dots-green.svg";
import dotsYellow from "../assets/images/dots-yellow.svg";
import helpYou from "../assets/images/HelpYou.png"
import Slider from "../components/Slider";
import post1 from "../assets/images/post-1.jpg"
import post2 from "../assets/images/post-2.jpg"
import post3 from "../assets/images/post-3.jpg"

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      {/* TOP SECTION */}
      <section className="w-full bg-MentGrean text-white">
        <div className="container mx-auto px-5 py-20 flex flex-col lg:flex-row items-center gap-10">
          {/* LEFT */}
          <div className="lg:w-1/2 flex flex-col gap-12">
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
                className="text-xl font-bold bg-Yellow px-6 py-4 rounded-4xl text-MentGrean"
              >
                Shop Now
              </button>

              <button className="text-xl font-bold bg-MentGrean px-7 py-4 rounded-4xl border-3 border-Gray hover:border-white">
                Explore
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:w-1/2 flex justify-center relative">
          <img className="absolute right-0" src={dotsGreen} alt="" />
            <img src={couchImg} alt="Couch" className="max-w-full z-40" />
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

          <button onClick={()=>navigate("/shop")} className="w-40 cursor-pointer text-xl font-bold bg-black px-7 py-4 rounded-4xl text-white">
            Explore
          </button>
          </div>
          <div className="right grow px-5 py-15">
            <ProductCard />
          </div>
        </div>
      </section>
      
      {/* Section Why Chosee Us */}
      <section className="w-full pb-100 md:pb-150 lg:pb-10 xl:pb-50 py-40 flex justify-center bg-creamy">
        <div className="container px-5 flex flex-col lg:flex-row gap-10">
        <div className="left w-full lg:w-175 flex flex-col gap-10 text-black">
          <div className="top flex flex-col gap-4">
          <h1 className="text-3xl font-semibold">Why Choose Us</h1>
          <p className=" text-GrayBold">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
          </div>
          <div className="bottom grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-3">
              <img className="w-10 bg-Gray rounded-full p-1" src={truncImg} alt="" />
              <p>Fast & Free Shipping</p>
              <p className="text-GrayBold">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
            </div>
            <div className="flex flex-col gap-3">
              <img className="w-10 bg-Gray rounded-full p-1" src={bagImg} alt="" />
              <p>Easy to Shop</p>
              <p className="text-GrayBold">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
            </div>
            <div className="flex flex-col gap-3">
              <img className="w-10 bg-Gray rounded-full p-1" src={supportImg} alt="" />
              <p>24/7 Support</p>
              <p className="text-GrayBold">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
            </div>
            <div className="flex flex-col gap-3">
              <img className="w-10 bg-Gray rounded-full p-1" src={returnImg} alt="" />
              <p>Hassle Free Returns</p>
              <p className="text-GrayBold">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
            </div>
          </div>
          </div>
        <div className="right relative w-full lg:w-120">
          <img className="absolute md:left-10 md:top-3 lg:-left-10 lg:-top-14" src={dotsYellow} alt="" />
          <img className="rounded-4xl w-70 md:w-110 lg:w-130 z-10 absolute top-8 left-15 md:left-30 lg:left-3" src={whyChooseImg} alt="" />
        </div>
        </div>
      </section>
       
       {/* section help You */}
       <section className="w-full bg-creamy pb-20 flex justify-center">
        <div className="container flex gap-6 flex-col lg:flex-row">
          <div className="left">
            <img className="w-full lg:w-500" src={helpYou} alt="" />
          </div>
          <div className="right p-5 flex flex-col gap-7 text-black">
            <h1 className="text-4xl font-semibold">We Help You Make Modern Interior Design</h1>
            <p className="text-GrayBold text-lg">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>
          <div className="grid grid-cols-2 p-5 gap-5">
            <li>Donec vitae odio quis nisl dapibus malesuada</li>
            <li>Donec vitae odio quis nisl dapibus malesuada</li>
            <li>Donec vitae odio quis nisl dapibus malesuada</li>
            <li>Donec vitae odio quis nisl dapibus malesuada</li>
          </div>
            <button onClick={()=>navigate("/shop")} className="w-40 cursor-pointer text-xl font-bold bg-black px-7 py-4 rounded-4xl text-white">
            Explore
          </button>
          </div>
        </div>
       </section>

       {/* section Testimonial */}
       <section className="w-full bg-creamy pb-20 flex justify-center">
        <div className="container flex gap-5 flex-col items-center text-black">
          <h1 className="text-3xl font-bold">Testimonials</h1>
        <Slider />
        </div>
       </section>

       {/* section Recent Blog */}
        <section className="w-full pb-50 bg-creamy flex justify-center">
          <div className="container p-4 text-black flex flex-col gap-5">
            <h1 className="text-4xl font-bold">Recent Blog</h1>
            <div className="parent w-full flex flex-col md:flex-row gap-7">
                <div className="son w-full md:w-100">
                  <img className=" rounded-4xl" src={post1} alt="" />
                  <p className="text-lg font-semibold">First Time Home Owner Ideas <span className="text-GrayBold text-lg">by</span> Kristin Watson <span className="text-GrayBold text-lg">on</span>  Dec 19, 2021</p>
                </div>
                <div className="son w-full md:w-100">
                  <img className=" rounded-4xl" src={post2} alt="" />
                  <p className="text-lg font-semibold">How To Keep Your Furniture Clean <span className="text-GrayBold text-lg">by</span> Robert Fox  <span className="text-GrayBold text-lg">on</span>  Dec 15, 2021</p>
                </div>
                <div className="son w-full md:w-100">
                  <img className=" rounded-4xl" src={post3} alt="" />
                  <p className="text-lg font-semibold">Small Space Furniture Apartment Ideas <span className="text-GrayBold text-lg">by</span> Kristin Watson <span className="text-GrayBold text-lg">on</span> Dec 12, 2021</p>
                </div>
            </div>
          </div>
        </section>


    </>
  );
}
