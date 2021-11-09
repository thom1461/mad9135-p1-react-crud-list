import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ListItem({ item, edit, remove, clear }) {

    // function localRemove(ev) {
    //     ev.preventDefault()
    //     console.log("Remove ListItem ID: ", item.id)
    //     remove(item)
    //     clear(ev)
    // }

    return (

        <li>
            <div>Name: {item.name}
            </div>
            <div>Email: {item.email}
            </div>
            <div>
                <button className="edit" key="Edit" value={item.id} data-id={item.id} onClick={edit}>
                    <NavLink to={`/editItem/${item.id}`}>
                        Edit
                    </NavLink>
                </button>
                <button className="delete" key="delete" value={item.id} data-id={item.id} onClick={remove}>
                    <NavLink to="/list">
                        Delete
                    </NavLink>
                </button>
            </div>
        </li>

    );
}