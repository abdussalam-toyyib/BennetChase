import React from "react";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className = "",
}) => {
  return (
    <p
      className={` w-[90%] sm:top-[300px] sm:left-12 sm:max-w-[480px] md:top-[330px] md:left-[100px] md:max-w-[520px] lg:top-[363px] lg:left-[160px] lg:max-w-[520px] font-inter font-normal text-[16px] leading-[24px] sm:text-[17px] sm:leading-[26px] md:text-[18px] md:leading-[28px] text-[#171A1F] 
        ${className}`}
    >
      {children}
    </p>
  );
};
