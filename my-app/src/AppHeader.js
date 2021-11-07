import { NavLink } from 'react-router-dom';
import './index.css';
import logo from './logo.svg';

export default function AppHeader(){

    return(
        <div className="navbar">
            <img src={logo} alt="react logo"/>
            <h1>React CRUD</h1>
            <div className="newItem">
                <NavLink activeClassName="active" to="/newItem" exact>
                    + New Item
                </NavLink>
            </div>
        </div>
    );
}