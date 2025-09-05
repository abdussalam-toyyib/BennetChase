import { MessageSquareQuote, ArrowRight } from "lucide-react";
import { Container } from "../shared/Container";
import { SectionTitle } from "../shared/SectionTitle";
import { Title } from "../shared/Title";
import { TestimonialCard } from "../cards/TestimonialCard";

import test1 from "../../assets/testi.jpg";
import test2 from "../../assets/testimonial.jpg"

import team from "../../assets/teamatwork.png"
import environment from "../../assets/working-environ.png"
import consultation from "../../assets/consultation.png"

const testimonials = [
  {
    name: "Sheldon Jackson",
    role: "Founder, Carter & Co.",
    image: test1,
    feedback:
      "Working with Bennett & Chase completely changed how we handle taxes. They found deductions we never knew existed and helped us stay organized year-round. It's the first time tax season hasn't felt stressful.",
  },
  {
    name: "James Rodriguez",
    role: "CEO, Innovate Solutions",
    image: test2,
    feedback:
      "The team at Bennett & Chase is incredibly proactive. Their insights into our financial data have allowed us to make smarter business decisions, leading to significant operational efficiencies and increased revenue.",
  },
  {
    name: "Sarah Mitchell",
    role: "Owner, Mitchell Marketing",
    image: test1,
    feedback:
      "Bennett & Chase transformed our bookkeeping process. Their attention to detail and monthly reports give us clarity we never had before. Highly recommend their services.",
  },
  
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-[#151457] lg:px-20">
      <Container>
        {/* Section Title */}
        <SectionTitle variant="center" color="white" className="mb-4">
          <MessageSquareQuote />
          Our Testimonials
        </SectionTitle>

        {/* Heading */}
        <Title className="text-center mb-12 text-white">
          Hear What Our Clients Say About Working With Us
        </Title>

        {/* Background Pattern Images */}
        <div className="relative">

          {/* Testimonials Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((t, idx) => (
              <TestimonialCard
                key={idx}
                name={t.name}
                role={t.role}
                image={t.image}
                feedback={t.feedback}
              />
            ))}
          </div>
        </div>

        {/* Client Logos Section */}
        <div className="mt-16">
          <h3 className="text-center text-white text-lg font-medium mb-8">
            The People, The Place, The Partnership
          </h3>
          {/* <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            <img src="/api/placeholder/120/60" alt="Client Logo" className="h-12 w-auto mx-auto grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/api/placeholder/120/60" alt="Client Logo" className="h-12 w-auto mx-auto grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/api/placeholder/120/60" alt="Client Logo" className="h-12 w-auto mx-auto grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/api/placeholder/120/60" alt="Client Logo" className="h-12 w-auto mx-auto grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/api/placeholder/120/60" alt="Client Logo" className="h-12 w-auto mx-auto grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/api/placeholder/120/60" alt="Client Logo" className="h-12 w-auto mx-auto grayscale hover:grayscale-0 transition-all duration-300" />
          </div> */}
        </div>

        {/* Team/Office Images */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <img 
            src={team}
            alt="Our team at work" 
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
          <img 
            src={environment}
            alt="Office environment" 
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
          <img 
            src={consultation}
            alt="Client consultation" 
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-[#3D2763FF] text-[#3D2763FF] hover:bg-[#EFF6FF] font-medium transition">
            More Reviews
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </Container>
    </section>
  );
}