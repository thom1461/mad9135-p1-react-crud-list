import React from 'react';
import EditItem from './EditItem';
import { NavLink, Route } from 'react-router-dom';

export default function ListItem({itemId, item, edit, editUpdate, remove }) {

    //console.log("Item: ", item);

    return (
        <>
            <li>
                <div>Name: {item.name}
                </div>
                <div>Email: {item.email}
                </div>
                <div>
                    <button className="edit" data-id={item.id} onClick={edit}>
                        <NavLink to={`/editList/${item.id}`}>
                            Edit
                        </NavLink>
                    </button>
                    <button className="delete" data-id={item.id} onClick={remove}>
                        <NavLink to="/list">
                            Delete
                        </NavLink>
                    </button>
                </div>
            </li>
        
        <div className="editItem">
                <Route path="/editItem/:id">
                    <EditItem item={item} edit={edit} editUpdate={editUpdate}/>
                </Route>
        </div>
        
        </>
    );
}