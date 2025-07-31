import Marquee from "react-fast-marquee";

export default function carruselLogos(){
    const logos = [
    {src: 'assets/arkasa.svg', alt: 'Logo Arkasa'},
    {src: 'assets/disecod.svg', alt: 'Logo Disecod'},
    {src: 'assets/melaminaperu.svg', alt: 'Logo Melamina Peru'},
    {src: 'assets/piedraperu.svg', alt: 'Logo Piedra Peru'},
    {src: 'assets/solutec.svg', alt: 'Logo Solutec Peru'}
    ]
    return (
        <div className="mx-auto mt-20 max-w-[1200px] px-18 lg:px-6">
        <h3 className="text-center font-[600] text-[28px] sm:text-[35px] mb-6">
            Clientes Satisfechos
        </h3>
        <Marquee speed={45} gradient={false}>
        {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex items-center justify-center mx-10">
            <img
                src={logo.src}
                alt={logo.alt}
                className="h-[140px] w-auto object-contain"
            />
            </div>
        ))}
        </Marquee>
        </div>
    );
}