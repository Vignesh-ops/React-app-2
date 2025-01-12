import List from "./List";

const Listitem = ({ listdata }) => {
    return (
        <ul >
            {
                listdata.map(item => (
                    <List key={item.id} item={item} />
                ))
            }
        </ul>

    )

}


export default Listitem;