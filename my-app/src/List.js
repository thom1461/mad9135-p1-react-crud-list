import ListItem from './ListItem';
import EditItem from './EditItem';
import { useState } from 'react';

export default function List({data, updateData, rmData}){
    const [contactId, setContactId] = useState('');
    console.log("Data: ", data);

    function editClick(ev) {
        ev.preventDefault();
        console.log('Clicked Edit')
        console.log("Event Info: ", ev.target.parentNode.getAttribute('data-id'))
        setContactId(ev.target.parentNode.getAttribute('data-id'));
    }

    function clearEdit(ev) {
        ev.preventDefault();
        setContactId('');
    }
    
    function processData(data) {
        if (data.length === 0) {
            return ""
        } else {
            let returnData = data.map((item) => {
                if (item.id === contactId) {
                    return (
                        <EditItem key={item.id} item={item} save={updateData} clear={clearEdit} />
                    )
                } else {
                    return (
                        <ListItem key={item.id} item={item} edit={editClick} remove={rmData} clear={clearEdit} />
                    )
                }
            })
            console.log("Return Data: ", returnData)
            return returnData
        }
    }

    const items = processData(data)
    console.log("List Items: ", items)

    return <ul className="mylist">{items}</ul>;
}