import { PlusMinus, X, Minus, Plus, Divide,Equals } from "phosphor-react";
import { useState } from "react";


export function Buttons({onUpdateValue,onUpdateCalc} : any ){
    const [number, setNumber] = useState(0)
    const [number2, setNumber2] = useState(0)
    const [operator, setOperator] = useState("")

    function inputNumber(e:any){
        if(number === 0){
            setNumber(e.target.value)
            onUpdateValue(e.target.value)
        }else{
            setNumber(number + e.target.value)
            onUpdateValue(number + e.target.value)
        }
        
    }

    function clear(){
        onUpdateValue(0)
        onUpdateCalc(0)
        setNumber(0)
        setNumber2(0)
    }

    function cancelEntry(){
        onUpdateValue(0)
        setNumber(0)
    }

    function porcentage(e:any){
        setNumber(number/100)
        onUpdateValue(number/100)
        onUpdateCalc(number)
    }

    function invertValue(e:any){
        if(Math.sign(number) == 1){
            setNumber(-number)
            onUpdateCalc(number)
            onUpdateValue(-number)
        }else if(Math.sign(number) == -1){
            setNumber(Math.abs(number))
            onUpdateCalc(number)
            onUpdateValue(Math.abs(number))
        }else{
            setNumber(0)
            onUpdateCalc(0)
            onUpdateValue(0)
        }
    }

    function operation(e:any){
        if(e.target.value === "/"){
            setOperator("/")
            setNumber2(number)
            onUpdateValue(0)
            onUpdateCalc(number + " ÷")
            setNumber(0)
            
        }else if(e.target.value === "X"){
            setOperator("X")
            setNumber2(number)
            onUpdateCalc(number + " *")
            setNumber(0)
            onUpdateValue(0)
        }else if(e.target.value === "+"){
            setOperator("+")
            setNumber2(number)
            onUpdateCalc(number + " " + e.target.value)
            setNumber(0)
            onUpdateValue(0)
        }else {
            setOperator("-")
            setNumber2(number)
            onUpdateCalc(number + " " + e.target.value)
            setNumber(0)
            onUpdateValue(0)
        }
    }

    function result(e:any){ 
        if(operator === "/"){
            var calc = Number(number2)/Number(number)
            onUpdateCalc(number2 + " ÷ " + number)
            onUpdateValue(calc)
            setNumber2(calc)
            setNumber(calc)
        }else if(operator === "X"){
            var calc = Number(number2)*Number(number)
            onUpdateCalc(number2 + " * " + number)
            onUpdateValue(calc)
            setNumber2(calc)
            setNumber(calc)
        }else if(operator === "+"){
            var calc = Number(number2) + Number(number)
            onUpdateCalc(number2 + " + " + number)
            onUpdateValue(calc)
            setNumber2(calc)
            setNumber(calc)
        }else {
            var calc = Number(number2)-Number(number)
            onUpdateCalc(number2 + " - " + number)
            onUpdateValue(calc)
            setNumber2(calc)
            setNumber(calc)
        }

    }
            

    return(
        <div className="justify-between mx-11 text-blue-50 mt-9 grid grid-cols-4 gap-2">
            <button onClick={cancelEntry} value={"CE"} className="w-16 h-16 bg-zinc-800 rounded-full text-purple-800 text-xl shadow-zinc-700 drop-shadow-md shadow-inner">
                CE  
            </button>
            <button onClick={clear} value={"C"} className="w-16 h-16 bg-zinc-800 rounded-full text-white text-xl shadow-zinc-700 drop-shadow-md shadow-inner ">
                C
            </button>
            <button onClick={porcentage} value={"%"} className="w-16 h-16 bg-zinc-800 rounded-full text-white text-xl shadow-zinc-700 drop-shadow-md shadow-inner ">
                %
            </button>
            <button onClick={operation} value={"/"} className="flex justify-center w-16 h-16 bg-purple-800 rounded-full shadow-zinc-700 drop-shadow-md shadow-inner items-center">
                <Divide size={20}/>
            </button>
            <button onClick={inputNumber} value={7} className="w-16 h-16 bg-zinc-800 rounded-full text-white text-xl shadow-zinc-700 drop-shadow-md shadow-inner ">
                7
            </button>
            <button onClick={inputNumber} value={8} className="w-16 h-16 bg-zinc-800 rounded-full text-white text-xl shadow-zinc-700 drop-shadow-md shadow-inner ">
                8
            </button>
            <button onClick={inputNumber} value={9} className="w-16 h-16 bg-zinc-800 rounded-full text-white text-xl shadow-zinc-700 drop-shadow-md shadow-inner ">
                9
            </button>
            <button onClick={operation} value={"X"} className="flex justify-center w-16 h-16 bg-purple-800 rounded-full shadow-zinc-700 drop-shadow-md shadow-inner items-center">
                    <X size={20} />
            </button>
            <button onClick={inputNumber} value={4} className="w-16 h-16 bg-zinc-800 rounded-full text-white text-xl shadow-zinc-700 drop-shadow-md shadow-inner ">
                4
            </button>
            <button onClick={inputNumber} value={5} className="w-16 h-16 bg-zinc-800 rounded-full text-white text-xl shadow-zinc-700 drop-shadow-md shadow-inner ">
                5
            </button>
            <button onClick={inputNumber} value={6} className="w-16 h-16 bg-zinc-800 rounded-full text-white text-xl shadow-zinc-700 drop-shadow-md shadow-inner ">
                6
            </button>
            <button onClick={operation} value={"-"} className="flex justify-center w-16 h-16 bg-purple-800 rounded-full shadow-zinc-700 drop-shadow-md shadow-inner items-center">
                <Minus size={20} />
            </button>
            <button onClick={inputNumber} value={1} className="w-16 h-16 bg-zinc-800 rounded-full text-white text-xl shadow-zinc-700 drop-shadow-md shadow-inner ">
                1
            </button>
            <button onClick={inputNumber} value={2} className="w-16 h-16 bg-zinc-800 rounded-full text-white text-xl shadow-zinc-700 drop-shadow-md shadow-inner ">
                2
            </button>
            <button onClick={inputNumber} value={3} className="w-16 h-16 bg-zinc-800 rounded-full text-white text-xl shadow-zinc-700 drop-shadow-md shadow-inner ">
                3
            </button>
            <button onClick={operation} value={"+"} className="flex justify-center w-16 h-16 bg-purple-800 rounded-full shadow-zinc-700 drop-shadow-md shadow-inner items-center">
                <Plus size={20} />
            </button>
            <button onClick={invertValue} value={"+-"} className="flex justify-center w-16 h-16 bg-purple-800 rounded-full shadow-zinc-700 drop-shadow-md shadow-inner items-center">
                <PlusMinus size={20} />
            </button>

            <button onClick={inputNumber} value={0} className="w-16 h-16 bg-zinc-800 rounded-full text-white text-xl shadow-zinc-700 drop-shadow-md shadow-inner ">
                0
            </button>
            <button onClick={inputNumber} value={"."} className="w-16 h-16 bg-zinc-800 rounded-full text-white text-xl shadow-zinc-700 drop-shadow-md shadow-inner ">
                .
            </button>
            <button onClick={result} value={"="} className="flex justify-center w-16 h-16 bg-purple-500 rounded-full shadow-zinc-700 drop-shadow-md shadow-inner items-center">
                <Equals/>
            </button>

        </div>
    )
}
