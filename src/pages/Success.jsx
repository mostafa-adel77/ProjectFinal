import { BsFillCartCheckFill } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../store";
import { useEffect } from "react";

export default function Success() {
  const navigate = useNavigate();
  const { clearCart, items } = useCart();
  useEffect(() => {
    if (items.length === 0) {
      navigate("/shop");
    }
  }, [items, navigate]);
  return (
    <>
      {/* TOP SECTION */}
      <section className="w-full flex justify-center bg-MentGrean text-white">
        <div className="container px-5 py-20 flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 flex flex-col gap-12">
            <h1 className="text-3xl md:text-6xl font-bold">Success Order</h1>
          </div>
        </div>
      </section>

      <section className="flex justify-center bg-creamy">
        <div className="container w-full flex flex-col items-center py-20 pb-50 gap-8">
          <BsFillCartCheckFill className="text-MentGrean text-[100px]" />
          <h1 className="text-4xl text-black font-bold">Thank you!</h1>
          <h1 className="text-3xl text-center text-GrayBold font-semibold">
            You order was successfuly completed.
          </h1>
          <button
            onClick={() => {
              sessionStorage.removeItem("values");
              navigate("/shop");
              clearCart();
            }}
            className="text-xl flex gap-4 items-center font-bold bg-black px-6 py-4 rounded-4xl text-white hover:cursor-pointer hover:text-white border-2 hover:border-white"
          >
            <span className="text white">
              <FaArrowLeft />
            </span>
            Back To Shop
          </button>
        </div>
      </section>
    </>
  );
}
