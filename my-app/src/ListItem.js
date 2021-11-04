import React from 'react';
import EditItem from './EditItem';
import { NavLink, Route } from 'react-router-dom';

export default function ListItem({ item, edit, remove }) {
    return (
        <>
        <li>
            {item.name}
            {item.email}
            <div>
                <button className="edit" data-id={item.id} onClick={edit}>
                    {/* <NavLink to={`/userList/${id}`}> */}
                        Edit
                    {/* </NavLink> */}
                </button>
                <button className="delete" data-id={item.id} onClick={remove}>
                    Delete
                </button>
            </div> 
        </li>
        
        <div className="editItem">
                <Route path="/editItem/:id">
                    <EditItem />
                </Route>
        </div>
        
        </>
    );
}