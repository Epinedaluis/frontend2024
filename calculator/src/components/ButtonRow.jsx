import { Button } from './Button'

export const ButtonsRow = ({row}) => {
    return (
        <tr>
            {
               row.map((button) => {
                    return (
                        <Button
                            key={button.label}
                            {...button}
                        />
                    )
                })
            }
        </tr>

    )
}