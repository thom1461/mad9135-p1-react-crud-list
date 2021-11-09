import { NavLink } from "react-router-dom";
import { useState } from 'react';

export default function NewItem({data, newData}){
    const [input, setInput] = useState({
        id: "", 
        name: "", 
        email: ""
    });
    input.id = Date.now().toString();

    function handleChange(ev){
        const value = ev.target.value;
        setInput({
            ...input,
            [ev.target.name]: value
        });
    }

    function handleSave(ev){
        const value = ev.target.value;
        ev.preventDefault();
        setInput({
            ...input,
            [ev.target.name]: value
        });
        newData(input);
    }

    return(
        <form className="newItemF">
            <label>Name:
                <input value={input.name} name="name" type="text" onChange={handleChange}/>
            </label>
            <label>Email:
                <input value={input.email} name="email" type="text" onChange={handleChange}/>
            </label>
            <div className="newItemB">
                <button className="save" onClick={handleSave}>
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
        </form>
    );
}