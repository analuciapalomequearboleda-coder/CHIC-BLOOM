import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Sparkles,
  HelpCircle,
  ChevronDown
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Consulta de prendas o tallas',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: '¿Cómo elijo mi talla correcta en CHIC BLOOM?',
      a: 'Cada prenda cuenta con una Guía de Tallas detallada con medidas en centímetros para busto, cintura y cadera. Si tienes dudas entre dos tallas, nuestras asesoras por WhatsApp te orientarán al instante según tu estatura y contextura.'
    },
    {
      q: '¿Cuánto tiempo tarda en llegar mi pedido?',
      a: 'Nuestros envíos express toman entre 24 y 48 horas hábiles en ciudades principales (Bogotá, Medellín, Cali, Barranquilla) y de 3 a 5 días hábiles en el resto del país.'
    },
    {
      q: '¿Tienen opción de pago contra entrega?',
      a: '¡Sí! Puedes pagar en efectivo cuando recibas tu pedido en la comodidad de tu casa u oficina para la mayoría de ciudades principales.'
    },
    {
      q: '¿Cómo funciona la política de cambios?',
      a: 'Tienes 30 días calendario para solicitar cambio de talla o prenda. La prenda debe estar sin usar y conservar sus etiquetas originales intactas.'
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-white border-t border-[#F5ECE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A06C76]">
            Estamos para Ti
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury text-[#2C1A20]">
            Contacto & Atención Personalizada
          </h2>
          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto my-3" />
          <p className="text-xs sm:text-sm text-[#735E63]">
            ¿Tienes alguna consulta sobre una prenda, tu pedido o quieres asesoría de estilismo? Escríbenos y con gusto te atenderemos.
          </p>
        </div>

        {/* 2 Column Layout: Info/FAQ vs Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Direct channels & FAQ */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Contact Cards */}
            <div className="space-y-4">
              {/* WhatsApp Highlight Card */}
              <a
                href="https://wa.me/573008902566?text=Hola%20CHIC%20BLOOM,%20quiero%20hacer%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 hover:bg-emerald-100 transition-colors group shadow-xs"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-emerald-950 uppercase tracking-wider">Línea WhatsApp Oficial</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <p className="text-sm font-semibold text-emerald-900">+57 300 890 2566</p>
                  <p className="text-[11px] text-emerald-700">Respuesta en menos de 10 minutos</p>
                </div>
              </a>

              {/* Email Card */}
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#FAF7F5] border border-[#EADBCE]">
                <div className="w-12 h-12 rounded-2xl bg-[#5E2B38] text-white flex items-center justify-center shadow-md">
                  <Mail className="w-6 h-6 text-[#E2C992]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#5A4A4D] uppercase tracking-wider">Correo Electrónico</span>
                  <p className="text-sm font-semibold text-[#2C1A20]">contacto@chicbloom.com</p>
                  <p className="text-[11px] text-[#8C6D73]">Para solicitudes y prensa</p>
                </div>
              </div>

              {/* Showroom & Hours Card */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#FAF7F5] border border-[#EADBCE]">
                <div className="w-12 h-12 rounded-2xl bg-[#C5A059] text-white flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#5A4A4D] uppercase tracking-wider">Showroom & Boutique</span>
                  <p className="text-xs font-semibold text-[#2C1A20] mt-0.5">Parque Robledo, Medellín, Colombia</p>
                  <p className="text-[11px] text-[#8C6D73] mt-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> Lun a Sáb: 9:30 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Accordion FAQ */}
            <div className="space-y-3 pt-2">
              <h3 className="text-base font-serif-luxury font-medium text-[#2C1A20] flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#C5A059]" />
                <span>Preguntas Frecuentes</span>
              </h3>

              <div className="space-y-2">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div 
                      key={index} 
                      className="border border-[#EADBCE] rounded-xl overflow-hidden bg-[#FCFAF8]"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full p-3.5 text-left text-xs font-bold text-[#3D1E26] flex items-center justify-between hover:bg-[#FAF4F3] transition-colors"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown className={`w-4 h-4 text-[#8C6D73] transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#5E2B38]' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="px-3.5 pb-3.5 text-xs text-[#6B575B] leading-relaxed border-t border-[#EADBCE]/50 pt-2 font-sans-clean">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#FAF7F5] p-6 sm:p-10 rounded-3xl border border-[#EADBCE] shadow-sm">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif-luxury text-[#2C1A20]">¡Mensaje Enviado con Éxito!</h3>
                <p className="text-xs text-[#735E63] max-w-sm mx-auto">
                  Gracias por escribirnos, <strong>{formData.name}</strong>. Una de nuestras asesoras se pondrá en contacto contigo en breve a tu correo o WhatsApp.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', subject: 'Consulta de prendas o tallas', message: '' });
                  }}
                  className="bg-[#5E2B38] text-white px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1 mb-4">
                  <h3 className="text-xl font-serif-luxury text-[#2C1A20]">Escríbenos un Mensaje</h3>
                  <p className="text-xs text-[#8C6D73]">Responderemos a tu solicitud con la mayor delicadeza y prontitud.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#5A4A4D] uppercase tracking-wider mb-1">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-[#DAC2B9] rounded-xl px-3.5 py-2.5 text-xs text-[#3D1E26] focus:outline-none focus:border-[#5E2B38]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#5A4A4D] uppercase tracking-wider mb-1">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="tu@correo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-[#DAC2B9] rounded-xl px-3.5 py-2.5 text-xs text-[#3D1E26] focus:outline-none focus:border-[#5E2B38]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#5A4A4D] uppercase tracking-wider mb-1">
                      WhatsApp o Teléfono
                    </label>
                    <input
                      type="tel"
                      placeholder="Ej: +57 300 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-[#DAC2B9] rounded-xl px-3.5 py-2.5 text-xs text-[#3D1E26] focus:outline-none focus:border-[#5E2B38]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#5A4A4D] uppercase tracking-wider mb-1">
                      Motivo de Contacto
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white border border-[#DAC2B9] rounded-xl px-3.5 py-2.5 text-xs text-[#3D1E26] focus:outline-none focus:border-[#5E2B38] cursor-pointer"
                    >
                      <option value="Consulta de prendas o tallas">Consulta de prendas o tallas</option>
                      <option value="Estado de mi pedido">Estado de mi pedido</option>
                      <option value="Cambios y devoluciones">Cambios y devoluciones</option>
                      <option value="Asesoría personalizada">Asesoría personalizada</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#5A4A4D] uppercase tracking-wider mb-1">
                    Tu Mensaje *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-[#DAC2B9] rounded-xl px-3.5 py-2.5 text-xs text-[#3D1E26] focus:outline-none focus:border-[#5E2B38]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#5E2B38] hover:bg-[#471E28] text-white py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#E2C992]" />
                  <span>Enviar Mensaje</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
