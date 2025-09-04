import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  variant?: "left" | "center";
  color?: "white" | "default";
  className?: string;
}

export const SectionTitle: React.FC<HeadingProps> = ({
  children,
  variant = "left",
  color = "default",
  className = "",
}) => {
  return (
    <h2
      className={`font-inter font-semibold text-[14px] leading-[20px] gap-2 mb-5
        ${color === "white" ? "text-white" : "text-[#3D506B]"}
        ${variant === "center" ? "flex justify-center items-center" : "flex justify-start items-center"}
        ${className}`}
    >
      {children}
    </h2>
  );
};
