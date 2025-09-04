

import { Factory } from "lucide-react";
import { Container } from "../shared/Container";
import { SectionTitle } from "../shared/SectionTitle";
import { Title } from "../shared/Title";
import { useState } from "react";
import { IndustryCard } from "../cards/IndustryCard";

// Importing specific, high-quality images for each industry
import startupImg from "../../assets/startup.svg";
import professionalImg from "../../assets/professional.svg";
import hospitalityImg from "../../assets/hospitality.svg";
import retailImg from "../../assets/retail.svg";
import charityImg from "../../assets/charity.svg";
import realEstateImg from "../../assets/real.svg";

import startupImg2 from "../../assets/startup.png";
import professionalImg2 from "../../assets/professional.png";
import hospitalityImg2 from "../../assets/hospitality.png";
import retailImg2 from "../../assets/retail.png";
import charityImg2 from "../../assets/charity.png";
import realEstateImg2 from "../../assets/real.png";

export const Industries = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const industries = [
    {
      title: "SMEs & Start-ups",
      text: "Tailored accounting solutions to foster growth from inception to scaling.",
      icon: startupImg,
      image2: startupImg2,
    },
    {
      title: "Professional Services",
      text: "Expert financial management for consulting firms, legal practices, and agencies.",
      icon: professionalImg,
      image2: professionalImg2,
    },
    {
      title: "Hospitality & Care Homes",
      text: "Specialized accounting to navigate the unique financial aspects of these sectors.",
      icon: hospitalityImg,
      image2: hospitalityImg2,
    },
    {
      title: "Retail & E-Commerce",
      text: "Optimizing inventory, sales, and online transaction accounting.",
      icon: retailImg,
      image2: retailImg2,
    },
    {
      title: "Non-profits & Charities",
      text: "Ensuring compliance and maximizing impact for mission-driven organizations.",
      icon: charityImg,
      image2: charityImg2,
    },
    {
      title: "Real Estate",
      text: "Comprehensive financial services for property investors, developers, and real estate agencies.",
      icon: realEstateImg,
      image2: realEstateImg2,
    },
  ];

  return (
    <section id="industries" className="py-20 bg-gray-100">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <SectionTitle className="justify-center">
            <Factory />
            Industries We Serve
          </SectionTitle>
          <Title className="text-gray-900 mt-4 max-w-3xl mx-auto">
            Tailored Financial Expertise for Your Sector's Success
          </Title>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Industry Cards */}
          <div className="flex flex-col gap-6">
            {industries.map((item, idx) => (
              <IndustryCard
                key={idx}
                title={item.title}
                text={item.text}
                icon={item.image2}
                active={activeIndex === idx}
                onClick={() => setActiveIndex(idx)}
              />
            ))}
          </div>

          {/* Right Column: Dynamic Image and Content */}
          <div className="w-full relative min-h-[400px]">
            {industries.map((item, idx) => (
              <div
                key={idx}
                className={`transition-opacity duration-500 ease-in-out ${
                  activeIndex === idx ? "opacity-100" : "opacity-0 absolute inset-0"
                }`}
              >
                <img
                  src={item.image2}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-3xl shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

// Note: The IndustryCard component would also be updated to be simpler,
// removing the icon prop and handling the active state for styling.