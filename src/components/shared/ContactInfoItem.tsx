import React from "react";

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  lines: string[];
}

export const ContactInfoItem: React.FC<ContactInfoItemProps> = ({
  icon,
  title,
  lines,
}) => {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
        {lines.map((line, idx) => (
          <p key={idx} className="text-gray-600 text-sm max-w-[200px]">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};
