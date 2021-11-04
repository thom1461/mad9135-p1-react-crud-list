import { NavLink } from 'react-router-dom';
import './index.css';

export default function AppHeader(){

    return(
        <div className="navbar">
            <h1>React CRUD</h1>
            <div className="newItem">
                <NavLink activeClassName="active" to="/newItem" exact>
                    + New Item
                </NavLink>
            </div>
        </div>
    );
}