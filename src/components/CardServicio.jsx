import { motion } from "framer-motion"

export default function CardServicio({imagen, alt, titulo, descripcion}){
    return (
        <motion.div className="bg-[#424669] pb-5 rounded-[10px] shadow-[0_8px_24px_rgba(0,0,0,0.25),inset_0_1px_2px_rgba(255,255,255,0.05)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, filter: 'brightness(1.10) saturate(1.05)'}}
            transition={{ duration: 0.4, ease: 'easeOut' }}
        >
            <img className="rounded-[10px] mb-7 shadow-[0_8px_24px_rgba(0,0,0,0.3),0_4px_12px_rgba(0,0,0,0.2)]" src={imagen} alt={alt}/>
            <h3 className="text-[24px] sm:text-[30px] font-[600] pr-6 pl-6">{titulo}</h3>
            <p className="text-[15px] sm:text-[20px] pr-6 pl-6">{descripcion}</p>
        </motion.div>
    )
}