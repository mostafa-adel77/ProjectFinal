import { FaApplePay, FaGooglePay } from "react-icons/fa6";
import { RiVisaLine } from "react-icons/ri";
import { FcSimCardChip } from "react-icons/fc";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

export default function payment() {
  const initialValues = { cardNumber: "", expirationDate: "", cvv: "" };
  const validationSchema = Yup.object({
    cardNumber: Yup.string()
      .required("Card Number is required")
      .matches(/^\d{16}$/, "Card Number must be 16 digits"),

    expirationDate: Yup.string()
      .required("Expiration Date is required")
      .matches(
        /^(0[1-9]|1[0-2])\/\d{2}$/,
        "Expiration Date must be in MM/YY format",
      ),

    cvv: Yup.string()
      .required("CVV is required")
      .matches(/^\d{3}$/, "CVV must be 3 digits"),
  });

  const handlePay = (initialValues) => {
    toast.success("The Payment Is Successfully!!!");
    sessionStorage.setItem("values", JSON.stringify(initialValues));
  };
  return (
    <>
      <section className="bg-white p-6 flex flex-col gap-5 rounded-xl shadow-2xl w-full lg:w-90 xl:w-130">
        <h1 className="text-2xl font-semibold">Payment Card</h1>
        <div className="w-fyll bg-Gray min-h-0.5"></div>
        <h1 className="font-medium">Pay With : </h1>
        <div className="flex gap-8">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="card"
              className="w-6 h-6 rounded-full border-2 border-gray-400 appearance-none checked:bg-green-500 checked:border-green-500 transition-all duration-200"
            />
            Card
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="bankTransfer"
              className="w-6 h-6 rounded-full border-2 border-gray-400 appearance-none checked:bg-green-500 checked:border-green-500 transition-all duration-200"
            />
            Bank Transfer
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="cryptocurrency"
              className="w-6 h-6 rounded-full border-2 border-gray-400 appearance-none checked:bg-green-500 checked:border-green-500 transition-all duration-200"
            />
            Cryptocurrency
          </label>
        </div>
        <div className="flex text-blue-950 text-7xl gap-5 hover:cursor-pointer">
          <FaApplePay />
          <FaGooglePay />
          <RiVisaLine />
          <FcSimCardChip />
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handlePay}
        >
          <Form className="text-GrayBold flex flex-col gap-3">
            <div className=" flex flex-col gap-3">
              <h1 className="text-xl text-black font-semibold">Card Number*</h1>
              <Field
                name="cardNumber"
                placeholder="0000 0000 0000 0000"
                className="w-full p-6 input shadow-2 rounded-xl border-2 border-GrayBold bg-white"
              />
              <ErrorMessage
                name="cardNumber"
                component={"p"}
                className="text-red-500"
              />
            </div>

            <div className="flex gap-5 md:gap-10">
              <div className="flex flex-col gap-3">
                <h1 className="text-xl text-black font-semibold">
                  Expiration Date*
                </h1>
                <Field
                  name="expirationDate"
                  type="text"
                  placeholder="MM/YY"
                  className="w-full p-6 input shadow-2 rounded-xl border-2 border-GrayBold bg-white"
                />
                <ErrorMessage
                  name="expirationDate"
                  component="p"
                  className="text-red-500 font-semibold"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-xl text-black font-semibold">CVV*</h1>
                <Field
                  name="cvv"
                  type="text"
                  placeholder="***"
                  className="p-6 input shadow-2 rounded-xl border-2 border-GrayBold bg-white"
                />
                <ErrorMessage
                  name="cvv"
                  component="p"
                  className="text-red-500 font-semibold"
                />
              </div>
            </div>
            <button
              type="submit"
              className="p-4 w-full rounded-2xl text-xl font-semibold bg-green-500 text-white border-2 border-white hover:cursor-pointer duration-300"
            >
              Pay
            </button>
          </Form>
        </Formik>
      </section>
    </>
  );
}
