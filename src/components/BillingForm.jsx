import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export default function BillingForm({ setFormValid }) {
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("First Name is required")
      .min(2, "First Name must be at least 2 characters"),
    lastName: Yup.string()
      .required("Last Name is required")
      .min(2, "Last Name must be at least 2 characters"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    country: Yup.string().required("Country is required"),
    companyName: Yup.string()
      .required("Company Name is required")
      .min(2, "Company Name must be at least 2 characters"),
    streetAddress: Yup.string()
      .required("Street Address is required")
      .min(5, "Street Address must be at least 5 characters"),
    phone: Yup.string()
      .required("Phone Number is required")
      .matches(/^[0-9]+$/, "Phone number must contain only digits")
      .min(10, "Phone number must be at least 10 digits")
      .max(15, "Phone number can't be longer than 15 digits"),
    postaAndZip: Yup.string().required("Posta & Zip is required"),
    Message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    toast.success("Form submitted successfully!");
    resetForm();
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl w-full lg:w-140 xl:w-180">
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          country: "",
          companyName: "",
          streetAddress: "",
          phone: "",
          postaAndZip: "",
          Message: "",
        }}
        validationSchema={validationSchema}
      >
        {({ isValid, dirty }) => {
          useEffect(() => {
            setFormValid(isValid && dirty);
          }, [isValid, dirty]);

          return (
            <Form className="flex flex-col gap-6 text-black">
              {/* First & Last Name */}
              <div className="flex gap-5 md:gap-10">
                <div className="flex flex-col gap-3">
                  <h1>First Name*</h1>
                  <Field
                    name="firstName"
                    type="text"
                    placeholder="Enter Your First Name"
                    className="w-full p-5 rounded-xl border border-gray-300"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="p"
                    className="text-red-500 font-semibold"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h1>Last Name*</h1>
                  <Field
                    name="lastName"
                    type="text"
                    placeholder="Enter Your Last Name"
                    className="w-full p-5 rounded-xl border border-gray-300"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="p"
                    className="text-red-500 font-semibold"
                  />
                </div>
              </div>

              {/* Country */}
              <div className="flex flex-col gap-3">
                <h1>Country*</h1>
                <Field
                  as="select"
                  name="country"
                  className="w-full p-5 rounded-xl border border-gray-300"
                >
                  <option value="">Select your country</option>
                  <option value="Egypt">Egypt</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="Germany">Germany</option>
                </Field>
                <ErrorMessage
                  name="country"
                  component="p"
                  className="text-red-500 font-semibold"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-3">
                <h1>Email*</h1>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full p-5 rounded-xl border border-gray-300"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 font-semibold"
                />
              </div>

              {/* Company Name */}
              <div className="flex flex-col gap-3">
                <h1>Company Name*</h1>
                <Field
                  name="companyName"
                  type="text"
                  placeholder="Enter Company Name"
                  className="w-full p-5 rounded-xl border border-gray-300"
                />
                <ErrorMessage
                  name="companyName"
                  component="p"
                  className="text-red-500 font-semibold"
                />
              </div>

              {/* Street Address */}
              <div className="flex flex-col gap-3">
                <h1>Street Address*</h1>
                <Field
                  name="streetAddress"
                  type="text"
                  placeholder="Enter Street Address"
                  className="w-full p-5 rounded-xl border border-gray-300"
                />
                <ErrorMessage
                  name="streetAddress"
                  component="p"
                  className="text-red-500 font-semibold"
                />
              </div>

              {/* Phone & Postal */}
              <div className="flex gap-5 md:gap-10">
                <div className="flex flex-col gap-3">
                  <h1>Phone*</h1>
                  <Field
                    name="phone"
                    type="text"
                    placeholder="Enter Phone Number"
                    className="w-full p-5 rounded-xl border border-gray-300"
                  />
                  <ErrorMessage
                    name="phone"
                    component="p"
                    className="text-red-500 font-semibold"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h1>Posta / Zip*</h1>
                  <Field
                    name="postaAndZip"
                    type="text"
                    className="w-full p-5 rounded-xl border border-gray-300"
                  />
                  <ErrorMessage
                    name="postaAndZip"
                    component="p"
                    className="text-red-500 font-semibold"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-3">
                <h1>Order Notes*</h1>
                <Field
                  name="Message"
                  as="textarea"
                  placeholder="Enter Your Message"
                  className="w-full p-5 min-h-32 rounded-xl border border-gray-300"
                />
                <ErrorMessage
                  name="Message"
                  component="p"
                  className="text-red-500 font-semibold"
                />
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
