import { useState } from "react";
import { Buttons } from "./Buttons";
import { Visor } from "./Visor";

export function Calculator(){
    const [valor,setValor] = useState(0)
    const [calc,setCalc] = useState("0")

    function exibirValor(valor: number){
        setValor(valor)
    }

    function exibirCalculo(calculo: string){
        setCalc(calculo)
    }

    return(
        <div className="w-96 h-pers mx-auto bg-bgcalc flex flex-col text-blue-50 rounded-exl border border-zinc-700 drop-shadow-md shadow-black">
            <Visor result={valor} calc={calc}/>
            <Buttons onUpdateValue={exibirValor} onUpdateCalc={exibirCalculo}/>
        </div>
    )
}
