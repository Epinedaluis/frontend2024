const ListItem = ( {nombre,telefono,email}) => {
    return (
        <li>
            {nombre}:
            <ul>
                <li>Telefono: {telefono}</li>
                <li>Email: {email}</li>
            </ul>
            </li>
)}

export default ListItem