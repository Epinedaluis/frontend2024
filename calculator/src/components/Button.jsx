import { buttonsClasses } from "../assets/buttonsClases"

export const Button = ({
label,
class: buttonClass,
columns,
function: buttonFunction,
buttonsFunctions

}) => {
    return (
        <td colSpan={columns}>
        <button
            className={buttonsClasses[buttonClass]}
            type='button'
            onClick={() => buttonsFunctions[buttonFunction](label) }
        >
            {label}
        </button>
        </td>
    )
}

Button.propTypes = {
    label: 'string',
    class: 'string',
    columns: 'number',
    function: 'string',
    buttonsFunctions: 'object'
}