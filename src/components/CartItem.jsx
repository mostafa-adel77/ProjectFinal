import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useCart } from "../store";

export default function CartItem({ product }) {
  let domain = "http://localhost:1337";
  const { decrementQty, incrementQty, removeItemFromCart } = useCart();
  return (
    <div className="w-full grid grid-cols-6 items-center gap-6 min-w-187.5 py-4">
      {/* Image */}
      <img
        className="w-20 mx-auto"
        src={domain + product.img?.url}
        alt={product?.name}
      />

      {/* Name */}
      <h1 className="font-semibold text-center">{product?.name}</h1>

      {/* Price */}
      <h1 className="text-center">${product?.price}.00</h1>

      {/* Qty */}
      <div className="flex items-center justify-center gap-3">
        <FaMinus
          onClick={() => decrementQty(product.documentId)}
          className="text-xl cursor-pointer"
        />
        <span className="bg-white px-4 py-2 rounded">{product?.qty}</span>
        <FaPlus
          onClick={() => incrementQty(product.documentId)}
          className="text-xl cursor-pointer"
        />
      </div>

      {/* Total */}
      <h1 className="text-center font-semibold">
        ${product.price * product.qty}
      </h1>

      {/* Remove */}
      <div className="flex justify-center">
        <MdDeleteForever
          onClick={() => removeItemFromCart(product.documentId)}
          className="text-red-500 cursor-pointer text-3xl"
        />
      </div>
    </div>
  );
}
