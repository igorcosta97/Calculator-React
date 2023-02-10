import { Buttons } from "./Buttons";
import { Visor } from "./Visor";

export function Calculator(){
    return(
        <div className="w-96 h-pers mx-auto bg-bgcalc flex flex-col text-blue-50 rounded-exl border border-zinc-700 drop-shadow-md shadow-black">
            <Visor/>
            <Buttons/>
        </div>
    )
}
