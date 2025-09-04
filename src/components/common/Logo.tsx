interface LogoProps {
    src: string
    altText:string
    
}

export const Logo = ({src, altText}: LogoProps) => {
    return (
        <div className="min-w-max inline-flex relative">
            <a href="#" className="relative flex items-center gap-3">
                <img src={src} alt={altText} className="h-8 w-30"/>
            </a>
        </div>
    )
}