import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PreguntaFAQ({ pregunta, respuesta }){
    const [abierta, setAbierta] = useState(false); 

    return(
        <div className="flex flex-col cursor-pointer border-b border-gray-400">
            <div className="flex py-[1rem] justify-between" onClick={() => setAbierta(!abierta)}>
                <div>
                    <button className="cursor-pointer text-left text-[15px] md:text-[18px]">{pregunta}</button>
                </div>
                <div>
                    {!abierta ? <i className="fa-solid fa-circle-plus"></i> : <i className="fa-solid fa-circle-minus text-[#676F9D]"></i>}
                </div>
            </div>
            <AnimatePresence initial={false}>
                {abierta && (
                <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ opacity: 0, scaleY: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="origin-top overflow-hidden"
                >
                    <p className="py-[0.5rem] opacity-85 text-[14px] md:text-[16px]">{respuesta}</p>
                </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}