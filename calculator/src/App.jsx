import { useState } from 'react'
import { buttons } from './assets/buttons'
import { ButtonsRow } from './components/ButtonRow'
import './App.css'



function App() {
  const [display, setDisplay] = useState({
    value: '0',
    hasPoint: false,
    operator: '',
    previousValue: '0',

  })

  const deleteLastCharacter = () => {
    setDisplay({
      ...display,
      value: display.value.slice(0, -1),
      hasPoint: (display.value.slice(-1) === '.') ? false : display.hasPoint
    })
    if (display.value.length === 1) {
      setDisplay({
        ...display,
        value: '0',
      })
    }
  }



  const updateDisplay = (value) => {
    2

    if (value === '.') {
      if (display.hasPoint) {
        return
      }
      setDisplay({
        ...display,
        value: limit(display.value + value),
        hasPoint: true,
      })
      return
    }
    if (display.value === '0') {
      setDisplay({
        ...display,
        value: value,
      })
      return
    }
    setDisplay({
      ...display,
      value: limit(display.value + value),
    })
  }

  const clearDisplay = () => {
    setDisplay({
      ...display,
      value: '0',
      hasPoint: false,
    })
  }

  const setOperator = (operator) => {
    setDisplay({
      ...display,
      operator,
      previousValue: display.value,
      value: '0',
      haspoint: false,

    })
  }

  const calculate = () => {
    if (display.operator === '') {
      return
    }

    /*let result = 0

    if(display.operator === '%'){
      result = eval(display.previousValue + ' / 100 *' + display.value)
    } else{
      result = eval(display.previousValue + display.operator + display.value)
    }*/

    let result = (display.operator === '%') ?
      eval(display.previousValue + ' / 100 *' + display.value) :
      display.operator === 'x' ?
      eval(display.previousValue + ' *' + display.value) : 
      eval(display.previousValue + display.operator + display.value)

    result = result + ""

    setDisplay({
      ...display,
      operator: '',
      haspoint: result.includes("."),
      previousValue: '0',
      value: limit(result + ''),
    })

  }

  const limit = (string = '', length = 10) => {
    string = string + ''
    return string.slice(0, length)
  }

const buttonsFunctions={
  updateDisplay,
  clearDisplay,
  deleteLastCharacter,
  setOperator,
  calculate,
}

return(
  <div>
    <h1>Calculator</h1>
    <hr />
    <table className='center'>
      <tbody>
        <tr>
          <td className='text-end' colSpan={4}>
            <h2>{display.value}</h2>
          </td>
        </tr>{
          buttons.map((row, index) => {
            return(
              <ButtonsRow 
              key={index}
              row={row}
              buttonsFunctions={buttonsFunctions}
              />
            )
          })
          }
      </tbody>
    </table>
  </div>
 )
}

export default App
