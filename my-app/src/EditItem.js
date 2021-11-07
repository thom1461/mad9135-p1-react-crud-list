import { NavLink } from "react-router-dom";
import { useState, React } from 'react';

export default function EditItem({ item, updateData, editUpdate }) {
    const [input, setInput] = useState({
        id: item.id, 
        name: item.name, 
        email: item.email
    });
    console.log("Item ID: ", item.id);
    console.log("Input ID: ", input.id);

    function handleChange(ev){
        const value = ev.target.value;
        setInput({
            ...input,
            [ev.target.name]: value
        });
        console.log("editUpdate")
        editUpdate(input)
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

    return (
        <form>
            <li>
                <label>Name:
                <input data-id={input.id} value={input.name} type="text" onChange={handleChange} />
                </label>
                <label>Email:
                <input data-id={input.id} value={input.email} type="text" onChange={handleChange} />
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
            </li>
        </form>
    );
}