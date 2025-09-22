import { MessageCircle } from "lucide-react";
import { Container } from "../shared/Container";
import { SectionTitle } from "../shared/SectionTitle";
import { Title } from "../shared/Title";
import { ContactForm } from "../shared/ContactForm";

import contact from "../../assets/office.jpg";

export default function Contact() {
  return (
    <section id="contact" className="pt-12 sm:pt-16 md:pt-20 lg:pt-[72px] pb-16 bg-[#151457] text-gray-300">
      <Container>
        <SectionTitle variant="left" color="default" className="mb-4 text-white">
          <MessageCircle />
           Contact Us
        </SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto text-gray-300">
          {/* Left Column */}
          <div className="bg-white/5 p-8 rounded-2xl shadow-sm lg:pb-1">

            <Title className="mb-6 text-gray-300">
              Let’s Talk About Your Future
            </Title>

            <p className="mb-8">
              Whether you’re an individual seeking tax guidance or a business looking for full-scale 
              financial management, Bennett & Chase is here to help.
            </p>

            {/* Office Image */}
            <div className="mb-8">
              <img 
                src={contact}
                alt="Modern office space with comfortable seating area, large windows, and professional atmosphere"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>

            {/* <div className="space-y-6">
              <ContactInfoItem
                icon={<MapPin />}
                title="Our Location"
                lines={[
                  "8708 Technology Forest Pl Suite 126 – B, The Woodlands, TX 77381",
                ]}
              />
              <ContactInfoItem
                icon={<Phone />}
                title="Phone Number"
                lines={["123-456-7890", "402-555-9876"]}
              />
              <ContactInfoItem
                icon={<Mail />}
                title="Email Address"
                lines={["info@bennettchase.com", "support@bennettchase.com"]}
              />
            </div> */}
          </div>

          {/* Right Column */}
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}