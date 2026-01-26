import { Link } from "react-router-dom";
import { useCart } from "../store";
import { toast } from "react-hot-toast";

export default function OrderSummary({ isFormValid }) {
  const { items, total } = useCart();

  return (
    <div className="bg-white p-6 flex flex-col gap-5 rounded-xl shadow-2xl w-full lg:w-90 xl:w-130">
      <div className="flex justify-between border-b border-gray-300 pb-2 font-semibold">
        <span>Product</span>
        <span>Total</span>
      </div>

      {items.map((item) => (
        <div
          key={item.documentId}
          className="flex justify-between py-2 border-b border-gray-200"
        >
          <span>
            {item.name} * {item.qty}
          </span>
          <span>${item.qty * item.price}.00</span>
        </div>
      ))}

      <div className="flex justify-between py-2 border-b border-gray-300 font-semibold">
        <span>Cart Subtotal</span>
        <span>${total}.00</span>
      </div>

      <div className="flex justify-between py-3 border-b border-gray-300 font-bold text-lg">
        <span>Order Total</span>
        <span>${total}.00</span>
      </div>

      <Link
        to={isFormValid ? "/success" : "#"}
        onClick={(e) => {
          if (!isFormValid) {
            e.preventDefault();
            toast.error("Please fill all required fields!");
          } else {
            toast.success("Form submitted successfully!");
          }
        }}
        className={`w-full text-center p-5 rounded-lg font-semibold transition-colors
          ${
            isFormValid
              ? `bg-black text-white hover:bg-gray-800 cursor-pointer`
              : "bg-gray-400 cursor-not-allowed"
          }`}
      >
        Place Order
      </Link>
    </div>
  );
}
