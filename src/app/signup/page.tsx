"use client";
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must be less than 50 characters")
      .required("Name is required"),
    email: Yup.string()
      .trim()
      .email("Please enter a valid email address")
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email address"
      )
      .required("Email is required"),
    password: Yup.string()
      .trim()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  interface SignupFormValues {
    name: string;
    email: string;
    password: string;
  }

  const handleSubmit = async (values: SignupFormValues) => {
    setLoading(true);
    try {
      const trimmedValues = {
        name: values.name.trim(),
        email: values.email.trim(),
        password: values.password.trim(),
      };
      const response = await axios.post("/api/register", trimmedValues);

      if (response.status === 201) {
        toast.success("User registered successfully!");
        router.push("/");
      } else {
        toast.error("Failed to register user");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        const errorMessage =
          error.response.data?.error || "Error registering user";
        toast.error(errorMessage);
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="flex-1 flex flex-col bg-gradient-to-br from-orange-50 via-white to-orange-100 animate-fade-in">
        <div className="flex-1 flex items-center justify-center py-12">
          <div className="w-full max-w-md bg-white/90 rounded-2xl shadow-2xl border border-orange-100 p-8 animate-pop-in">
            <h2 className="text-4xl font-extrabold text-orange-500 mb-8 text-center drop-shadow">
              Sign Up
            </h2>
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Name
                    </label>
                    <Field
                      id="name"
                      name="name"
                      type="text"
                      className="border border-orange-200 rounded-lg w-full py-3 px-4 text-gray-700 bg-orange-50 focus:bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all duration-200 outline-none shadow-sm placeholder-gray-400"
                      placeholder="Your Name"
                    />
                    {errors.name && touched.name ? (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.name}
                      </div>
                    ) : null}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Email
                    </label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      className="border border-orange-200 rounded-lg w-full py-3 px-4 text-gray-700 bg-orange-50 focus:bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all duration-200 outline-none shadow-sm placeholder-gray-400"
                      placeholder="Your Email"
                    />
                    {errors.email && touched.email ? (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </div>
                    ) : null}
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="password"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Password
                    </label>
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      className="border border-orange-200 rounded-lg w-full py-3 px-4 text-gray-700 bg-orange-50 focus:bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all duration-200 outline-none shadow-sm placeholder-gray-400"
                      placeholder="Your Password"
                    />
                    {errors.password && touched.password ? (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.password}
                      </div>
                    ) : null}
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-200 text-white font-bold py-3 px-6 rounded-lg w-full shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? (
                        <svg
                          className="w-5 h-5 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          ></path>
                        </svg>
                      ) : (
                        "Sign Up"
                      )}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default SignupPage;
