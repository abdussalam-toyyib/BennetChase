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
  defaultText = "", // 👈 fallback
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
            ? "bg-[#3D2763] text-white shadow-lg"
            : "bg-white/5 text-gray-900 shadow-sm hover:bg-white/20"
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
            className={`text-sm mt-1 transition-colors duration-500 ease-in-out ${
              active ? "text-white" : "text-gray-600"
            }`}
          >
            {active ? text : defaultText}
          </p>
        </div>
      </div>
    </div>
  );
};

// import React from "react";
// import { Factory } from 'lucide-react';


// interface IndustryCardProps {
//  icon: React.ReactNode;
//  title: string;
//  text: string;
//  active?: boolean;
//  onClick?: () => void;
// }

// export const IndustryCard: React.FC<IndustryCardProps> = ({
//  icon,
//  title,
//  text,
//  active = false,
//  onClick,
// }) => {
//  return (
//   <div
//    onClick={onClick}
//    className={`p-6 rounded-3xl cursor-pointer 
//     transition-all duration-300 ease-in-out
//     ${
//      active
//       ? "bg-[#3D2763] text-white shadow-lg"
//       : "bg-white/5 text-gray-900 shadow-sm hover:bg-white/20"
//     }
//    `}
//   >
//    <div className="flex items-start gap-4">
//     {active && <Factory />}
//     <div>
//      <h3 className="font-semibold text-lg mb-1 transition-colors duration-500 ease-in-out">
//       {title}
//      </h3>

//      {/* The text is only displayed when the card is active */}
//      {active && (
//       <p
//        className={`text-sm mt-1 transition-opacity duration-500 ease-in-out ${
//         active ? "text-white" : "text-gray-600"
//        }`}
//       >
//        {text}
//       </p>
//      )}
//     </div>
//    </div>
//   </div>
//  );
// };