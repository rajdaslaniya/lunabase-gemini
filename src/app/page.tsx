"use client";
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import BenefitCard from "@/components/BenefitCard";

const Home = () => {
  const [benefits, setBenefits] = useState([
    { title: "Benefit 1", description: "Description of benefit 1." },
    { title: "Benefit 2", description: "Description of benefit 2." },
    { title: "Benefit 3", description: "Description of benefit 3." },
    { title: "Benefit 4", description: "Description of benefit 4." },
  ]);

  useEffect(() => {
    setTimeout(() => {
      setBenefits([
        {
          title: "New Benefit 1",
          description: "New description of benefit 1.",
        },
        {
          title: "New Benefit 2",
          description: "New description of benefit 2.",
        },
        {
          title: "New Benefit 3",
          description: "New description of benefit 3.",
        },
        {
          title: "New Benefit 4",
          description: "New description of benefit 4.",
        },
      ]);
    }, 3000);
  }, []);

  return (
    <Layout>
      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70 bg-gradient-to-r from-black to-transparent"></div>
        <div className="container text-center relative z-10 py-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Welcome to Restaurant
          </h2>
          <p className="text-2xl text-gray-300 mb-10">
            Discover the best dining experience.
          </p>
          <button className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 text-white font-bold py-4 px-10 rounded-full shadow-xl text-xl transition-all duration-300 transform hover:scale-105 active:scale-95 animate-pop-in cursor-pointer">
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            Explore Menu
          </button>
        </div>
      </section>

      <section className="container py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <BenefitCard key={i} title={b.title} description={b.description} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
