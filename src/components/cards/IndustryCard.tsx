// // components/cards/IndustryCard.tsx
// import React from "react";

// interface IndustryCardProps {
//   icon: string;
//   title: string;
//   text: string;
//   active?: boolean;
//   onClick?: () => void;
// }

// export const IndustryCard: React.FC<IndustryCardProps> = ({
//   icon,
//   title,
//   text,
//   active = false,
//   onClick,
// }) => {
//   return (
//     <div
//       onClick={onClick}
//       className={`p-6 rounded-xl cursor-pointer transition ${
//         active
//           ? "bg-[#3D2763] text-white shadow-lg"
//           : "bg-white hover:bg-gray-100 text-gray-900 shadow-sm"
//       }`}
//     >
//       <div className="flex items-start gap-4">
//         <img src={icon} alt={title} className="w-8 h-8 flex-shrink-0" />

//         <div>
//           {/* Always visible */}
//           <h3 className="font-semibold text-lg mb-1">{title}</h3>

//           {/* Animated reveal */}
//           <div
//             className={`overflow-hidden transition-all duration-500 ease-in-out ${
//               active ? "max-h-40 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
//             }`}
//           >
//             <p
//               className={`text-sm mt-1 ${
//                 active ? "text-white" : "text-gray-600"
//               }`}
//             >
//               {text}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


// components/cards/IndustryCard.tsx
import React from "react";

interface IndustryCardProps {
  icon: string;
  title: string;
  text: string;
  active?: boolean;
  onClick?: () => void;
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
        ${active ? "bg-[#3D2763] text-white shadow-lg" : "bg-white text-gray-900 shadow-sm hover:bg-gray-100"}
      `}
    >
      <div className="flex items-start gap-4">
        <img src={icon} alt={title} className="w-8 h-8 flex-shrink-0" />

        <div>
          {/* Always visible */}
          <h3
            className={`font-semibold text-lg mb-1 transition-colors duration-500 ease-in-out`}
          >
            {title}
          </h3>

          {/* Animated reveal */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              active
                ? "max-h-40 opacity-100 translate-y-0"
                : "max-h-0 opacity-0 -translate-y-2"
            }`}
          >
            <p
              className={`text-sm mt-1 transition-colors duration-500 ease-in-out ${
                active ? "text-white" : "text-gray-600"
              }`}
            >
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
