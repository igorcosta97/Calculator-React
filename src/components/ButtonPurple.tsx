import Icon from "phosphor-react"

interface ButtonValue{
    valor: Icon.IconProps
}

export function ButtonPurple(props: ButtonValue){
    return(
        <button className="w-16 h-16 bg-purple-800 rounded-full shadow-zinc-700 drop-shadow-md shadow-inner items-center">
            <div className="flex justify-center">
                <>{props.valor}</>
            </div>
        </button>
        
    )
}