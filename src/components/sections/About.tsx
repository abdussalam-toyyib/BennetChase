import { Container } from "../shared/Container"
import { SectionTitle } from "../shared/SectionTitle"
import { FileText } from "lucide-react"
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
    <section id="about" className="relative bg-[#B8B9F0] overflow-hidden pt-12 sm:pt-16 md:pt-20 lg:pt-[77px]">
      <Container className="relative z-10">
        
        <SectionTitle variant="left" color="default" className="mb-4">
          <FileText /> About Us
        </SectionTitle>

        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left */}
            <div className="flex flex-col gap-6 lg:w-1/2">
              
              {/* Stat card */}
              <div className="relative bg-[#C3C5FF] rounded-lg p-6 text-gray-800">
                <div className="absolute inset-0 opacity-10 rounded-lg overflow-hidden">
                  <img src="/api/placeholder/400/200" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10 flex items-start gap-4 lg:flex-row sm:flex-col sm:items-center sm:gap-2">
                  <p className="text-[48px] leading-[48px] font-extrabold md:text-[36px] md:leading-[40px] sm:text-[28px] sm:leading-[32px] xs:text-[22px] xs:leading-[28px]">
                    25+
                  </p>
                  <span className="pt-6 sm:pt-0 text-[18px] leading-[28px] font-medium md:text-[16px] md:leading-[24px] sm:text-[14px] sm:leading-[20px] xs:text-[12px] xs:leading-[18px] text-center lg:text-left">
                    Years of Pro Experience
                  </span>
                </div>

                {/* Additional stat */}
                <div className="flex items-center gap-4 mt-6 pt-4 border-t border-white/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#9C8DF0] to-[#3D506B] rounded-full flex items-center justify-center text-gray-800 font-bold">
                    500+
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Satisfied Clients</p>
                    <p className="text-sm opacity-80">Across Various Industries</p>
                  </div>
                </div>
              </div>

              {/* Intro text card */}
              <div className="relative z-10 bg-[#C3C5FF] p-6 rounded-lg flex flex-col gap-8 text-gray-800">
                <Title>Your Trusted Accounting Partner</Title>
                <Paragraph>
                  Bennett & Chase was established with a vision to make accounting more
                  than just numbers — we believe it's about people, progress, and
                  partnership. Our team of qualified accountants and advisors bring years
                  of experience across diverse industries, offering insights that help
                  clients make informed decisions.
                </Paragraph>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-6 lg:w-1/2">
              <div className="rounded-[4px] overflow-hidden w-full max-w-[520px] h-full sm:mx-auto">
                <img
                  src={hero2}
                  alt="Professional accounting team at work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="w-auto h-auto">
            <h3 className="w-full font-montserrat font-bold text-[30px] leading-[44px] py-10 text-center">
              Our Mission and Vision
            </h3>
                        
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 p-5">
              {expertItems.map((item, key) => (
                <div 
                  key={key} 
                  className="rounded-lg border border-[#C3C5FF] transition-shadow duration-300 bg-[#C3C5FF]"
                >
                  {/* <div className="h-2 bg-gradient-to-r from-[#3D506B] to-[#9C8DF0] rounded-t-lg"></div> */}
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#9C8DF0]/20 rounded-lg flex items-center justify-center">
                        <img src={item.icon} alt="" className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-semibold text-[#3D506B]">{item.title}</h4>
                    </div>
                    <p className="text-gray-800 leading-relaxed mb-6">{item.text}</p>
                    <div className="relative h-full rounded-lg overflow-hidden bg-[#3D506B]/5">
                      <img src={item.backgroundImage} alt="" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#9C8DF0]/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div className="w-auto h-auto pb-8">
            <h3 className="w-full font-montserrat font-bold text-[30px] leading-[44px] py-10 text-center">
              Our Core Values 
            </h3>
                        
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 p-5">
              {valueItems.map((item, key) => (
                <div 
                  key={key} 
                  className="rounded-lg border border-[#C3C5FF] hover:-translate-y-1 transition-all duration-300 group bg-[#C3C5FF]"
                >
                  <div className="relative h-32 rounded-t-lg overflow-hidden">
                    <img src={item.backgroundImage} alt="" className="w-full h-full object-cover transition-opacity duration-300 " />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#3D506B]/20 to-[#9C8DF0]/30"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-10 h-10 bg-[#9C8DF0]/30 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <img src={item.icon} alt="" className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-[#3D506B] mb-3">{item.title}</h4>
                    <p className="text-gray-800 text-sm leading-relaxed">{item.text}</p>
                    <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[#3D506B] to-[#9C8DF0] rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}