import { Buttons } from "./Buttons";
import { Visor } from "./Visor";

export function Calculator(){
    return(
        <div className="w-96 h-pers mx-auto bg-bgcalc flex flex-col text-blue-50 rounded-3xl border border-zinc-700">
            <Visor/>
            <Buttons/>
        </div>
    )
}
