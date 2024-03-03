import RandomColor from './components/randomColorGenerator'
import ColorDisplay from './components/colorDisplayComp'
import { useState } from 'react'

function App() {

  const [colorFunction, setColorFunction] = useState();
  
  console.log("colorFunction",colorFunction)
  return (
    <div style={{height: "1021px", backgroundColor:`${colorFunction}` }}>
      <RandomColor setColorFunction={setColorFunction} />
      <ColorDisplay colorFunction={colorFunction} />
    </div>
  )
}

export default App
