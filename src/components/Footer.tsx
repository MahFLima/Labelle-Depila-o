import { FacebookLogo, InstagramLogo, TwitterLogo } from "phosphor-react";

export function Footer(){
  return(
    <div className="text-white bg-pink-500 py-16 px-6 flex flex-col gap-6">
      <strong className="text-xl font-serif">Labelle Espaço Depilação</strong>
      <div className="flex gap-9">
        <a target="_blank" href="https://www.instagram.com/_labelle.ep/"><InstagramLogo size={24}/></a>
        <a><FacebookLogo size={24}/></a>
        <a><TwitterLogo size={24}/></a>
      </div>
    </div>
  )
}