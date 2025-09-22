import React from "react";

interface IndustryCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  active?: boolean;
  onClick?: () => void;
  defaultText?: string; 
}

export const IndustryCard: React.FC<IndustryCardProps> = ({
  icon,
  title,
  text,
  active = false,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`p-6 rounded-xl cursor-pointer 
        transition-all duration-500 ease-in-out
        ${
          active
            ? "bg-[#21194E] text-white"
            : "bg-[#C3C5FF] text-gray-900"
        }
      `}
    >
      <div className="flex items-start gap-4">
        {icon}
        <div>
          <h3 className="font-semibold text-lg mb-1 transition-colors duration-500 ease-in-out">
            {title}
          </h3>

          {/* Instead of animating <p>, just swap the content */}
          <p
            className={`text-sm mt-1 transition-all duration-500 ease-in-out overflow-hidden
              ${active ? "h-auto opacity-100 text-white" : "h-0 opacity-0"}
            `}>
            {text}
          </p>

        </div>
      </div>
    </div>
  );
};
