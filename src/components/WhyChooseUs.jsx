import truncImg from "../assets/images/truck.svg";
import bagImg from "../assets/images/bag.svg";
import supportImg from "../assets/images/support.svg";
import returnImg from "../assets/images/return.svg";
import whyChooseImg from "../assets/images/why-choose-us-img.jpg";
import dotsYellow from "../assets/images/dots-yellow.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function WhyChooseUs() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 120,
    });
  }, []);
  return (
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
        <div data-aos="zoom-in" className="right relative w-full lg:w-120">
          <img className="absolute md:left-10 md:top-3 lg:-left-10 lg:-top-14" src={dotsYellow} alt="" />
          <img className="rounded-4xl w-70 md:w-110 lg:w-130 z-10 absolute top-8 left-15 md:left-30 lg:left-3" src={whyChooseImg} alt="" />
        </div>
        </div>
      </section>
  )
}
