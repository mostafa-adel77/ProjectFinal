// import { FaMinus, FaPlus } from "react-icons/fa";
// import { MdDeleteForever } from "react-icons/md";

// export default function CartItem({ product }) {
//   let domain = "http://localhost:1337";
//   let qty = 2;
//   return (
//     <>
//       <div className="flex items-center justify-between">
//         <img className="w-15" src={domain + product.img?.url} alt="" />
//         <h1 className="w-15">{product?.name}</h1>
//         <h1>{product?.price}.00</h1>
//         <div className="flex items-center justify-center gap-3"><FaPlus className="text-2xl text-black hover:cursor-pointer" /> <h1 className="bg-white px-4 py-2">{qty}</h1><FaMinus className="text-2xl text-black hover:cursor-pointer" /></div>
//         <h1>{product.price * qty}</h1>
//         <MdDeleteForever className="text-red-500 hover:cursor-pointer text-4xl" />
//       </div>
//     </>
//   );
// }

import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export default function CartItem({ product }) {
  let domain = "http://localhost:1337";
  let qty = 2;

  return (
    <div
      className="w-full grid grid-cols-6 items-center gap-6 min-w-187.5 py-4">
      {/* Image */}
      <img
        className="w-20 mx-auto"
        src={domain + product.img?.url}
        alt={product?.name}
      />

      {/* Name */}
      <h1 className="font-semibold text-center">
        {product?.name}
      </h1>

      {/* Price */}
      <h1 className="text-center">
        {product?.price}.00
      </h1>

      {/* Qty */}
      <div className="flex items-center justify-center gap-3">
        <FaPlus className="text-xl cursor-pointer" />
        <span className="bg-white px-4 py-2 rounded">
          {qty}
        </span>
        <FaMinus className="text-xl cursor-pointer" />
      </div>

      {/* Total */}
      <h1 className="text-center font-semibold">
        {product.price * qty}
      </h1>

      {/* Remove */}
      <div className="flex justify-center">
        <MdDeleteForever className="text-red-500 cursor-pointer text-3xl" />
      </div>
    </div>
  );
}
