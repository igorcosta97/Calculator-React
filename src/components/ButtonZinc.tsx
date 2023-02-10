interface ButtonValue{
    valor: string
}

export function ButtonZinc(props: ButtonValue){
    return(
        <button className="w-16 h-16 bg-zinc-800 rounded-full text-white text-xl shadow-zinc-700 drop-shadow-md shadow-inner ">
            {props.valor}
        </button>
        
    )
}