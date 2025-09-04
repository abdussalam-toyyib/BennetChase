
interface BottonLinkProps {
   href?: string;
   text?: string;
   classname?: string;
}

export const BottonLink = ({href, text, classname = ''}: BottonLinkProps) => {
    return (
        <a href={href} className={`px-6 py-3 border-none rounded-lg outline-none relative overflow-hidden border bg-[#3D2763FF] hover:bg-[#7555ad] cursor-pointer transform transition duration-300 ${classname}`}>
            <span className="relative z-10 text-white"> {text} </span>
        </a>
    )
}