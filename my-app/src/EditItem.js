import React from 'react';
import { NavLink } from "react-router-dom";
import { useState } from 'react';

export default function EditItem({ key, item, save, clear }) {
    const [input, setInput] = useState({
        id: item.id, 
        name: item.name, 
        email: item.email
    });

    function handleChange(ev) {
        const value = ev.target.value;
        console.log("Input Key = Value: ", [ev.target.name], value)
        setInput({
            ...input,
            [ev.target.name]: value
        });
    }

    function handleSave(ev) {
        console.log("Local Save Function")
        console.log("Sending Input Up: ", input)
        save(input)
        clear(ev)
    }

    return (
        <form>
            <li>
                <label>Name:
                <input name="name" value={input.name} data-id={item.id} type="text" onChange={handleChange} />
                </label>
                <label>Email:
                <input name="email" value={input.email} data-id={item.id} type="text" onChange={handleChange} />
                </label>
                <div>
                    <button className="save" onClick={handleSave}>
                        <NavLink to="/list">
                            Save
                        </NavLink>
                    </button>
                    <button className="cancel"onClick={clear}>
                        <NavLink to="/list">
                            Cancel
                        </NavLink>
                    </button>
                </div>
            </li>
        </form>
    );
}