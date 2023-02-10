import { PlusMinus, X, Minus, Plus, Divide,Equals } from "phosphor-react";
import { ButtonPurple } from "./ButtonPurple";
import { ButtonZinc } from "./ButtonZinc";

export function Buttons(){
    return(
        <div className="justify-between mx-11 text-blue-50 mt-9 grid grid-cols-4 gap-2">
            <button className="w-16 h-16 bg-zinc-800 rounded-full text-purple-800 text-xl shadow-zinc-700 drop-shadow-md shadow-inner">
                CE  
            </button>
            <ButtonZinc valor="C"/>
            <ButtonZinc valor="%"/>
            <ButtonPurple valor={<Divide size={20} />}/>
            <ButtonZinc valor="7"/>
            <ButtonZinc valor="8"/>
            <ButtonZinc valor="9"/>
            <ButtonPurple valor={<X size={20} />}/>
            <ButtonZinc valor="4"/>
            <ButtonZinc valor="5"/>
            <ButtonZinc valor="6"/>
            <ButtonPurple valor={<Minus size={20} />}/>
            <ButtonZinc valor="1"/>
            <ButtonZinc valor="2"/>
            <ButtonZinc valor="3"/>
            <ButtonPurple valor={<Plus size={20} />}/>
            <ButtonPurple valor={<PlusMinus size={20} />}/>
            <ButtonZinc valor="0"/>
            <ButtonZinc valor=","/>
            <button className="w-16 h-16 bg-purple-500 rounded-full shadow-zinc-700 drop-shadow-md shadow-inner items-center">
                <div className="flex justify-center">
                    <Equals/>
                </div>
            </button>

        </div>
    )
}
