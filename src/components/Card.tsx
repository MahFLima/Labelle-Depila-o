import { Children, FunctionComponent } from "react";


interface cardProps{
  title: string;
  subtitle: string;
  children: JSX.Element
}

export const Card:FunctionComponent<cardProps> = ({title, subtitle, children }: cardProps) => {
  return (
    <div className="flex flex-col items-center justify-between text-center py-6 px-7 bg-gray-100 border-b-4 border-pink-500 shadow-2xl transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110">
      {children}
      <div>{children}</div>
      <strong className="text-2xl font-serif text-black md:text-center">{title}</strong>
      <p className="text-base mt-3">
        {subtitle}
      </p>
    </div>
  );
}
