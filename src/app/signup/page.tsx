"use client";
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

const SignupPage = () => {
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
        // Optionally, redirect the user to a success page
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
      <div className="container mx-auto py-12">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="w-full p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
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
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Your Name"
                      />
                      {errors.name && touched.name ? (
                        <div className="text-red-500">{errors.name}</div>
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
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Your Email"
                      />
                      {errors.email && touched.email ? (
                        <div className="text-red-500">{errors.email}</div>
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
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Your Password"
                      />
                      {errors.password && touched.password ? (
                        <div className="text-red-500">{errors.password}</div>
                      ) : null}
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline w-full cursor-pointer"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? "Loading..." : "Sign Up"}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default SignupPage;
