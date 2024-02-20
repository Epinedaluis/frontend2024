import { useState } from 'react';
import './App.css'

const numericbutonsclases = 'btn btn-outline-warning w-100';
const operatorbuttonsclases = 'btn btn-outline-primary w-100';
const especialbuttonsclases = 'btn btn-outline-danger w-100';

function App() {

  const [display, setDisplay] = useState({
    value: '0', 
    hasPoint: false,
  })

  const updateDisplay = (value) => {
    if (value === '.'){
      if(display.hasPoint){
        return
    }
    setDisplay({
      ...display,
      value: display.value + value,
      hasPoint: true,
    })
    return
  }
    if(display.value === '0'){
      setDisplay({
        ...display,
        value: value,
      })
      return
    }
setDisplay({
  ...display,
  value: display.value + value,
})
  }

  const clearDisplay = () => { 
    setDisplay({
      ...display,
      value: '0',
      hasPoint: false,
    })
    
  }

  return (
    <div>
      <h1>Calculator</h1>
      <hr />
      <table className='center'>
        <tbody>

          <tr>
            <td className='text-end' colSpan={4}>
              <h2>{display.value}</h2>
            </td>
            
          </tr>
          <tr>
            <td>
            <button className={especialbuttonsclases}             
            type='button'
            onClick={clearDisplay}>
              C
             </button>
            </td>
            <td>
            <button className={especialbuttonsclases}             
            type='button'>
              {'<'}
             </button>
            </td>
            <td>
            <button className={operatorbuttonsclases}             
            type='button'>
              %
             </button>
            </td>
            <td>
            <button className={operatorbuttonsclases}             
            type='button'>
              /
             </button>
            </td>
          </tr>
          <tr>
            <td>
            <button className={numericbutonsclases}
             type='button'
             onClick={() => updateDisplay('7')}>
              7
             </button>
            </td>
            <td>
            <button className={numericbutonsclases}
             type='button'
             onClick={() => updateDisplay('8')}>
              8
             </button>
            </td>
            <td>
            <button className={numericbutonsclases}
             type='button'
             onClick={() => updateDisplay('9')}>
              9
             </button>
            </td>
            <td>
            <button className={operatorbuttonsclases}             
            type='button'>
              x
             </button>
            </td>
          </tr>
          <tr>
            <td>
            <button className={numericbutonsclases}
             type='button'
             onClick={() => updateDisplay('4')}>
              4
             </button>
            </td>
            <td>
            <button className={numericbutonsclases}
             type='button'
             onClick={() => updateDisplay('5')}>
              5
             </button>
            </td>
            <td>
            <button className={numericbutonsclases}
             type='button'
             onClick={() => updateDisplay('6')}>
              6
             </button>
            </td>
            <td>
            <button className={operatorbuttonsclases}          
               type='button'>
              -
             </button>
            </td>
          </tr>
          <tr>
            <td>
            <button className={numericbutonsclases}            
             type='button'
             onClick={() => updateDisplay('1')}>
              1
             </button>
            </td>
            <td>
            <button className={numericbutonsclases}           
              type='button'
              onClick={() => updateDisplay('2')}>
              2
             </button>
            </td>
            <td>
            <button className={numericbutonsclases} 
            type='button'
            onClick={() => updateDisplay('3')}>
              3
             </button>
            </td>
            <td>
            <button className={operatorbuttonsclases}    
            type='button'>
              +
             </button>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
            <button className={numericbutonsclases}     
             type='button'
             onClick={() => updateDisplay('0')}>
              0
             </button>
            </td>

            <td>
            <button className={numericbutonsclases}            
             type='button'
             onClick={() => updateDisplay('.')}>
              .
             </button>
            </td>
            <td>
            <button className={especialbuttonsclases}             
            type='button'>
              =
             </button>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default App
