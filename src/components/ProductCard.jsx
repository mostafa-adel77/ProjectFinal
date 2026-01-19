import { useEffect, useState } from "react";
import axios from "axios";
import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function ProductCard() {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  let domain = "http://localhost:1337";
  let endPoint = "/api/products";
  let url = domain + endPoint;
  useEffect(() => {
    axios
      .get(url, { params: { populate: "*" } })
      .then((res) => {
        console.log(res.data.data);
        setProduct(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className=" text-black grid grid-cols-1 md:grid-cols-3 gap-10 p-4">
      {product.map((el) => (
        <div
          key={el.documentId}
          className="py-15 hover:bg-gray-200 hover:rounded-4xl "
        >
          <div className="relative">
            <img
              className="w-full lg:w-75 transform ease-out duration-500 hover:-translate-y-15"
              src={domain + el.img?.url}
              alt=""
            />
            <FaPlusCircle
              onClick={() => navigate("/cart")}
              className="text-4xl cursor-pointer absolute -bottom-25 left-40 md:left-20  xl:left-30 "
            />
          </div>
          <h1 className="text-center text-xl font-semibold">{el.name}</h1>
          <h1 className="text-center text-xl font-bold">${el.price}.00</h1>
        </div>
      ))}
    </div>
  );
}
