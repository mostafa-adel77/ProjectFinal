import couchImg from "../assets/images/couch.png";
import dotsGreen from "../assets/images/dots-green.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import CartItem from "../components/CartItem";
import { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../store";
export default function Cart() {
  const { items, total } = useCart();
  const navigate = useNavigate();
  let domain = "http://localhost:1337";
  let url = domain + "/api/products";
  useEffect(() => {
    AOS.init({ duration: 800, once: false, mirror: true, offset: 120 });
    axios
      .get(url, { params: { populate: "*" } })
      .then((res) => setProducts(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {/* HERO */}
      <section className="w-full flex justify-center bg-MentGrean text-white">
        <div className="container px-5 py-20 flex flex-col lg:flex-row items-center gap-10">
          <div data-aos="fade-right" className="lg:w-1/2 flex flex-col gap-12">
            <h1 className="text-3xl md:text-6xl font-bold">Cart</h1>
            <p className="text-Gray">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <button
              onClick={() => navigate("/shop")}
              className="text-xl w-full md:w-50 font-bold bg-Yellow px-6 py-4 rounded-4xl text-MentGrean hover:cursor-pointer hover:text-white hover:bg-MentGrean border-2 hover:border-white"
            >
              Shop Now
            </button>
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
      {/* CART TABLE */}
      <section className="w-full flex justify-center bg-creamy pb-30 md:pb-15">
        <div className="container p-5 text-black py-20">
          {/* Scroll Container */}
          <div className="w-full overflow-x-auto">
            {/* Header */}
            <div className="grid grid-cols-6 gap-6 min-w-187.5 pb-4 font-bold text-2xl">
              <h1 className="text-center">Image</h1>
              <h1 className="text-center">Name</h1>
              <h1 className="text-center">Price</h1>
              <h1 className="text-center">Qty</h1>
              <h1 className="text-center">Total</h1>
              <h1 className="text-center">Remove</h1>
            </div>
            <div className="w-full bg-MentGrean h-1 mb-6 min-w-187.5"></div>
            {/* Items */}
            <div className="flex flex-col gap-4 min-w-187.5">
              {items.map((el) => (
                <CartItem key={el.documentId} product={el} />
              ))}
            </div>
          </div>
          <div className="w-full bg-MentGrean h-1 mb-6"></div>
          {/* cart Total */}
          <div className=" flex flex-col gap-15 md:p-10">
            <h1 className="text-4xl font-bold">Cart Totals</h1>
            <div className="flex flex-col p-10 gap-10 rounded-4xl shadow-2xl text-2xl font-bold">
              <div className="flex gap-10">
                <h1>SubTotal</h1> <h1>${total}</h1>
              </div>
              <div className="flex gap-21">
                <h1>Total</h1> <h1>${total}</h1>
              </div>
              <Link
                to="/checkout"
                className="w-full text-center p-5 bg-MentGrean rounded-full text-3xl font-bold text-white hover:cursor-pointer hover:bg-black transition duration-300"
              >
                Proceed To CheckOut
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
