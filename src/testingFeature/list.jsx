import { useEffect, useState } from "react"


const List = ({getItems}) => {
    const [listItems, setListItems] = useState([]);
    useEffect(() => {
        console.log("fetching items.....");
        setListItems(getItems());
    },[getItems])
    return (
        <div>
            {listItems?.map((item, index)=> (
                <p key={'item'+index}>{item}</p>
            ))}
        </div>
    )
};

export default List;