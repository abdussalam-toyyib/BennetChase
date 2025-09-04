import { Factory } from "lucide-react";
import { Container } from "../shared/Container";
import { SectionTitle } from "../shared/SectionTitle";
import { Title } from "../shared/Title";
import startup from "../../assets/startup.svg";
import profesional from "../../assets/professional.svg";
import charity from "../../assets/charity.svg";
import real from "../../assets/real.svg";
import retail from "../../assets/retail.svg";
import hospitality from "../../assets/hospitality.svg"


import industriesImg from "../../assets/hero2.png"; 
import { IndustryCard } from "../cards/IndustryCard";
import { useState } from "react";

export const Industries = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const industries = [
     {
        title: 'SMEs & Start-ups',
        text: 'Tailored accounting solutions to foster growth from inception to scaling.',
        icon: startup,
    },
    {
        title: 'Professional Services',
        text: 'Expert financial management for consulting firms, legal practices, and agencies.',
        icon: profesional,

    },
    {
        title: 'Hospitality & Care Homes',
        text: 'Specialized accounting to navigate the unique financial aspects of these sectors.',
        icon: hospitality,

    },
    {
        title: 'Retail & E-Commerce',
        text: 'Optimizing inventory, sales, and online transaction accounting.',
        icon: retail,
    },
    {
        title: 'Non-profits & Charities',
        text: 'Ensuring compliance and maximizing impact for mission-driven organizations.',
        icon: charity,
    },
    {
        title: 'Real Estate',
        text: 'Comprehensive financial services for property investors, developers, and real estate agencies.',
        icon: real,
    },
  ];

  return (
    <section id="industries" className="relative py-16 bg-[#B8B9F0] lg:px-20">
      <Container>
        {/* Section Title */}
        <SectionTitle variant="left" color="default" className="mb-4">
          <Factory  />
          Industries We Serve
        </SectionTitle>

        {/* Heading */}
        <Title className="mb-12 text-gray-900 max-w-2xl">
          Tailored Accounting Solutions Across Diverse Sectors
        </Title>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Industry List */}
          <div className="flex flex-col gap-4">
            {industries.map((item, idx) => (
              <IndustryCard
                key={idx}
                icon={item.icon}
                title={item.title}
                text={item.text}
                active={activeIndex === idx}
                onClick={() => setActiveIndex(idx)}
              />
            ))}
          </div>

          {/* Right: Image */}
          <div className="w-full">
            <img
              src={industriesImg}
              alt="Industries"
              className="w-full rounded-2xl shadow-md object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}