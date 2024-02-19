import './App.css'

const numericbutonsclases = 'btn btn-outline-warning w-100';
const operatorbuttonsclases = 'btn btn-outline-primary w-100';
const especialbuttonsclases = 'btn btn-outline-danger w-100';

function App() {

  return (
    <div>
      <h1>Calculator</h1>
      <hr />
      <table className='center'>
        <tbody>

          <tr>
            <td className='text-end' colSpan={4}>
              <h2>0</h2>
            </td>
            
          </tr>
          <tr>
            <td>
            <button className={especialbuttonsclases}             type='button'>
              C
             </button>
            </td>
            <td>
            <button className={especialbuttonsclases}             type='button'>
              {'<'}
             </button>
            </td>
            <td>
            <button className={operatorbuttonsclases}             type='button'>
              %
             </button>
            </td>
            <td>
            <button className={operatorbuttonsclases}             type='button'>
              /
             </button>
            </td>
          </tr>
          <tr>
            <td>
            <button className={numericbutonsclases}
             type='button'>
              7
             </button>
            </td>
            <td>
            <button className={numericbutonsclases}
             type='button'>
              8
             </button>
            </td>
            <td>
            <button className={numericbutonsclases}
             type='button'>
              9
             </button>
            </td>
            <td>
            <button className={operatorbuttonsclases}             type='button'>
              x
             </button>
            </td>
          </tr>
          <tr>
            <td>
            <button className={numericbutonsclases}
             type='button'>
              4
             </button>
            </td>
            <td>
            <button className={numericbutonsclases}
             type='button'>
              5
             </button>
            </td>
            <td>
            <button className={numericbutonsclases}
             type='button'>
              6
             </button>
            </td>
            <td>
            <button className={operatorbuttonsclases}             type='button'>
              -
             </button>
            </td>
          </tr>
          <tr>
            <td>
            <button className={numericbutonsclases}             type='button'>
              1
             </button>
            </td>
            <td>
            <button className={numericbutonsclases}             type='button'>
              2
             </button>
            </td>
            <td>
            <button className={numericbutonsclases}             type='button'>
              3
             </button>
            </td>
            <td>
            <button className={operatorbuttonsclases}             type='button'>
              +
             </button>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
            <button className={numericbutonsclases}             type='button'>
              0
             </button>
            </td>

            <td>
            <button className={numericbutonsclases}             type='button'>
              .
             </button>
            </td>
            <td>
            <button className={especialbuttonsclases}             type='button'>
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
