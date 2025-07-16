import React from "react";
import Layout from "@/components/Layout";
import { FaUtensils, FaBullseye, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <Layout>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-12 flex items-center justify-center">
            <FaUtensils className="mr-4" />
            Our Story
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop"
                alt="Restaurant Interior"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Welcome to Restaurant Gemini, where culinary excellence meets
                warm hospitality. Our journey began over two decades ago with a
                simple dream: to create a dining experience that delights the
                senses and nourishes the soul.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded by Chef Luna, a passionate culinary artist with years of
                experience in Michelin-starred restaurants, Restaurant Gemini is
                a testament to her unwavering commitment to quality and
                innovation. She envisioned a place where guests could savor
                exquisite dishes crafted from the freshest, locally sourced
                ingredients.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From our humble beginnings as a small family-run eatery, we have
                grown into a beloved dining destination known for our
                exceptional food, impeccable service, and inviting ambiance.
              </p>
            </div>
          </div>
          <div className="mt-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 flex items-center">
              <FaBullseye className="mr-4" />
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At Restaurant Gemini, our mission is to provide an unforgettable
              dining experience that exceeds your expectations. We are committed
              to:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-6 text-gray-700 leading-relaxed">
              <li>Sourcing the finest, freshest ingredients</li>
              <li>Creating innovative and flavorful dishes</li>
              <li>Delivering exceptional service with a personal touch</li>
              <li>Maintaining a warm and inviting atmosphere</li>
              <li>
                Contributing to our community and supporting local farmers
              </li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe that food is more than just sustenance; it is a
              celebration of life, a connection to our heritage, and an
              expression of love. We invite you to join us on a culinary journey
              and experience the magic of Restaurant Gemini.
            </p>
          </div>
          <div className="mt-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 flex items-center">
              <FaUsers className="mr-4" />
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our team is comprised of talented and dedicated individuals who
              share a passion for food and hospitality. From our skilled chefs
              to our attentive servers, each member of our team is committed to
              providing you with an exceptional dining experience.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are proud to have a diverse and experienced team that brings a
              wealth of knowledge and creativity to our restaurant. We are
              constantly learning and growing, and we are always striving to
              improve our skills and exceed your expectations.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
