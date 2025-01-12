

const List = ({ item }) => {
    return (
            <li>
                {item ? JSON.stringify(item) : 'No data found'}
            </li>

    )

}


export default List;