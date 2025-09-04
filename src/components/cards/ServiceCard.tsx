
// interface ServiceCardProps {
//     icon?: string;
//     title?: string;
//     text?: string;
//     className?: string;
// }


// export const ServiceCard = ({icon, title, text, className = ""}: ServiceCardProps) => {
    
//     return (
//         <div className={`flex flex-row -translate-x-1/2 w-auto h-auto min-h-[196px] bg-white rounded-lg shadow-[0px_0px_1px_rgba(23,26,31,0.07),0px_0px_2px_rgba(23,26,31,0.12)]p-6 ${className}`}>
//             <img src={icon} alt={title} width={40} height={40} />
//             <div className={`flex flex-col ${className}`}>
//                 <p className={`font-inter text-lg sm:text-xl md:text-2xl leading-7 sm:leading-8 font-semibold text-neutral-900 ${className}`}>
//                     {title}
//                 </p>
//                 <p className={`absolute top-[70px] left-[96px] w-[90%] max-w-[416px] font-inter text-sm sm:text-base leading-6 font-normal text-[#565D6D] ${className}`}>
//                     {text}
//                 </p>



//             </div>
 
//         </div>

//     )
// }

interface ServiceCardProps {
  icon: string;   // image path (string)
  title: string;
  text: string;
}

export const ServiceCard = ({ icon, title, text }: ServiceCardProps) => {
  return (
    <div className="
      bg-white 
      border border-gray-200 
      rounded-xl 
      p-5 sm:p-6 lg:p-8 
      shadow-sm hover:shadow-md 
      transition-shadow duration-300 
      h-full flex flex-col
    ">
      {/* Icon */}
      <img
        src={icon}
        alt={title}
        className="w-10 h-10 sm:w-12 sm:h-12 object-contain mb-4"
      />

      {/* Title */}
      <h3 className="text-base sm:text-lg font-semibold text-gray-900">
        {title}
      </h3>

      {/* Text */}
      <p className="mt-2 text-gray-600 text-sm sm:text-base leading-6">
        {text}
      </p>
    </div>
  );
};
