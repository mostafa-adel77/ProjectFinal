import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BillingForm from "../components/BillingForm";
import OrderSummary from "../components/OrderSummary";
import { useCart } from "../store";

export default function Checkout() {
  const navigate = useNavigate();
  const { items } = useCart();
  const [isFormValid, setFormValid] = useState(false);

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
            <h1 className="text-3xl md:text-6xl font-bold">CheckOut</h1>
            <div className="flex gap-5">
              <button
                onClick={() => navigate("/shop")}
                className="text-xl font-bold bg-Yellow px-6 py-4 rounded-4xl text-MentGrean hover:cursor-pointer hover:text-white hover:bg-MentGrean border-2 hover:border-white"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BILLING + ORDER */}
      <section className="flex justify-center bg-creamy text-black py-10 pb-50">
        <div className="container flex flex-col">
          <div className="w-full flex flex-col lg:flex-row gap-7 p-4">
            <div className="left flex flex-col gap-5">
              <h1 className="text-3xl font-bold">Billing Details</h1>
              <BillingForm setFormValid={setFormValid} />
            </div>
            <div className="right flex flex-col gap-5">
              <h3 className="text-3xl font-bold">Your Order</h3>
              <OrderSummary isFormValid={isFormValid} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
