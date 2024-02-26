import { useState } from 'react';
import './App.css'

const numericbutonsclases = 'btn btn-outline-warning w-100';
const operatorbuttonsclases = 'btn btn-outline-primary w-100';
const especialbuttonsclases = 'btn btn-outline-danger w-100';

function App() {

  const [display, setDisplay] = useState({
    value: '0', 
    hasPoint: false,
    operator: '',
    previusValue: '0',
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

  const deleteLastCharacter =() => {

    setDisplay ({
      ...display,
      value: display.value.slice(0, -1),
      hasPoint: (display.value.slice(-1) == '.') ? false : display.hasPoint
    })
    if (display.value.length == 1){
      setDisplay({
        ...display,
        value: '0'
      })
    }
  }



  const setOperator = (operator) => {
setDisplay({
  ...display,
  operator,
  previusValue: display.value,
  value: '0',
  hasPoint: false,
})
  }

  const calculate = () => {
    if (display.operator == ''){
      return
      }

      // let result = 0

      // if (display.operator == '%') {
      //    result = eval (display.previusValue + '/ 100 *' + display.value)
      // } else {
      //    result = eval (display.previusValue + display.operator + display.value)
      // } 

      let result = (display.operator == '%') ? 
      eval (display.previusValue + '/ 100 *' + display.value) :
      eval (display.previusValue + display.operator + display.value)
      
      setDisplay({
        ...display,
        operator: '',
        hasPoint: false,
        previusValue: '0',
        value: result + '',
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
            type='button'
            onClick={deleteLastCharacter}>

              {'<'}
             </button>
            </td>
            <td>
            <button className={operatorbuttonsclases}             
            type='button'
            onClick={() => setOperator('%')}>
              %
             </button>
            </td>
            <td>
            <button className={operatorbuttonsclases}             
            type='button'
            onClick={() => setOperator('/')}>
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
            type='button'
            onClick={() => setOperator('x')}>
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
               type='button'
               onClick={() => setOperator('-')}>
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
            type='button'
            onClick={() => setOperator('+')}>
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
            type='button'
            onClick={calculate}
            >
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
