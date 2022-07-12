import logo from "../assets/Img.png";

export function Home() {
  return (
    <div
      id="home"
      className="w-scream flex flex-col py-8 px-6 bg-gray-100 border-b border-gray-300 md:grid md:grid-cols-2"
    >
      <img
        src="https://unsplash.it/1600/400?image=930 "
        className="w-full h-[400px] column-span-2 object-cover"
      />
      <aside className="flex  gap-4 px-6 mt-6 md:order-first md:justify-center ">
        <div className="flex flex-col justify-center h-full">
          <strong className="font-serif text-3xl text-black">
            Saúde natural para os seus cabelos
          </strong>

          <p className="text mt-4">
            Um salão exclusivo em São Paulo,
            <br /> especializado em tratamentos naturais.
          </p>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5511999702476&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20horario"
            className="py-4 px-8 mt-6 bg-pink-500 text-white text-base font-medium w-[214px] hover:opacity-70 "
          >
            Agendar um horario
          </a>
        </div>
      </aside>
    </div>
  );
}
