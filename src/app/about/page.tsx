import React from "react";
import BenefitCard from "@/components/BenefitCard";
import Image from "next/image";
import Layout from "@/components/Layout";

const benefits = [
  {
    title: "Fresh Ingredients",
    description:
      "We source the freshest local ingredients to craft every dish with care and quality.",
  },
  {
    title: "Cozy Ambience",
    description:
      "Enjoy a warm, inviting atmosphere perfect for family gatherings, dates, or celebrations.",
  },
  {
    title: "Passionate Team",
    description:
      "Our chefs and staff are dedicated to providing you with an unforgettable dining experience.",
  },
];

export default function AboutPage() {
  return (
    <Layout>
      <section className="relative bg-gradient-to-br from-orange-50 to-white py-10 px-2 md:px-0 min-h-[60vh] flex items-center animate-fade-in">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
          {/* Left: Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-orange-100 transition-transform duration-500 hover:scale-105 hover:shadow-orange-200 group">
              <Image
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop"
                alt="About our restaurant"
                fill
                style={{ objectFit: "cover" }}
                priority
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          {/* Right: Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl px-8 py-10 md:py-14 md:px-14 border border-orange-100 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-orange-500 drop-shadow-lg tracking-tight">
              About Us
            </h1>
            <span className="block w-28 h-1.5 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 rounded-full mb-6"></span>
            <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
              Welcome to{" "}
              <span className="font-bold text-orange-500">Restaurant</span>!
              Since our founding, we have been passionate about bringing people
              together through delicious food, warm hospitality, and a cozy
              environment. Our story began with a simple idea: to create a place
              where everyone feels at home, whether you're celebrating a special
              occasion or enjoying a casual meal.
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-4">
              Our talented chefs blend traditional recipes with modern flavors,
              using only the freshest ingredients. We believe that every meal
              should be a memorable experience, and our team goes above and
              beyond to make every guest feel special.
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-6">
              Thank you for choosing us as your dining destination. We look
              forward to serving you and making every visit extraordinary!
            </p>
            <div className="flex flex-col gap-5 w-full mt-4">
              {benefits.map((benefit, i) => (
                <div
                  className="animate-fade-in"
                  style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                  key={benefit.title}
                >
                  <BenefitCard {...benefit} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto py-20 px-2 md:px-0 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-12 tracking-tight">
          Meet Our Team
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {[
            {
              name: "Alex Carter",
              role: "Head Chef",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
              desc: "With over 15 years of experience, Chef Alex crafts every dish with creativity and love.",
            },
            {
              name: "Lisa Nguyen",
              role: "Restaurant Manager",
              img: "https://randomuser.me/api/portraits/women/44.jpg",
              desc: "Lisa ensures every guest enjoys a seamless and delightful experience from start to finish.",
            },
            {
              name: "Marco Rossi",
              role: "Sous Chef",
              img: "https://randomuser.me/api/portraits/men/65.jpg",
              desc: "Marco brings authentic flavors and a passion for excellence to every meal.",
            },
          ].map((member, i) => (
            <div
              key={member.name}
              className="flex flex-col items-center bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 w-72 border border-orange-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group animate-fade-in"
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <Image
                src={member.img}
                alt={member.name}
                width={100}
                height={100}
                className="rounded-full mb-4 border-4 border-orange-200 shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="font-semibold text-xl text-gray-800 mb-1 tracking-tight drop-shadow-sm">
                {member.name}
              </h3>
              <span className="text-orange-400 font-medium text-sm mb-1">
                {member.role}
              </span>
              <p className="text-gray-600 text-sm text-center">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
