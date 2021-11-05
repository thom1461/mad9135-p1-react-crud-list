import { NavLink } from "react-router-dom";
import { useState } from 'react';

export default function NewItem({data, updateData}){
    const [input, setInput] = useState('');
    let newContact = {id: "", name: "", email: "newEmail"};
    let newId = Date.now();

    function saveChange(ev){
        ev.preventDefault();
        setInput(ev.target.value);
        newContact.id = newId;
        newContact.name = input;
        console.log("New Update: ", newContact);
    }

    function update(ev){
        ev.preventDefault();
        setInput(ev.target.value);
        newContact.id = newId;
        newContact.name = input;
        console.log("New Update: ", newContact);
        updateData(newContact);
    }

    return(
        <div>
            <input value={input} type="text" onInput={saveChange}/>
            {/* <input data-id={item.id} value={item.email} type="text" onChange={save} /> */}
            <div>
                <button className="save" onClick={update}>
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
        </div>
    );
}