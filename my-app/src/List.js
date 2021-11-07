//import { Route, NavLink  } from 'react-router-dom';
import ListItem from './ListItem';
import EditItem from './EditItem';
import { useState } from 'react';

export default function List({data, updateData, editUpdate}){

    const [contactId, setContactId] = useState('');
    console.log("Data: ", data);

    function editClick(ev) {
        ev.preventDefault();
        console.log('Clicked Edit');
        setContactId(ev.target.getAttribute('data-id'));
        console.log("id: ", setContactId)
    }
    function saveClick(ev) {
        ev.preventDefault();
        console.log('clicked save');
        let obj = {
            id: ev.target.getAttribute('data-id'),
            title: ev.target.value,
        };
        updateData(obj);
    }

    function clearEdit(ev) {
        ev.preventDefault();
        setContactId('');
    }

    const items = data.map((item) => {

        if (item.id === contactId) {
            return (
                <EditItem
                    key={item.id}
                    item={item}
                    editUpdate={editUpdate}
                    clearEdit={clearEdit}
                    save={saveClick}
                />
            );
        } else {
            return <ListItem key={item.id} item={item} edit={editClick} editUpdate={editUpdate} />;
        }
    });

    return <ul className="mylist">{items}</ul>;
}