
import { Calculator } from './components/Calculator'
import './styles/global.css'

export function App() {
  return(
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-full max-w-5xl px-6 flex-col gap-8'> 
          <Calculator/>
      </div>
    </div>
  )
  
}


