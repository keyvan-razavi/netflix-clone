import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { useRouter } from "next/router";

interface PlayBtnProps {
  movieId: string;
}

const PlayBtn: React.FC<PlayBtnProps> = ({ movieId }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/watch/${movieId}`)}
      className=" bg-white rounded-md py-1 md:py-2 px-2 md:px-4
         w-auto text-xs lg:text-lg font-semibold flex flex-row items-center
         hover:bg-neutral-300 transition
  "
    >
      <BsFillPlayFill size={20} className="mr-1" />
      Play
    </button>
  );
};

export default PlayBtn;
