import { buttonsClasses } from "../assets/buttonsClases"

export const Button = ({
label,
class: buttonClass,
columns,
function: buttonFunction,

}) => {
    return (
        <td colSpan={columns}>
        <button
            className={buttonsClasses[buttonClass]}
            type='button'
            onClick={'clearDisplay'}
        >
            {label}
        </button>
        </td>
    )
}