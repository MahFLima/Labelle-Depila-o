import { EnvelopeSimple, MapPin, Phone, WhatsappLogo } from "phosphor-react";

export function Contato() {
  return (
    <div
      id="contato"
      className="flex flex-col  py-20 px-6 border-b border-gray-300 md:grid md:grid-cols-2"
    >
      <div className="flex flex-col justify-center">
        <strong className="text-3xl text-black">
          Entre em contato com a gente!
        </strong>
        <p className="text-base mt-4">
          Entre em contato com a Beautysalon,
          <br /> queremos tirar suas dúvidas, ouvir suas
          <br /> críticas e sugestões.
        </p>
        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=5511999702476&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20horario"
          className="flex gap-3 items-center justify-center py-3.5 bg-pink-500 w-56 mt-8 text-white"
        >
          <WhatsappLogo size={32} />
          Entre em contato
        </a>
        <div className="flex flex-col gap-4 mt-6">
          <a className="flex items-center text-base gap-3">
            <Phone size={24} />
            (11) 9 94025-4938
          </a>
          <a
            target="_blank"
            href="https://www.google.com.br/maps/place/La+Belle+espa%C3%A7o+depila%C3%A7%C3%A3o/@-23.6383569,-46.8074503,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce5498d42d7d4d:0x8b35290a8a28dec7!8m2!3d-23.6383619!4d-46.8032231"
            className="flex items-center text-base gap-3"
          >
            <MapPin size={24} />
            Av Fernando Fernandes, 360
          </a>
        </div>
      </div>
      <aside className="mt-16 flex flex-col gap-8 md:mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.0505155975484!2d-46.805411785760114!3d-23.638361884644716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5498d42d7d4d%3A0x8b35290a8a28dec7!2zTGEgQmVsbGUgZXNwYcOnbyBkZXBpbGHDp8Ojbw!5e0!3m2!1spt-BR!2sbr!4v1657581098936!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          loading="lazy"
          className="w-full h-[400px]"
        ></iframe>
      </aside>
    </div>
  );
}
