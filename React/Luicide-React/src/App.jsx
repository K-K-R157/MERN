import {Camera,Trash2,Icon} from 'lucide-react'
import {burger,baseball } from '@lucide/lab'


function App() {

  return (
    <>
      <Camera color='red' size={50} strokeWidth={1}/>
      <Trash2 color='green' size={60} strokeWidth={2}/>
      <Icon iconNode={burger} color='orange' size={60} strokeWidth={2}/>
      <Icon iconNode={baseball} color='brown' size={60} strokeWidth={2}/>

    </>
  )
}

export default App
