import { ErrorMessage, Field, Form, Formik } from "formik";
import {FaFacebookF,FaInstagram,FaLinkedinIn,FaTelegramPlane,FaTwitter,} from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import * as Yup from "yup";
import sofaImg from "../assets/images/sofa.png";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    sessionStorage.setItem("newsletter", JSON.stringify(values));
    console.log(values);
    resetForm();
  };

  return (
    <div className="w-full bg-white flex justify-center text-black">
      <div className="container pt-40">
        <div className="top flex flex-col lg:flex-row relative">
          <div className="left flex flex-col">
            <h1 className="text-3xl flex gap-3 items-center font-semibold">
              <span className="text-Gray">
                <MdOutlineMailOutline />
              </span>
              Subscribe to Newsletter
            </h1>

            <Formik
              initialValues={{ name: "", email: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className="p-4 w-full md:w-160 relative flex gap-4">
                <Field
                  name="name"
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full md:w-100 p-6 input shadow-2 rounded-xl border border-MentGrean bg-white"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-red-500 absolute left-10 -bottom-1"
                />

                <Field
                  name="email"
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full md:w-100 p-6 input shadow-2 rounded-xl border border-MentGrean bg-white"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 absolute right-15 md:right-40 -bottom-1"
                />

                <button
                  type="submit"
                  className="bg-MentGrean cursor-pointer flex justify-center w-40 text-white rounded-xl p-2"
                >
                  <FaTelegramPlane className="text-4xl" />
                </button>
              </Form>
            </Formik>
          </div>
          <div className="right absolute -top-90 md:-top-60 right-0">
            <img className="w-full md:w-100" src={sofaImg} alt="" />
          </div>
        </div>
        <div className="bottom p-3 flex flex-col md:flex-row flex-wrap lg:flex-nowrap gap-20">
          <div className="flex w-full md:w-110 flex-col gap-5">
            <h1 className="text-4xl font-semibold text-MentGrean">
              Furni<span className="text-Gray text-3xl">.</span>
            </h1>
            <p className="text-GrayBold">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant
            </p>
            <div className="icons flex gap-5">
              <div className="icon1 rounded-full p-4 bg-gray-300 text-MentGrean hover:bg-MentGrean hover:text-white cursor-pointer">
                <FaFacebookF
                  onClick={() => navigate("https://www.facebook.com/")}
                  className="text-3xl"
                />
              </div>
              <div className="icon2 rounded-full p-4 bg-gray-300 text-MentGrean hover:bg-MentGrean hover:text-white cursor-pointer">
                <FaTwitter onClick={() => navigate("/")} className="text-3xl " />
              </div>
              <div className="icon3 rounded-full p-4 bg-gray-300 text-MentGrean hover:bg-MentGrean hover:text-white cursor-pointer">
                <FaInstagram
                  onClick={() => navigate("https://www.instagram.com/")}
                  className="text-3xl"
                />
              </div>
              <div className="icon4 rounded-full p-4 bg-gray-300 text-MentGrean hover:bg-MentGrean hover:text-white cursor-pointer">
                <FaLinkedinIn
                  onClick={() => navigate("https://www.linkedin.com/feed/")}
                  className="text-3xl"
                />
              </div>
            </div>
          </div>
          <div className="text-GrayBold flex flex-col gap-3 ">
            <Link to={("/aboutus")}>Nordic Chair</Link>
            <Link to={("/services")}>Kruzo Aero</Link>
            <Link to={("/blog")}>Ergonomic Chair</Link>
            <Link to={("/contactus")}>Contact us</Link>
          </div>                  
          <div className="text-GrayBold flex flex-col gap-3 ">
            <Link to={("/")}>Support</Link>
            <Link to={("/")}>Knowledge base</Link>
            <Link to={("/")}>Live chat</Link>
          </div>
          <div className="text-GrayBold flex flex-col gap-3 ">
            <Link to={("/")}>Jobs</Link>
            <Link to={("/")}>Our team</Link>
            <Link to={("/")}>Leadership</Link>
            <Link to={("/")}>Privacy Policy</Link>
          </div>
          <div className="text-GrayBold flex flex-col gap-3 ">
            <Link to={("/")}>Nordic Chair</Link>
            <Link to={("/")}>Kruzo Aero</Link>
            <Link to={("/")}>Ergonomic Chair</Link>
          </div>

        </div>
        <h1 className="text-3xl py-10 text-center font-bold text-MentGrean">Copyright © 2026 | Created By Mostafa Adel </h1>
      </div>
    </div>
  );
}
