import { Paragraph } from "../shared/Paragraph";

interface MissionProps {
  title?: string;
  text?: string;
  icon?: string;
  className?: string;
}

export const Mission = ({
  title,
  text,
  icon,
  className = "",
}: MissionProps) => {

  const iconColorFilter =
    "invert(39%) sepia(75%) saturate(390%) hue-rotate(150deg) brightness(95%) contrast(97%)";

  return (
    <div
      className={` bg-white rounded-lg shadow-md w-[85%] max-w-[520px] h-auto min-h-[200px] max-h-auto flex flex-col items-center p-6 transition-transform duration-300 hover:scale-105 ${className}`}
    >
      {icon && (
        <img
          src={icon}
          alt={title || "icon"}
          className={`w-12 h-12 mb-4 object-contain ${className}`}
          style={{ filter: iconColorFilter }}
        />
      )}
      {title && (
        <h3 className={`text-lg font-semibold text-gray-800 text-center mb-2 ${className}`}>
          {title}
        </h3>
      )}
      {text && (
        <Paragraph className={`text-gray-600 text-sm text-center${className}`}>
          {text}
        </Paragraph>
      )}
    </div>
  );
};
