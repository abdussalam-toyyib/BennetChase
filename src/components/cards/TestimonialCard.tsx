// components/cards/TestimonialCard.tsx
import React from "react";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  feedback: string;
  stars?: number; // default 5
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  image,
  feedback,
  stars = 5,
}) => {
  return (
    <div className="p-6 rounded-2xl bg-gray-50 shadow-sm hover:shadow-md transition">
      {/* Stars */}
      <div className="flex text-purple-600 mb-4">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-current" />
        ))}
      </div>

      {/* Feedback */}
      <p className="text-gray-700 italic mb-6">"{feedback}"</p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
};
