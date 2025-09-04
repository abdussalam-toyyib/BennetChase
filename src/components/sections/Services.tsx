import { Calculator } from "lucide-react";
import { Container } from "../shared/Container";
import { SectionTitle } from "../shared/SectionTitle";
import { Title } from "../shared/Title";

import business from "../../assets/business.svg"
import tax from "../../assets/task.svg"
import audit from "../../assets/audit.svg"
import payroll from "../../assets/payroll.svg"
import financial from "../../assets/finance.svg"
import estate from "../../assets/estate.svg"
import { ServiceCard } from "../cards/ServiceCard";


export default function Services() {
    const expertItems = [
    {
      title: 'Business Accounting',
      text: 'From daily transaction recording to financial statement preparation, we ensure your business accounting is accurate, compliant, and provides a clear picture of your financial health.',
      icon: business,
    },
    {
      title: 'Tax Planning & Compliance',
      text: 'Navigate complex tax laws with our expert guidance. We offer comprehensive tax planning for individuals and corporations, preparation of all federal and state tax returns, and representation during tax audits.',
      icon: tax,
    },
    {
      title: 'Audit & Assurance',
      text: 'Gain stakeholder confidence with our independent audit and assurance services. We provide thorough financial statement audits, reviews, and compilations, adhering to the highest professional standards.',
      icon: audit,
    },
    {
         title: 'Payroll & Bookkeeping',
         text: 'Focus on your core business while we handle your essential financial operations. Our services include accurate payroll processing, comprehensive bookkeeping, bank reconciliations, and custom financial reporting tailored to your operational needs.',
         icon: payroll,
     },
     {
         title: 'Financial Advisory',
         text: 'Unlock your financial potential with our strategic advisory services. We assist with business valuations, mergers and acquisitions, financial forecasting, cash flow management, and capital raising strategies, providing critical insights for informed decisions.',
         icon: financial
     },
     {
         title: 'Estate Planning',
         text: 'Beyond traditional accounting, we offer strategic consulting to help businesses optimize performance, identify growth opportunities, and implement effective operational improvements. Our insights drive efficiency and sustainable development.',
         icon: estate,
     },
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
            <div className="grid grid-cols-sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {expertItems.map((item, key) => (
                <ServiceCard
                key={key}
                icon={item.icon}
                title={item.title}
                text={item.text}
                />
            ))}
            </div>
        </Container>
    </section>

  )
}
