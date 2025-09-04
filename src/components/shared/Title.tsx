import React from "react";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export const Title: React.FC<TitleProps> = ({ children, className = "" }) => {
  return (
    <h1
      className={`w-full font-inter font-bold text-[28px] leading-[36px] sm:text-[36px] sm:leading-[44px] md:text-[42px] md:leading-[52px] lg:text-[48px] lg:leading-[60px] text-[#171A1F] 
        ${className}`}
    >
      {children}
    </h1>
  );
};
