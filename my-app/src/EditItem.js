import React from 'react';
import { NavLink } from "react-router-dom";

export default function EditItem({ item, save, saveClick }) {
    return (
        <li>
            <input data-id={item.id} value={item.name} type="text" onChange={save} />
            {/* <input data-id={item.id} value={item.email} type="text" onChange={save} /> */}
            <div>
            <button className="save" onClick={saveClick}>
                    <NavLink to="/list">
                        Save
                    </NavLink>
                </button>
                <button className="cancel">
                    <NavLink to="/list">
                        Cancel
                    </NavLink>
                </button>
            </div>
        </li>
    );
}