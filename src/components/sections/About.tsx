import { Container } from "../shared/Container"
import { SectionTitle } from "../shared/SectionTitle"
import { Minus } from "lucide-react"
import { Title } from "../shared/Title"
import { Paragraph } from "../shared/Paragraph"

import hero2 from "../../assets/hero2.png";
import mission from "../../assets/mission.svg"
import mission2 from "../../assets/mission.jpeg"
import vision from "../../assets/vision.svg"
import vision2 from "../../assets/vision.jpeg"
import partner from "../../assets/partner.svg"
import partner2 from "../../assets/partner.jpeg"
import excellence from "../../assets/excellence.svg"
import excellence2 from "../../assets/excellence.jpeg"
import integrity from "../../assets/integrity.svg"
import integrity2 from "../../assets/integrity.jpeg"

export const About = () => {
     const expertItems = [
      {
          title: 'Our Vision',
          text: 'To be the leading accounting firm recognised for integrity, innovation, and exceptional client service.',
          icon: vision,
          backgroundImage: vision2
      },
      {
          title: 'Our Mission',
          text: 'To simplify finance, empower businesses, and deliver solutions that inspire confidence and growth',
          icon: mission,
          backgroundImage: mission2
      },
  ]

  const valueItems = [
      {
          title: 'Integrity',
          text: 'Acting with honesty and transparency in all we do.',
          icon: integrity,
          backgroundImage: integrity2
      },
      {
          title: 'Excellence',
          text: 'Committed to the highest professional standards.',
          icon: excellence,
          backgroundImage: excellence2
      },
      {
          title: 'Partnership',
          text: 'Building long-term relationships with clients.',
          icon: partner,
          backgroundImage: partner2
      },
  ]

    return (
        <section id="about" className="relative pt-10 sm:pt-15 lg:pt-20 bg-[#B8B9F0] overflow-hidden">

            <Container className="lg:px-30 lg:py-10 sm:py-4 md:py-7 relative z-10">
                <SectionTitle variant="left" color="default" className="">
                    <Minus />
                    About
                </SectionTitle>
                
                <div className="flex flex-col">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Left */}
                        <div className="flex flex-col gap-6 lg:w-1/2 relative">
                            {/* Background image behind text content */}
                            <div className="absolute inset-0 opacity-10 rounded-lg overflow-hidden">
                                <img src="/api/placeholder/500/600" alt="" className="w-full h-full object-cover" />
                            </div>
                            
                            <div className="relative z-10 bg-white/80 backdrop-blur-sm p-6 rounded-lg flex flex-col gap-8">
                                <Title>Your Trusted Accounting Partner</Title>
                                <Paragraph>
                                Bennett & Chase was established with a vision to make accounting more
                                than just numbers — we believe it's about people, progress, and
                                partnership. Our team of qualified accountants and advisors bring years
                                of experience across diverse industries, offering insights that help
                                clients make informed decisions.
                                </Paragraph>
                                <Paragraph>
                                At our core, we're not just accountants. We're strategic partners
                                committed to your financial success. With precision, insight, and years
                                of experience, we provide the clarity you need to thrive.
                                </Paragraph>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="flex flex-col gap-6 lg:w-1/2">
                            {/* Stat with integrated background */}
                            <div className="relative bg-white/90 backdrop-blur-sm rounded-lg p-6">
                                <div className="absolute inset-0 opacity-20 rounded-lg overflow-hidden">
                                    <img src="/api/placeholder/400/200" alt="" className="w-full h-full object-cover" />
                                </div>
                                <div className="relative z-10 flex items-start gap-4 lg:flex-row sm:flex-col sm:items-center sm:gap-2">
                                    <p className="text-[48px] leading-[48px] font-extrabold text-[#3D506BFF] font-inter md:text-[36px] md:leading-[40px] sm:text-[28px] sm:leading-[32px] xs:text-[22px] xs:leading-[28px]">
                                        25+
                                    </p>
                                    <span className="pt-6 sm:pt-0 text-[18px] leading-[28px] font-medium text-[#171A1FFF] font-inter md:text-[16px] md:leading-[24px] sm:text-[14px] sm:leading-[20px] xs:text-[12px] xs:leading-[18px] text-center sm:text-center lg:text-left">
                                        Years of Pro Experience
                                    </span>
                                </div>
                                
                                {/* Additional stat integrated */}
                                <div className="flex items-center gap-4 mt-6 pt-4 border-t border-gray-200">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#3D506BFF] to-[#B8B9F0] rounded-full flex items-center justify-center text-white font-bold">
                                        500+
                                    </div>
                                    <div>
                                        <p className="text-lg font-semibold text-[#3D506BFF]">Satisfied Clients</p>
                                        <p className="text-sm text-gray-600">Across Various Industries</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="rounded-[4px] overflow-hidden w-full max-w-[520px] h-auto sm:mx-auto shadow-lg">
                                <img
                                    src={hero2}
                                    alt="Professional accounting team at work"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Mission and Vision Section with professional layout */}
                    <div className="w-auto h-auto pb-8">
                        <h3 className="w-full font-montserrat font-bold text-[30px] leading-[44px] py-10 text-center">
                            Our Mission and Vision
                        </h3>
                                    
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 p-5">
                            {expertItems.map((item, key) => (
                                <div key={key} className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                                    {/* Subtle top accent with image */}
                                    <div className="h-2 bg-gradient-to-r from-[#3D506BFF] to-[#B8B9F0] rounded-t-lg"></div>
                                    
                                    {/* Professional content layout */}
                                    <div className="p-8">
                                        {/* Icon and title row */}
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 bg-[#B8B9F0]/20 rounded-lg flex items-center justify-center">
                                                <img src={item.icon} alt="" className="w-6 h-6" />
                                            </div>
                                            <h4 className="text-xl font-semibold text-[#3D506BFF]">{item.title}</h4>
                                        </div>
                                        
                                        {/* Description */}
                                        <p className="text-gray-700 leading-relaxed mb-6">{item.text}</p>
                                        
                                        {/* Subtle background image at bottom */}
                                        <div className="relative h-full rounded-lg overflow-hidden bg-gray-50">
                                            <img src={item.backgroundImage} alt="" className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#B8B9F0]/20 to-transparent"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Core Values with professional styling */}
                    <div className="w-auto h-auto pb-8">
                        <h3 className="w-full font-montserrat font-bold text-[30px] leading-[44px] py-10 text-center">
                            Our Core Values 
                        </h3>
                                    
                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 p-5">
                            {valueItems.map((item, key) => (
                                <div key={key} className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                                    {/* Professional header with subtle image */}
                                    <div className="relative h-32 rounded-t-lg overflow-hidden">
                                        <img src={item.backgroundImage} alt="" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300 sm:opacity-0" />
                                        <div className="absolute inset-0 bg-gradient-to-b from-[#3D506BFF]/10 to-[#3D506BFF]/30"></div>
                                        
                                        {/* Icon overlay */}
                                        <div className="absolute top-4 left-4">
                                            <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                                <img src={item.icon} alt="" className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Content section */}
                                    <div className="p-6">
                                        <h4 className="text-lg font-semibold text-[#3D506BFF] mb-3">{item.title}</h4>
                                        <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
                                        
                                        {/* Professional accent line */}
                                        <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#3D506BFF] to-[#B8B9F0] rounded-full"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Awards Section with integrated layout */}
                    {/* <div classNamesName="absolute="relative mt-12 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm rounded-lg p-8 overflow-hidden">
                        <div clas inset-0 opacity-10">
                            <img src="/api/placeholder/800/300" alt="" className="w-full h-full object-cover" />
                        </div>
                        
                        <div className="relative z-10">
                            <h3 className="font-montserrat font-bold text-[24px] leading-[32px] text-center mb-8">
                                Awards & Certifications
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {[1,2,3,4].map((i) => (
                                    <div key={i} className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                                        <img 
                                            src={`/certificate ${i}`}
                                            alt={`Professional certification ${i}`}
                                            className="w-full h-16 object-contain"
                                        />
                                        <p className="text-xs text-center mt-2 text-gray-600">Certification {i}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div> */}
                </div>
            </Container>
        </section>
    )
}