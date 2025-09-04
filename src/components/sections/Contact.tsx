import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Container } from "../shared/Container";
import { SectionTitle } from "../shared/SectionTitle";
import { Title } from "../shared/Title";
import { ContactInfoItem } from "../shared/ContactInfoItem";
import { ContactForm } from "../shared/ContactForm";



export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-[#B8B9F0]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column */}
          <div>
            <SectionTitle variant="left" color="default" className="mb-4">
              <MessageCircle />
              Contact Us
            </SectionTitle>

            <Title className="mb-6 text-gray-900">
              Ready to Take Control of Your Finances? Let&apos;s Connect
            </Title>

            <p className="text-gray-600 mb-8">
              We&apos;re ready to help you move forward with confidence. Reach
              out today and let’s turn your numbers into real business power.
            </p>

            <div className="space-y-6">
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
            </div>
          </div>

          {/* Right Column */}
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
