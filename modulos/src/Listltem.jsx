const Listitem = ({url,name}) => {
    return (
        <li>
            <a href={url}>{name}</a>
        </li>
    )
}

export default Listitem