import classNames from "classnames";
import { useEffect, useState } from "react";
import { Comment } from "./Comment";

type slide = {
  id: number
  comment: string
  user: string
  style: string
  forHTML: string
}

const slides = [
  {
    id: 1,
    comment:
      "Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados.",
    srcImg: "https://unsplash.it/1600/400?image=950",
    user: "Wanessa Souza",
    style: "s1",
    forHTML: "slide1",
  },
  {
    id: 2,
    comment:
      "Minha mãe frequenta o salão há anos e me levou um dia para conhecer. Minha experiência foi incrível, eu continuo fazendo o a terapia capilar e isso salvou o meu cabelo. Adoro todos os profissionais do Beautysalon.",
    srcImg: "https://unsplash.it/1600/400?image=930",
    user: "Luna Falcão",
    style: "",
    forHTML: "slide2",
  },
];

export function Brief() {
  const [listSlide, setListSlide] = useState<slide[]>([])

  return (
    <div id="brief" className="flex flex-col items-center py-20 border-b border-gray-300 gap-4">
      <strong className="text-3xl text-black mx-6">
        Depoimentos de quem já passou por aqui
      </strong>
      <div className="mx-6">
        <div className="w-full h-full relative overflow-hidden flex">
          <div className="flex w-full h-full gap-4">
            {slides.map((item, index) => {
              return (
                <input
                  key={index}
                  type="radio"
                  name="slide"
                  className="hidden"
                  id={item.forHTML}
                />
              );
            })}

            

            {slides.map((item, index) => {
              return (
                <div
                  className={classNames(
                    "w-full md:w-[50%] flex-none ",
                    item.style
                  )}
                  key={index}
                >
                  <Comment
                    id={item.id}
                    comment={item.comment}
                    srcImg={item.srcImg}
                    user={item.user}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-around">
        <label
          key={slides[0].id}
          htmlFor={slides[0].forHTML}
          id={slides[0].forHTML}
          className="w-4 h-4 rounded-[50%] border border-pink-500 hover:bg-pink-500 transition-colors ml-4"
        ></label>
        <label
          key={slides[1].id}
          htmlFor={slides[1].forHTML}
          id={slides[1].forHTML}
          className="w-4 h-4 rounded-[50%] border border-pink-500 hover:bg-pink-500 transition-colors ml-4 md:hidden"
        ></label>
      </div>
    </div>
  );
}
