import { useState } from "react"
import ButtonPad from "./Components/ButtonPad"
import Display from "./Components/Display"

function App() {
  const [displayValue,setDisplayValue]=useState('');
  return (
    <div className='bg-amber-100 max-w-45 m-auto  my-20 border rounded-sm border-gray-300'>

      <Display displayValue={displayValue}/>
      <ButtonPad displayValue={displayValue} setDisplayValue={setDisplayValue}/>
    </div>      
  )
}

export default App
