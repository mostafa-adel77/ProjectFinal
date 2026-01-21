import { FaPlusCircle } from "react-icons/fa";
import { useCart } from "../store";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  let domain = "http://localhost:1337";

  return (
    <div className="py-15 hover:bg-gray-200 hover:rounded-4xl">
      <div className="flex flex-col gap-3 items-center">
        <img
          className="w-full lg:w-75 transform ease-out duration-500 hover:-translate-y-15"
          src={domain + product.img?.url}
          alt=""
        />
        <h1 className="text-center text-xl font-semibold">{product.name}</h1>
        <h1 className="text-center text-xl font-bold">${product.price}.00</h1>
        <FaPlusCircle
          onClick={() => addToCart(product)}
          className="text-4xl cursor-pointer"
        />
      </div>
    </div>
  );
}
