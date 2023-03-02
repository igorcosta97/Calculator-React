interface Display{
    result: number;
    calc: string;
}
export function Visor({result,calc}:Display){
    return(
        <div className="bg-bgcalc text-blue-50 mt-9 flex flex-col">
            <div className="flex flex-row mt-4 justify-end px-5 mx-11">
                <span className="text-zinc-500 text-xl">{calc}</span>
                
            </div>
            
            <div className="flex flex-row mt-3 px-5 justify-between mx-11">
                <span className="text-zinc-500 text-xl">=</span>
                <span className="text-3xl font-bold">{result}</span>
            </div>
        </div>
    )
}
