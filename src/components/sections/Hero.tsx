"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.png";
import hero4 from "../../assets/hero4.jpg";
import hero5 from "../../assets/hero5.jpeg";
import hero6 from "../../assets/hero6.png";
// import { CheckCircle2 } from "lucide-react";

const heroImages = [hero2, hero3, hero4, hero5, hero6];

export const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000); // every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={heroImages[current]}
            alt={`background-${current}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          />
        </AnimatePresence>
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: "#3D2763CC" }}/>

      </div>

      {/* Centered Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 sm:px-10">
        <h1 className="font-extrabold text-3xl sm:text-5xl lg:text-6xl leading-tight text-white max-w-5xl">
          Accounting with Clarity. Advisory with{" "}
            <span className="text-[#3D2763FF] bg-white px-2 rounded">
              Confidence
            </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-200 max-w-3xl">
          At Bennett & Chase, we look beyond the numbers to uncover insights that help you make smarter decisions, plan ahead, and achieve lasting financial success.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            
          <a href="#cta" className="py-4 px-6 w-full sm:w-[212px] h-[52px] sm:h-[60px] bg-[#3D2763FF] rounded-lg text-base font-medium text-white hover:bg-[#7555ad] cursor-pointer transform transition duration-300">
            Book a Consultation
          </a>
          <a href="#services" className="py-4 px-6 w-full sm:w-[212px] h-[52px] sm:h-[60px] bg-white border border-[#3D2763FF] rounded-lg text-base font-medium text-[#3D2763FF] hover:bg-[#EFF6FF] cursor-pointer transform transition duration-300">
            Explore Our Services
          </a>
        </div>
          {/* <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-md w-full sm:w-auto mx-auto mt-6">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
              Our Services at a Glance
            </h3>
            <div className="flex flex-col gap-3 text-sm sm:text-base text-white">
              {[
                "Business Accounting",
                "Tax Planning & Compliance",
                "Audit & Assurance",
                "Payroll & Bookkeeping",
                "Financial Advisory",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[##3D2763FF]" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
        </div> */}
      </div>
    </section>
  );
};
