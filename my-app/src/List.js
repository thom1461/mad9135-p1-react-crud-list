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
        console.log("Data Type1: ", typeof(data))
        if (data.length === 0) {
            return ""
        } else {
            console.log("Data Type2: ", typeof(data))
            data.map((item) => {
                console.log("Loop Items: contactID: ", contactId);
                if (item.id === contactId) {
                    return (
                        <EditItem key={item.id} item={item} save={updateData} clear={clearEdit}/>
                    )
                } else {
                    return (
                        <ListItem key={item.id} item={item} edit={editClick} remove={rmData} clear={clearEdit}/>
                    )
                }
            })
        }
    }

    const items = processData(data)
    console.log("List Items: ", items)

    return <ul className="mylist">{items}</ul>;
}