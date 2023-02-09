import { PlusMinus } from "phosphor-react";

export function Buttons(){
    return(
        <div className="justify-between mx-11 text-blue-50 mt-9 grid grid-cols-4 gap-2">
            <button>
                <div className="flex w-16 h-16 bg-zinc-800 rounded-full shadow-zinc-700 drop-shadow-md  shadow-inner ">
                    <div className="flex mx-auto items-center"><span className="flex shadow-md shadow-zinc-800 text-purple-800 text-xl">CE</span></div>
                </div>
            </button>
            <div className="flex w-16 h-16 bg-zinc-800 rounded-full shadow-zinc-700 drop-shadow-md  shadow-inner">
                <div className="flex mx-auto items-center"><span className="flex text-white text-xl">C</span></div>
            </div>
            <div className="flex w-16 h-16 bg-zinc-800 rounded-full shadow-zinc-700 drop-shadow-md  shadow-inner">
                <div className="flex mx-auto gap-11 items-center"><span className="flex text-white text-xl">%</span></div>
            </div>
            <div className="flex w-16 h-16 bg-purple-800 rounded-full shadow-zinc-700 drop-shadow-md  shadow-inner">
                <div className="flex mx-auto items-center"><span className="flex text-zinc-400 text-3xl">÷</span></div>
            </div>
            <div className="flex w-16 h-16 bg-zinc-800 rounded-full shadow-zinc-700 drop-shadow-md  shadow-inner">
                <div className="flex mx-auto gap-11 items-center"><span className="flex text-white text-xl">7</span></div>
            </div>
            <div className="flex w-16 h-16 bg-zinc-800 rounded-full shadow-zinc-700 drop-shadow-md  shadow-inner">
                <div className="flex mx-auto gap-11 items-center"><span className="flex text-white text-xl">8</span></div>
            </div>
            <div className="flex w-16 h-16 bg-zinc-800 rounded-full shadow-zinc-700 drop-shadow-md  shadow-inner">
                <div className="flex mx-auto gap-11 items-center"><span className="flex text-white text-xl">9</span></div>
            </div>
            <div className="flex w-16 h-16 bg-purple-800 rounded-full shadow-zinc-700 drop-shadow-md  shadow-inner">
                <div className="flex mx-auto gap-11 items-center"><span className="flex text-zinc-400 text-xl">X</span></div>
            </div>
            <div className="flex w-16 h-16 bg-zinc-800 rounded-full shadow-zinc-700 drop-shadow-md  shadow-inner">
                <div className="flex mx-auto gap-11 items-center"><span className="flex text-white text-xl">4</span></div>
            </div>
            <div className="flex w-16 h-16 bg-zinc-800 rounded-full shadow-zinc-700 drop-shadow-md  shadow-inner">
                <div className="flex mx-auto gap-11 items-center"><span className="flex text-white text-xl">5</span></div>
            </div>
            <div className="flex w-16 h-16 bg-zinc-800 rounded-full shadow-zinc-700 drop-shadow-md  shadow-inner">
                <div className="flex mx-auto gap-11 items-center"><span className="flex text-white text-xl">6</span></div>
            </div>
            <div className="flex w-16 h-16 bg-purple-800 rounded-full shadow-zinc-700 drop-shadow-md  shadow-inner">
                <div className="flex mx-auto gap-11 items-center"><span className="flex text-zinc-400 text-xl">-</span></div>
            </div>
            <div className="flex w-16 h-16 bg-zinc-800 rounded-full shadow-zinc-700 drop-shadow-md  shadow-inner">
                <div className="flex mx-auto gap-11 items-center"><span className="flex text-white text-xl">1</span></div>
            </div>
            <div className="flex w-16 h-16 bg-zinc-800 rounded-full shadow-zinc-700 drop-shadow-md  shadow-inner">
                <div className="flex mx-auto gap-11 items-center"><span className="flex text-white text-xl">2</span></div>
            </div>
            <div className="flex w-16 h-16 bg-zinc-800 rounded-full shadow-zinc-700 drop-shadow-md  shadow-inner">
                <div className="flex mx-auto gap-11 items-center"><span className="flex text-white text-xl">3</span></div>
            </div>
            <div className="flex w-16 h-16 bg-purple-800 rounded-full shadow-zinc-700 drop-shadow-md  shadow-inner">
                <div className="flex mx-auto gap-11 items-center"><span className="flex text-zinc-400 text-xl">+</span></div>
            </div>
            <div className="flex w-16 h-16 bg-zinc-800 rounded-full shadow-zinc-700 drop-shadow-md  shadow-inner">
                <div className="flex mx-auto gap-11 items-center"><span className="flex text-white text-xl"><PlusMinus size={27} /></span></div>
            </div>
            <div className="flex w-16 h-16 bg-zinc-800 rounded-full shadow-zinc-700 drop-shadow-md  shadow-inner">
                <div className="flex mx-auto gap-11 items-center"><span className="flex text-white text-xl">0</span></div>
            </div>
            <div className="flex w-16 h-16 bg-zinc-800 rounded-full shadow-zinc-700 drop-shadow-md  shadow-inner">
                <div className="flex mx-auto gap-11 items-center"><span className="flex text-white text-xl">,</span></div>
            </div>
            <div className="flex w-16 h-16 bg-purple-500 rounded-full shadow-zinc-700 drop-shadow-md  shadow-inner">
                <div className="flex mx-auto gap-11 items-center"><span className="flex text-white text-xl">=</span></div>
            </div>

        </div>
    )
}
