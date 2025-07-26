import { useState, useEffect } from 'react';

export default function ContadorOferta() {
  const [tiempoRestante, setTiempoRestante] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 });

  useEffect(() => {
    const fechaFinal = new Date('2025-08-31T23:59:59');

    const intervalo = setInterval(() => {
        const ahora = new Date();
        const diferencia = fechaFinal - ahora;

        if (diferencia <= 0){
            clearInterval(intervalo);
            setTiempoRestante({dias: 0, horas: 0, minutos: 0, segundos: 0});
            return;
        }

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diferencia / (1000 * 60) % 60));
        const segundos = Math.floor((diferencia / 1000) % 60);

        setTiempoRestante({dias, horas, minutos, segundos});
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

    return (
    <div className='lg:w-[70%] rounded-[7px] text-center bg-[#676F9D] mt-5 pt-2 pb-2 pr-4 pl-4 mb-2 shadow-[8px_8px_15px_rgba(0,0,0,0.3),_-6px_-6px_12px_rgba(255,255,255,0.05)]'>
        <p className="uppercase font-[600] text-[17px] sm:text-[20px]">¡25% de Descuento por tiempo limitado!</p>
        <p className="text-[16px] sm:text-[20px] font-[500]">
        Faltan <b>{tiempoRestante.dias}:{tiempoRestante.horas.toString().padStart(2, '0')}:
        {tiempoRestante.minutos.toString().padStart(2, '0')}:
        {tiempoRestante.segundos.toString().padStart(2, '0')}</b> para terminar la oferta
        </p>
    </div>
    );
}