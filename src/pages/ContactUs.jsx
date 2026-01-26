import dotsGreen from "../assets/images/dots-green.svg";
import couchImg from "../assets/images/couch.png";
import { useNavigate } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function ContactUs() {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    Message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    sessionStorage.setItem("newsletter", JSON.stringify(values));
    toast.success("The Form Is Submited!!")
    console.log(values);
    resetForm();
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 120,
    });
  }, []);
  return (
    <>
      {/* TOP SECTION */}
      <section className="w-full flex justify-center bg-MentGrean text-white">
        <div className="container px-5 py-20 flex flex-col lg:flex-row items-center gap-10">
          {/* LEFT */}
          <div data-aos="fade-right" data-aos-once="false" className="lg:w-1/2 flex flex-col gap-12">
            <h1 className="text-3xl md:text-6xl font-bold">Contact Us</h1>

            <p className="text-Gray">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>

            <div className="flex gap-5">
              <button
                onClick={() => navigate("/shop")}
                className="text-xl font-bold bg-Yellow px-6 py-4 rounded-4xl text-MentGrean hover:cursor-pointer hover:text-white hover:bg-MentGrean border-2 hover:border-white"
              >
                Shop Now
              </button>

              <button className="text-xl font-bold bg-MentGrean px-7 py-4 rounded-4xl border-2 border-Gray hover:cursor-pointer hover:bg-black hover:border-white">
                Explore
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div data-aos="fade-left" data-aos-once="false" className="lg:w-1/2 flex justify-center relative">
            <img className="absolute right-0" src={dotsGreen} alt="" />
            <img src={couchImg} alt="Couch" className="max-w-full z-40" />
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="bg-creamy flex justify-center">
        <div className="container mx-auto py-20 flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-GrayBold">
            <div className="flex items-center px-6 md:justify-center gap-4">
              <div className="icon1 transition duration-500 rounded-2xl p-4 bg-MentGrean text-white hover:bg-white hover:text-MentGrean cursor-pointer">
                <FaLocationDot className="text-2xl" />
              </div>
              <p>43 Raymouth Rd. Baltemoer, London 3910</p>
            </div>
            <div className="flex items-center px-6 md:justify-center gap-4">
              <div className="icon1 transition duration-500 rounded-2xl p-4 bg-MentGrean text-white hover:bg-white hover:text-MentGrean cursor-pointer">
                <TfiEmail className="text-2xl" />
              </div>
              <p>info@yourdomain.com</p>
            </div>
            <div className="flex items-center px-6 md:justify-center gap-4">
              <div className="icon1 transition duration-500 rounded-2xl p-4 bg-MentGrean text-white hover:bg-white hover:text-MentGrean cursor-pointer">
                <FaPhone className="text-2xl" />
              </div>
              <p>01205216828</p>
            </div>
          </div>

          <div className="shadow-2xl rounded-3xl flex justify-center">
            <Formik
              initialValues={{ firstName: "", lastName: "", email: "",Message:"" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className="p-6 pb-50 w-full flex justify-center flex-col gap-10 text-GrayBold">
                <div className="flex gap-5 md:gap-10 justify-center relative">
                  <div className="flex flex-col gap-3">
                    <h1>First Name</h1>
                    <Field
                      name="firstName"
                      type="text"
                      placeholder="Enter Your First Name"
                      className="w-full md:w-80 lg:w-md xl:w-lg p-6 input shadow-2 rounded-xl border border-MentGrean bg-white"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="p"
                      className="text-red-500 font-semibold absolute lg:left-5 xl:left-20 -bottom-6"
                    />
                  </div>
                  <div className=" flex flex-col gap-3">
                    <h1>Last Name</h1>
                    <Field
                      name="lastName"
                      type="text"
                      placeholder="Enter Your Last Name"
                      className="w-full md:w-80 lg:w-md xl:w-lg p-6 input shadow-2 rounded-xl border border-MentGrean bg-white"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="p"
                      className="text-red-500 font-semibold absolute lg:left-128 xl:left-160 -bottom-6"
                    />
                  </div>
                </div>

                <div className="flex relative">
                  <div className="flex w-full flex-col gap-3 md:px-5 xl:px-20">
                    <h1>Email Address</h1>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Enter Your Email"
                      className="w-full p-6 input shadow-2 rounded-xl border border-MentGrean bg-white"
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-red-500 font-semibold absolute lg:left-5 xl:left-20 -bottom-6"
                    />
                  </div>
                </div>

                <div className="flex relative">
                  <div className="flex w-full flex-col gap-3 md:px-5 xl:px-20">
                    <h1>Message</h1>
                    <Field
                      name="Message"
                      as="textarea"
                      type="Message"
                      placeholder="Enter Your Message"
                      className="w-full p-6 min-h-50 input shadow-2 rounded-xl border border-MentGrean bg-white"
                    />
                    <ErrorMessage
                      name="Message"
                      component="p"
                      className="text-red-500 font-semibold absolute lg:left-5 xl:left-20 -bottom-6"
                    />
                  </div>
                </div>
                <div className="px-20">
                <button type="submit" className="p-4 w-60 rounded-full bg-MentGrean text-xl font-semibold text-white hover:bg-black hover:cursor-pointer transition duration-500">Send Message</button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
}
