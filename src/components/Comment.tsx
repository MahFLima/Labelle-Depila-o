interface commentProps {
  id: number;
  comment: string;
  srcImg: string;
  user: string;
}

export function Comment(props: commentProps) {
  return (
    <div className="w-full flex flex-col p-8 gap-6 rounded shadow-inner bg-gray-100 ">
      <span className="text-base text-black">
        <strong className="font-serif font-bold text-pink-500 text-xl px-6">“ </strong>
        {props.comment}
      </span>
      <div className="flex items-center">
        <img className="w-8 h-8 object-cover rounded-[50%] mr-3" src={props.srcImg} />
        <p className="text-base">{props.user}</p>
      </div>
    </div>
  );
}
