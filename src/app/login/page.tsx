"use client";
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const LoginSchema = Yup.object().shape({
    email: Yup.string().trim().email("Please enter a valid email address").required("Email is required"),
    password: Yup.string().trim().min(8, "Password must be at least 8 characters").required("Password is required"),
  });

  const handleSubmit = async (values: { email: string; password: string }) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/login", {
        email: values.email.trim(),
        password: values.password.trim(),
      });
      if (response.status === 200) {
        toast.success("Login successful!");
        router.push("/");
      } else {
        toast.error("Invalid credentials");
      }
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data?.error || "Login failed");
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
              Login
            </h2>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={LoginSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
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
                      <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                    ) : null}
                  </div>
                  <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
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
                      <div className="text-red-500 text-sm mt-1">{errors.password}</div>
                    ) : null}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <button
                      className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-200 text-white font-bold py-3 px-6 rounded-lg w-full shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? (
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                        </svg>
                      ) : (
                        "Login"
                      )}
                    </button>
                  </div>
                  <div className="text-center text-sm text-gray-500">
                    Don't have an account?{' '}
                    <Link href="/signup" className="text-orange-500 hover:underline font-semibold">Sign Up</Link>
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

export default LoginPage;
