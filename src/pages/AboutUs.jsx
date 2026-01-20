import { useNavigate } from "react-router-dom";
import dotsGreen from "../assets/images/dots-green.svg";
import couchImg from "../assets/images/couch.png";
import WhyChooseUs from "../components/whyChooseUs";
import { useEffect, useState } from "react";
import axios from "axios";
import Testemonial from "../components/Testemonial";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutUs() {
    const navigate = useNavigate();
  let domain = "http://localhost:1337";
  let endpoint = "/api/teams";
  let url = domain + endpoint;
  const [team, setTeam] = useState([]);
  useEffect(() => {
    axios
      .get(url, { params: { populate: "*" } })
      .then((res) => {
        setTeam(res.data.data)
        console.log(res.data.data)
      })
      .catch((err) => {console.log(err)});
  }, []);

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
            <h1 className="text-3xl md:text-6xl font-bold">About Us</h1>

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

      {/* section why choose us */}
      <WhyChooseUs />

      {/* section our team */}
      <div className="flex flex-col items-center pb-50 bg-creamy text-black">
        <div className="container flex flex-col gap-15">
        <h1 className="text-4xl font-bold text-center">Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {
          team.map((el)=>(
          <div key={el.documentId} className="flex flex-col items-center gap-4">
            <img className="w-80 hover:scale-110 transition-transform duration-300" src={domain + el.img?.url} alt="" />
            <h1 className="text-xl font-semibold ">{el.name}</h1>
            <h1 className="text-xl font-semibold text-GrayBold">{el.job}</h1>
            <h1 className="text-xl font-semibold text-GrayBold text-center">{el.desc}</h1>
            </div>
          ))
          }
        </div>
        </div>
      </div>

      {/* section Testemonial */}
         <Testemonial />
    </>
  );
}
