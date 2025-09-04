import { Container } from "../shared/Container"
import { SectionTitle } from "../shared/SectionTitle"
import { Minus } from "lucide-react"
import { Title } from "../shared/Title"
import { Paragraph } from "../shared/Paragraph"

import hero2 from "../../assets/hero2.png";
import mission from "../../assets/mission.svg"
import vision from "../../assets/vision.svg"
import partner from "../../assets/partner.svg"
import excellence from "../../assets/excellence.svg"
import integrity from "../../assets/integrity.svg"
import { Mission } from "../cards/Mission"
import { ExpertCard } from "../cards/ExpertCard"




export const About = () => {
     const expertItems = [
      {
          title: 'Our Vision',
          text: 'To be the leading accounting firm recognised for integrity, innovation, and exceptional client service.',
          icon: vision,
      },
      {
          title: 'Our Mission',
          text: 'To simplify finance, empower businesses, and deliver solutions that inspire confidence and growth',
          icon: mission,
      },
  ]

  const valueItems = [
      {
          title: 'Integrity',
          text: 'Acting with honesty and transparency in all we do.',
          icon: integrity,
      },
      {
          title: 'Excellence',
          text: 'Strategic tax planning and accurate compliance toCommitted to the highest professional standards.',
          icon: excellence,
      },
      {
          title: 'Partnership',
          text: 'Building long-term relationships with clients.',
          icon: partner,
      },
  ]
    return (
        <section id="about" className="relative pt-10 sm:pt-15 lg:pt-20 bg-[#B8B9F0]">
            <Container className="lg:px-30 lg:py-10 sm:py-4  md:py-7">
                <SectionTitle variant="left" color="default" className="">
                    <Minus />
                    About
                </SectionTitle>                <div className="flex flex-col">
                    <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left */}
                    <div className="flex flex-col gap-6 lg:w-1/2">
                        <Title>Your Trusted Accounting Partner</Title>
                        <Paragraph>
                        Bennett & Chase was established with a vision to make accounting more
                        than just numbers — we believe it’s about people, progress, and
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

                    {/* Right */}
                    <div className="flex flex-col gap-6 lg:w-1/2">
                        {/* Stat */}
                        <div className="flex items-start gap-4 lg:flex-row sm:flex-col sm:items-center sm:gap-2">
                        <p className="text-[48px] leading-[48px] font-extrabold text-[#3D506BFF] font-inter 
                                    md:text-[36px] md:leading-[40px] 
                                    sm:text-[28px] sm:leading-[32px] 
                                    xs:text-[22px] xs:leading-[28px]">
                            25+
                        </p>
                        <span className="pt-6 sm:pt-0 text-[18px] leading-[28px] font-medium text-[#171A1FFF] font-inter 
                                        md:text-[16px] md:leading-[24px] 
                                        sm:text-[14px] sm:leading-[20px] 
                                        xs:text-[12px] xs:leading-[18px] 
                                        text-center sm:text-center lg:text-left">
                            Years of Pro Experience
                        </span>
                        </div>
                        
                        <div className="rounded-[4px] overflow-hidden w-full max-w-[520px] h-auto sm:mx-auto">
                        <img
                            src={hero2}
                            alt="Descriptive alt text"
                            className="w-full h-full object-cover"
                        />
                        </div>
                    </div>
                    </div>

                    <div className="w-auto h-auto pb-8">
                        <h3 className="w-full font-montserrat font-bold text-[30px] leading-[44px] py-10 text-center">
                            Our Mission and Vision
                        </h3>
                                    
                        {/* Grid container for ExpertCard components */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-5">
                            {expertItems.map((item, key) => (
                            <Mission 
                                key={key}
                                title={item.title}
                                text={item.text}
                                icon={item.icon}
                                className="justify-start items-start"
                            />
                            ))}
                        </div>
                                    
                    </div>
                    <div className="w-auto h-auto pb-8">
                        <h3 className="w-full font-montserrat font-bold text-[30px] leading-[44px] py-10 text-center">
                            Our Core Values 
                        </h3>
                                    
                        {/* Grid container for ExpertCard components */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 p-5">
                            {valueItems.map((item, key) => (
                            <ExpertCard 
                                key={key}
                                title={item.title}
                                text={item.text}
                                icon={item.icon}/>
                            ))}
                        </div>
                                
                    </div>
                </div>
            </Container>

        </section>
    )
}