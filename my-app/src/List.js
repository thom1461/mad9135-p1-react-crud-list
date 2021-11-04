import { Route, NavLink  } from 'react-router-dom';
import ListItem from './ListItem';
import EditItem from './EditItem';
import { useState } from 'react';

export default function List({data, updateData}){

    const [contactId, setContactId] = useState('');
    console.log("Data: ", data);
    //console.log("Update Data: ", updateData);

    function editClick(ev) {
        ev.preventDefault();
        console.log('clicked edit');
        setContactId(ev.target.getAttribute('data-id'));
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

    const Items = data.map((item) => {
        if (item.id === contactId) {
            return (
                <EditItem
                    key={item.id}
                    item={item}
                    clearEdit={clearEdit}
                    save={saveClick}
                />
            );
        } else {
            return <ListItem key={item.id} item={item} edit={editClick} />;
        }
    });

    return <ul className="mylist">{Items}</ul>;
}