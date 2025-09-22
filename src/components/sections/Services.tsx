import { Calculator, CheckCircle, Users, TrendingUp, Shield } from "lucide-react";
import { Container } from "../shared/Container";
import { SectionTitle } from "../shared/SectionTitle";
import { Title } from "../shared/Title";

import business from "../../assets/business.svg"
import business2 from "../../assets/business.jpeg"
import tax from "../../assets/task.svg"
import tax2 from "../../assets/tax.jpeg"
import audit from "../../assets/audit.svg"
import audit2 from "../../assets/audit1.png"
import payroll from "../../assets/payroll.svg"
import payroll2 from "../../assets/payroll2.png"
import financial from "../../assets/finance.svg"
import financial2 from "../../assets/advise.png"
import teamwork from "../../assets/teamwork.jpeg"
// import success from "../../assets/success.jpg"
// import success1 from "../../assets/success1.jpg"
// import success2 from "../../assets/success2.png"
// import success3 from "../../assets/success3.png"

export default function Services() {
    // const images = [success, success1, success2, success3];
    const expertItems = [
        {
            title: 'Business Accounting',
            text: 'Accurate, reliable, and timely financial reporting to help your business stay compliant and make smarter decisions.',
            icon: business,
            backgroundImage: business2,
            features: ['Financial Reporting', 'Compliance Management', 'Business Analytics'],
            stats: { number: '200+', label: 'Businesses Served' }
        },
        {
            title: 'Tax Planning & Compliance',
            text: 'From corporate to personal tax, we ensure you meet all obligations while minimising liabilities through effective planning.',
            icon: tax,
            backgroundImage: tax2,
            features: ['Tax Optimization', 'Compliance Audits', 'Strategic Planning'],
            stats: { number: '98%', label: 'Success Rate' }
        },
        {
            title: 'Audit & Assurance',
            text: 'Independent and thorough audits designed to strengthen trust and improve performance.',
            icon: audit,
            backgroundImage: audit2,
            features: ['Risk Assessment', 'Internal Audits', 'Performance Review'],
            stats: { number: '150+', label: 'Audits Completed' }
        },
        {
            title: 'Payroll & Bookkeeping',
            text: 'We take care of your books and payroll so you can focus on running your business.',
            icon: payroll,
            backgroundImage: payroll2,
            features: ['Automated Payroll', 'Employee Management', 'Tax Calculations'],
            stats: { number: '500+', label: 'Employees Managed' }
        },
        {
            title: 'Financial Advisory',
            text: 'Tailored advice to help businesses grow, secure investments, and plan for the future.',
            icon: financial,
            backgroundImage: financial2,
            features: ['Investment Strategy', 'Growth Planning', 'Risk Management'],
            stats: { number: '$50M+', label: 'Assets Advised' }
        },
    ]

    const processSteps = [
        { step: '01', title: 'Consultation', description: 'Initial assessment of your needs', icon: Users },
        { step: '02', title: 'Strategy', description: 'Customized solution development', icon: TrendingUp },
        { step: '03', title: 'Implementation', description: 'Seamless service delivery', icon: CheckCircle },
        { step: '04', title: 'Support', description: 'Ongoing maintenance and optimization', icon: Shield }
    ]

    return (
        <section id="services" className="relative pt-12 sm:pt-16 md:pt-20 lg:pt-[72px] pb-16 bg-[#151457] overflow-hidden">

            <Container className="relative z-10">
                {/* Section Title */}
                <SectionTitle variant="center" color="white" className="mb-4">
                    <Calculator />
                    Our Services
                </SectionTitle>

                {/* Heading */}
                <Title className="text-center mx-auto mt-4 mb-10 text-white max-w-3xl">
                    Powerful Accounting Solutions, Delivered with Precision
                </Title>


                {/* Subtitle */}
                {/* <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
                    From startups to established enterprises, we provide comprehensive financial services 
                    that drive growth and ensure compliance.
                </p> */}

                {/* Hero Service Showcase */}
                <div className="mb-16 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">Why Choose Our Services?</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                    <span>25+ years of combined experience</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                    <span>Cutting-edge technology and automation</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                    <span>Personalized service for every client</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                    <span>Proactive financial planning and advice</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative">
                            <img 
                                src={teamwork} 
                                alt="Professional accounting team working with advanced technology"
                                className="rounded-xl shadow-2xl w-full h-64 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#151457]/50 to-transparent rounded-xl"></div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Service Cards */}
                
                <div className="flex flex-wrap gap-8 mb-16 justify-center lg:justify-center">
                  {expertItems.map((item, key) => (
                    <div
                      key={key}
                      className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 
                                w-full lg:w-[calc(33.333%-1.5rem)]"
                    >
                      {/* Service Image Header */}
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={item.backgroundImage} 
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        
                        {/* Service Icon */}
                        <div className="absolute top-4 left-4">
                          <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                            <img src={item.icon} alt="" className="w-6 h-6" />
                          </div>
                        </div>

                        {/* Stats Badge */}
                        <div className="absolute top-4 right-4 bg-[#B8B9F0]/90 backdrop-blur-sm rounded-lg px-3 py-1">
                          <div className="text-sm font-bold text-[#151457]">{item.stats.number}</div>
                          <div className="text-xs text-[#151457]/80">{item.stats.label}</div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#B8B9F0] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                          {item.text}
                        </p>

                        {/* Features List */}
                        {/* <ul className="space-y-2 mb-6">
                          {item.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                              <div className="w-1.5 h-1.5 bg-[#B8B9F0] rounded-full"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul> */}

                        {/* CTA Button */}
                        {/* <button className="w-full flex items-center justify-center gap-2 bg-[#B8B9F0]/10 hover:bg-[#B8B9F0]/20 border border-[#B8B9F0]/30 text-white py-2.5 px-4 rounded-lg transition-all duration-300 group-hover:border-[#B8B9F0]/60">
                          <span className="text-sm font-medium">Learn More</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button> */}
                      </div>
                    </div>
                  ))}
                </div>


                {/* Process Section */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-white text-center mb-12">Our Process</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {processSteps.map((step, index) => (
                            <div key={index} className="text-center group">
                                <div className="relative mb-6">
                                    {/* Connection Line */}
                                    {index < processSteps.length - 1 && (
                                        <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-[#B8B9F0] to-transparent transform -translate-y-1/2 z-0"></div>
                                    )}
                                    
                                    {/* Step Circle */}
                                    <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-[#B8B9F0] to-[#3D506BFF] rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                                        <step.icon className="w-6 h-6 text-white" />
                                    </div>
                                    
                                    {/* Step Number */}
                                    <div className="text-xs font-bold text-[#B8B9F0] bg-white/10 rounded-full w-6 h-6 flex items-center justify-center mx-auto -mt-2">
                                        {step.step}
                                    </div>
                                </div>
                                
                                <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                                <p className="text-gray-400 text-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Client Success Gallery */}
                {/* <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                    <h3 className="text-xl font-bold text-white text-center mb-8">Client Success Stories</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1,2,3,4].map((i) => (
                            <div key={i} className="relative group cursor-pointer">
                                <img 
                                    src={success `${i}`}
                                    alt={`Success story ${i}`}
                                    className="w-full h-24 object-cover rounded-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <p className="text-white text-xs p-2 font-medium">Case Study {i}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}
                {/* <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                    <h3 className="text-xl font-bold text-white text-center mb-8">Client Success Stories</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {images.map((image, index) => (
                            <div key={index} className="relative group cursor-pointer">
                                <img 
                                    src={image}
                                    alt={`Success story ${index + 1}`}
                                    className="w-full h-24 object-cover rounded-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <p className="text-white text-xs p-2 font-medium">Case Study {index + 1}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}
            </Container>
        </section>
    )
}