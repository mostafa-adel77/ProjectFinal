import dotsGreen from "../assets/images/dots-green.svg";
import couchImg from "../assets/images/couch.png";
import { useNavigate } from "react-router-dom";
import post1 from "../assets/images/post-1.jpg";
import post2 from "../assets/images/post-2.jpg";
import post3 from "../assets/images/post-3.jpg";
import Testemonial from "../components/Testemonial";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Blog() {
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
            <h1 className="text-3xl md:text-6xl font-bold">Blog</h1>

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

      {/* section help You */}
      <section className="w-full pt-20 pb-50 bg-creamy flex justify-center">
        <div className="container p-4 text-black flex flex-col gap-5">
          <h1 className="text-4xl font-bold">Recent Blog</h1>
          <div className="parent w-full flex flex-col md:flex-row gap-7">
            <div className="son w-full md:w-100">
              <img className="hover:scale-90 transition-transform duration-300 rounded-4xl" src={post1} alt="" />
              <p className="text-lg font-semibold">
                First Time Home Owner Ideas
                <span className="text-GrayBold text-lg">by</span> Kristin Watson
                <span className="text-GrayBold text-lg">on</span> Dec 19, 2021
              </p>
            </div>
            <div className="son w-full md:w-100">
              <img className="hover:scale-90 transition-transform duration-300 rounded-4xl" src={post2} alt="" />
              <p className="text-lg font-semibold">
                How To Keep Your Furniture Clean
                <span className="text-GrayBold text-lg">by</span> Robert Fox
                <span className="text-GrayBold text-lg">on</span> Dec 15, 2021
              </p>
            </div>
            <div className="son w-full md:w-100">
              <img className="hover:scale-90 transition-transform duration-300 rounded-4xl" src={post3} alt="" />
              <p className="text-lg font-semibold">
                Small Space Furniture Apartment Ideas
                <span className="text-GrayBold text-lg">by</span> Kristin Watson
                <span className="text-GrayBold text-lg">on</span> Dec 12, 2021
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full pb-50 bg-creamy flex justify-center">
        <div className="container p-4 text-black flex flex-col gap-5">
          <div className="parent w-full flex flex-col md:flex-row gap-7">
            <div className="son w-full md:w-100">
              <img className="hover:scale-90 transition-transform duration-300 rounded-4xl" src={post1} alt="" />
              <p className="text-lg font-semibold">
                First Time Home Owner Ideas
                <span className="text-GrayBold text-lg">by</span> Kristin Watson
                <span className="text-GrayBold text-lg">on</span> Dec 19, 2021
              </p>
            </div>
            <div className="son w-full md:w-100">
              <img className="hover:scale-90 transition-transform duration-300 rounded-4xl" src={post2} alt="" />
              <p className="text-lg font-semibold">
                How To Keep Your Furniture Clean
                <span className="text-GrayBold text-lg">by</span> Robert Fox
                <span className="text-GrayBold text-lg">on</span> Dec 15, 2021
              </p>
            </div>
            <div className="son w-full md:w-100">
              <img className="hover:scale-90 transition-transform duration-300 rounded-4xl" src={post3} alt="" />
              <p className="text-lg font-semibold">
                Small Space Furniture Apartment Ideas
                <span className="text-GrayBold text-lg">by</span> Kristin Watson
                <span className="text-GrayBold text-lg">on</span> Dec 12, 2021
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full pb-50 bg-creamy flex justify-center">
        <div className="container p-4 text-black flex flex-col gap-5">
          <div className="parent w-full flex flex-col md:flex-row gap-7">
            <div className="son w-full md:w-100">
              <img className="hover:scale-90 transition-transform duration-300 rounded-4xl" src={post1} alt="" />
              <p className="text-lg font-semibold">
                First Time Home Owner Ideas
                <span className="text-GrayBold text-lg">by</span> Kristin Watson
                <span className="text-GrayBold text-lg">on</span> Dec 19, 2021
              </p>
            </div>
            <div className="son w-full md:w-100">
              <img className="hover:scale-90 transition-transform duration-300 rounded-4xl" src={post2} alt="" />
              <p className="text-lg font-semibold">
                How To Keep Your Furniture Clean
                <span className="text-GrayBold text-lg">by</span> Robert Fox
                <span className="text-GrayBold text-lg">on</span> Dec 15, 2021
              </p>
            </div>
            <div className="son w-full md:w-100">
              <img className="hover:scale-90 transition-transform duration-300 rounded-4xl" src={post3} alt="" />
              <p className="text-lg font-semibold">
                Small Space Furniture Apartment Ideas
                <span className="text-GrayBold text-lg">by</span> Kristin Watson
                <span className="text-GrayBold text-lg">on</span> Dec 12, 2021
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section Testemonial */}
      <Testemonial />
    </>
  );
}
