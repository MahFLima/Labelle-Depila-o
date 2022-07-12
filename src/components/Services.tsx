import { Card } from "./Card";
import leg from "../assets/depilation-leg.svg";
import depilation from "../assets/depilation.svg";
import massage from "../assets/massage.svg"; 


export function Services() {
  return (
    <div
      id="services"
      className="flex flex-col py-20 px-6 bg-gray-100 border-b border-gray-300 md:items-center "
    >
      <div className="flex flex-col md:w-[500px]">
        <strong className="text-3xl text-black mb-4 md:text-center">Serviços</strong>
        <p className="text-black md:text-center">
          Com mais de 10 anos no mercado, o{" "}
          <strong className="text-pink-500">Beautysalon</strong> já conquistou
          clientes de inúmeros países com seus tratamentos exclusivos e
          totalmente naturais
        </p>
      </div>

      <div className="mt-16 flex flex-col items-center gap-6 md:flex-row">
        <Card title="Depilação com cera" subtitle="Produtos de primeira linha" children={<img src={leg} className="w-25 h-25 mt-6"/>}/>
        <Card title="Depilação com cera" subtitle="Produtos de primeira linha" children={<img src={depilation} className="w-25 h-25 mt-6"/>}/>
        <Card title="Depilação com cera" subtitle="Produtos de primeira linha" children={<img src={massage} className="w-25 h-25 mt-6"/>}/>
      </div>
    </div>
  );
}
