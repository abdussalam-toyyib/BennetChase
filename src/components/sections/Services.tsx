import { Calculator } from "lucide-react";
import { Container } from "../shared/Container";
import { SectionTitle } from "../shared/SectionTitle";
import { Title } from "../shared/Title";

import business from "../../assets/business.svg"
import tax from "../../assets/task.svg"
import audit from "../../assets/audit.svg"
import payroll from "../../assets/payroll.svg"
import financial from "../../assets/finance.svg"
// import estate from "../../assets/estate.svg"
import { ServiceCard } from "../cards/ServiceCard";


export default function Services() {
    const expertItems = [
    {
      title: 'Business Accounting',
      text: 'Accurate, reliable, and timely financial reporting to help your business stay compliant and make smarter decisions.',
      icon: business,
    },
    {
      title: 'Tax Planning & Compliance',
      text: 'From corporate to personal tax, we ensure you meet all obligations while minimising liabilities through effective planning.',
      icon: tax,
    },
    {
      title: 'Audit & Assurance',
      text: 'Independent and thorough audits designed to strengthen trust and improve performance. ',
      icon: audit,
    },
    {
         title: 'Payroll & Bookkeeping',
         text: 'We take care of your books and payroll so you can focus on running your business.',
         icon: payroll,
     },
     {
         title: 'Financial Advisory',
         text: 'Tailored advice to help businesses grow, secure investments, and plan for the future. ',
         icon: financial
     },
    //  {
    //      title: 'Estate Planning',
    //      text: 'Beyond traditional accounting, we offer strategic consulting to help businesses optimize performance, identify growth opportunities, and implement effective operational improvements. Our insights drive efficiency and sustainable development.',
    //      icon: estate,
    //  },
  ]
  return (
    <section id="services" className="relative py-16 bg-[#151457] lg:px-20">
        <Container>
            {/* Section Title */}
            <SectionTitle variant="center" color="white" className="mb-4">
            <Calculator />
            Our Services
            </SectionTitle>

            {/* Heading */}
            <Title className="text-center mb-12 text-white">
            Powerful Accounting Solutions, Delivered with Precision
            </Title>

            {/* Responsive Grid */}
           <div className="flex flex-wrap justify-center gap-6 sm:gap-8 max-w-6xl mx-auto">
  {expertItems.map((item, key) => (
    <div
      key={key}
      className="flex-1 min-w-[250px] max-w-[350px]"
    >
      <ServiceCard
        icon={item.icon}
        title={item.title}
        text={item.text}
      />
    </div>
  ))}
</div>

        </Container>
    </section>

  )
}
