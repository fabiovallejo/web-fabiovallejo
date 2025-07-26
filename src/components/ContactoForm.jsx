import { useState, useEffect } from 'react';

export default function ContactoForm() {
  const [form, setForm] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const [touched, setTouched] = useState({});
  const [errores, setErrores] = useState({});
  const [formValido, setFormValido] = useState(false);

  useEffect(() => {
    const nuevosErrores = {};

    if (form.nombre.trim() === '') nuevosErrores.nombre = 'Requerido';
    if (form.apellidos.trim() === '') nuevosErrores.apellidos = 'Requerido';
    if (!/\S+@\S+\.\S+/.test(form.email)) nuevosErrores.email = 'Email inválido';
    if (form.telefono.trim().length < 9) nuevosErrores.telefono = 'Mínimo 9 dígitos';
    if (form.mensaje.trim().length < 30) nuevosErrores.mensaje = 'Mínimo 30 caracteres';

    setErrores(nuevosErrores);
    setFormValido(Object.keys(nuevosErrores).length === 0);
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValido) return alert("Corrige los errores antes de enviar");

    console.log("Formulario enviado:", form);
    alert("¡Gracias por tu mensaje!");
  };

  return (
    <div id="cotizar" className="p-15 sm:p-20 items-center justify-center text-center">
      <p className="text-[28px] sm:text-[35px] font-[600]">Contáctame</p>
      <h3 className="text-[15px] sm:text-[20px] pb-10">Trabajemos en tu presencia digital</h3>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto text-left">
        {[
          { label: 'Nombre', name: 'nombre', type: 'text', span: 1 },
          { label: 'Apellidos', name: 'apellidos', type: 'text', span: 1 },
          { label: 'Correo Electrónico', name: 'email', type: 'email', span: 2 },
          { label: 'Número de Teléfono', name: 'telefono', type: 'tel', span: 2 },
        ].map(({ label, name, type, span }) => (
          <div key={name} className={span === 2 ? "sm:col-span-2" : ""}>
            <label htmlFor={name}>
              {label}<span className="text-[#F8B179]"> *</span>
            </label>
            <input
              id={name}
              name={name}
              type={type}
              required
              value={form[name]}
              onChange={handleChange}
              className={`w-full bg-[#676F9D] h-11 rounded-[8px] pl-3 pr-3 text-white shadow-[inset_22px_22px_44px_#383c59,_inset_-22px_-22px_44px_#4c5179] ${
                touched[name] && errores[name] ? 'border border-red-400' : ''
              }`}
              placeholder={`Tu ${label}`}
            />
            {touched[name] && errores[name] && (
              <p className="text-red-400 text-sm mt-1">{errores[name]}</p>
            )}
          </div>
        ))}

        <div className="sm:col-span-2">
          <label htmlFor="mensaje">
            Mensaje<span className="text-[#F8B179]"> *</span>
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            placeholder="Cuéntame sobre tu proyecto..."
            className={`w-full h-28 bg-[#676F9D] rounded-[8px] pl-3 pr-3 pt-2 text-white shadow-[inset_41px_41px_82px_#383c59,_inset_-41px_-41px_82px_#4c5179] ${
              touched.mensaje && errores.mensaje ? 'border border-red-400' : ''
            }`}
            required
          />
          {touched.mensaje && errores.mensaje && (
            <p className="text-red-400 text-sm mt-1">{errores.mensaje}</p>
          )}
        </div>

        <div className="sm:col-span-2 text-center">
          <button
            type="submit"
            disabled={!formValido}
            className={`bg-[#F8B179] pt-3 pb-3 pl-5 pr-5 rounded-[15px] text-[15px] sm:text-[20px] mt-4
              shadow-[20px_20px_40px_rgba(0,0,0,0.6),-20px_-20px_40px_rgba(255,255,255,0.08)]
              hover:shadow-[16px_16px_32px_rgba(0,0,0,0.7),-16px_-16px_32px_rgba(255,255,255,0.12)]
              active:shadow-[inset_10px_10px_20px_rgba(0,0,0,0.5),inset_-10px_-10px_20px_rgba(255,255,255,0.1)]
              transition-all duration-300 hover:-translate-y-1.5
              active:translate-y-0 text-white font-medium ${
                !formValido ? 'opacity-75 cursor-not-allowed' : 'opacity-100 cursor-pointer'
              }`}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
