import { useState } from "react"


function App() {

// hooks

const [contador, setContador] = useState(0)
  const handleButtonIncrementar = () => {
    setContador(contador + 1)
  }
    return (
 <div>
  <hr />
  <h1>Contador</h1>
  <h2>{contador}</h2>
  <button 
  onClick={handleButtonIncrementar}
  >
    Incrementar
    </button>


    <button 
  onClick={() => setContador(contador - 1)}
  >
    Decrementar
    </button>

    <button 
  onClick={() => setContador(contador * 0)}
  >
    Reset
    </button>
 </div>

  )
}

export default App
