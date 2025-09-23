import { useState, type ReactNode} from "react";
import { Factory, Building2, Briefcase, Hotel, ShoppingCart, Heart, Home} from 'lucide-react';

import { Container } from "../shared/Container";
import { SectionTitle } from "../shared/SectionTitle";
import { Title } from "../shared/Title";
import { IndustryCard } from "../cards/IndustryCard";

import startupImg2 from "../../assets/startup.png";
import professionalImg2 from "../../assets/professional.png";
import hospitalityImg2 from "../../assets/hospitality.png";
import retailImg2 from "../../assets/retail.png";
import charityImg2 from "../../assets/charity.png";
import realEstateImg2 from "../../assets/real.png";


export const Industries = () => {
 const [activeIndex, setActiveIndex] = useState(0);

 interface Industry {
  title: string;
  text: string;
  icon: ReactNode;
  image: string;
 }

   const industries: Industry[] =  [
    {
      title: "SMEs & Start-ups",
      text: "Tailored accounting solutions to foster growth from inception to scaling.",
      icon: <Building2 className="w-6 h-6"/>,
      image: startupImg2,
    },
    {
      title: "Professional Services",
      text: "Expert financial management for consulting firms, legal practices, and agencies.",
      icon: <Briefcase className="w-6 h-6" />,
      image: professionalImg2,
    },
    {
      title: "Hospitality & Care Homes",
      text: "Specialized accounting to navigate the unique financial aspects of these sectors.",
      icon: <Hotel className="w-6 h-6"/>,
      image: hospitalityImg2,
    },
    {
      title: "Retail & E-Commerce",
      text: "Optimizing inventory, sales, and online transaction accounting.",
      icon: <ShoppingCart className="w-6 h-6"/>,
      image: retailImg2,
    },
    {
      title: "Non-profits & Charities",
      text: "Ensuring compliance and maximizing impact for mission-driven organizations.",
      icon: <Heart className="w-6 h-6" />,
      image: charityImg2,
    },
    {
      title: "Real Estate",
      text: "Comprehensive financial services for property investors, developers, and real estate agencies.",
      icon: <Home className="w-6 h-6" />,
      image: realEstateImg2,
    },
  ];
 return (
  <section id="industries" className=" pt-12 sm:pt-16 md:pt-20 lg:pt-[77px] pb-16 bg-[#B8B9F0]">
   <Container>
    {/* Section Header */}
    
     <SectionTitle variant="left" color="default" className="mb-4">
      <Factory />
      Industries We Serve
     </SectionTitle>
     <Title className="text-gray-900 mb-8 max-w-[700px]">
      Empowering Businesses Across Sectors
     </Title>
          {/* <a href="#" className="flex items-center gap-2 absolute top-0 right-0 py-2 px-4 rounded-full border border-gray-400 bg-white text-[#3D2763] hover:bg-gray-100 transition-colors duration-200">
            View All Services <ArrowRight className="w-4 h-4" />
          </a> */}
    

    <div className="flex flex-col lg:flex-row items-stretch gap-12">
      {/* Left Column: Industry Cards */}
      <div className="flex flex-col gap-6 flex-1">
        {industries.map((item, idx) => (
          <IndustryCard
            key={idx}
            title={item.title}
            text={item.text}
            icon={item.icon}
            active={activeIndex === idx}
            onClick={() => setActiveIndex(idx)}
          />
        ))}
      </div>

      {/* Vertical Divider */}
      <div className="hidden lg:block w-px bg-white/10" />

      {/* Right Column: Dynamic Image and Content */}
      <div className="flex-[1] relative min-h-[400px]">
        <img
          src={industries[activeIndex].image}
          alt={industries[activeIndex].title}
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </div>


   </Container>
  </section>
 );
};
