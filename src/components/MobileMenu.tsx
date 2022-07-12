
interface propsMenu{
  click: () => void
}

export function MobileMenu({click}: propsMenu) {
  return (
    <div className="w-full h-full bg-pink-500 text-black text-3xl font-bold flex flex-col items-center py-28 gap-16">
      <a onClick={click} href="#home">Home</a>
      <a onClick={click} href="#about">Sobre</a>
      <a onClick={click} href="#services">Serviços</a>
      <a onClick={click} href="#brief">Depoimentos</a>
      <a onClick={click} href="#contato">Contato</a>
    </div>
  );
}
