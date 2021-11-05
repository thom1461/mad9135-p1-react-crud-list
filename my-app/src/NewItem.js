import { NavLink } from "react-router-dom";
import { useState } from 'react';

export default function NewItem({data, updateData}){
    const [input, setInput] = useState({
        id: "", 
        name: "", 
        email: ""
    });
    input.id = Date.now();

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
        updateData(input);
    }

    return(
        <form>
            <label>Name:
                <input value={input.name} name="name" type="text" onChange={handleChange}/>
            </label>
            <label>Email:
                <input value={input.email} name="email" type="text" onChange={handleChange}/>
            </label>
            <div>
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