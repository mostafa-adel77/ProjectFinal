import { ErrorMessage, Field, Form, Formik } from "formik";
import loginImg from "../assets/images/LoginImage.png";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Register() {
  const navigate = useNavigate();
  let domain = "https://store.skyready.online";
  let endPoint = "/api/auth/local/register";
  let url = domain + endPoint;

  const validationSchema = Yup.object({
    username: Yup.string().required(),
    email: Yup.string().required().email(),
    password: Yup.string()
      .required()
      .min(6, "Password must be at least 6 characters")
      .max(20, "Password must be at most 20 characters")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/[0-9]/, "Must contain at least one number")
      .matches(/[^A-Za-z0-9]/, "Must contain at least one special character"),
  });

  const initialValues = { username: "", email: "", password: "" };
  const handleRegister = (initialValues) => {
    axios
      .post(url, initialValues)
      .then(() => {
        toast.success("Register Successfully!!!");
        navigate("/login")
      })
      .catch((err) => {
        toast.error(err.response.data.error.message);
      });
  };
  useEffect(() => {
    let token = JSON.parse(
      localStorage.getItem("token") || sessionStorage.getItem("token"),
    );
    if (token) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <section className="w-full h-dvh overflow-auto flex justify-center bg-[#160430]">
        <div className="container flex">
          <div className="flex gap-5 lg:gap-30 flex-col md:flex-row">
            <img className="w-full md:w-100 lg:w-160" src={loginImg} alt="" />

            <div className="w-full md:w-100 text-white flex flex-col items-center py-10 gap-10 px-4">
              <h1 className="uppercase text-[50px] font-extrabold">sign Up</h1>
              <Formik
                initialValues={initialValues}
                onSubmit={handleRegister}
                validationSchema={validationSchema}
              >
                <Form className="w-full flex flex-col gap-3">
                  <h1 className="font-bold">Name*</h1>
                  <Field
                    name="username"
                    placeholder="Enter Your User Name"
                    className="w-full p-6 input shadow-2 rounded-xl border bg-[#261046]"
                  />
                  <ErrorMessage
                    name="username"
                    component={"p"}
                    className="text-red-400 "
                  />
                  <h1 className="font-bold">Email*</h1>
                  <Field
                    name="email"
                    placeholder="Enter Your Email"
                    className="w-full p-6 input shadow-2 rounded-xl border bg-[#261046]"
                  />
                  <ErrorMessage
                    name="email"
                    component={"p"}
                    className="text-red-400 "
                  />
                  <h1 className="font-bold">Password*</h1>
                  <Field
                    name="password"
                    placeholder="Enter Your password"
                    className="w-full p-6 input shadow-2 rounded-xl border bg-[#261046]"
                  />
                  <ErrorMessage
                    name="password"
                    component={"p"}
                    className="text-red-400 "
                  />
                  <button
                    type="submit"
                    className="p-4 w-50 mx-auto rounded-full text-xl font-semibold bg-success hover:bg-[#261046] text-black hover:text-white border-2 border-white hover:cursor-pointer duration-300"
                  >
                    Register
                  </button>
                  <h1 className="text-xl font-bold">
                    Already Have Account ?
                    <Link to="/login" className="underline">
                      Please Login
                    </Link>
                  </h1>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
