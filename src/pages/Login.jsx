import { ErrorMessage, Field, Form, Formik } from "formik";
import loginImg from "../assets/images/LoginImage.png";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
  const navigate = useNavigate();
  let domain = "https://store.skyready.online";
  let endPoint = "/api/auth/local";
  let url = domain + endPoint;
  const validationSchema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required(),
    isChecked: Yup.boolean().required(),
  });
  const initialValues = { email: "", password: "", isChecked: false };
  const handleLogin = (initialValues) => {
    let dataSend = {
      identifier: initialValues.email,
      password: initialValues.password,
    };
    console.log(initialValues);
    axios
      .post(url, dataSend)
      .then((res) => {
        let token = JSON.stringify(res.data.jwt);
        initialValues.isChecked
          ? localStorage.setItem("token", token)
          : sessionStorage.setItem("token", token);
        toast.success("Login Success!!!");
        navigate("/checkout");
      })
      .catch((err) => {
        toast.error(err.response.data.error.message);
        navigate("/register");
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
              <h1 className="uppercase text-[50px] font-extrabold">sign in</h1>
              <Formik
                initialValues={initialValues}
                onSubmit={handleLogin}
                validationSchema={validationSchema}
              >
                <Form className="w-full flex flex-col gap-4">
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
                  <label className="flex items-center gap-3">
                    <Field
                      name="isChecked"
                      type="checkbox"
                      className="checkbox checkbox-primary"
                    />
                    Remember Me
                  </label>
                  <button
                    type="submit"
                    className="p-4 w-50 mx-auto rounded-full text-xl font-semibold bg-primary hover:bg-[#261046] text-white border-2 border-white hover:cursor-pointer duration-300"
                  >
                    Login
                  </button>
                  <h1 className="text-xl font-bold">
                    Don't Have Account ?{" "}
                    <Link to="/register" className="underline">
                      Create Account
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
