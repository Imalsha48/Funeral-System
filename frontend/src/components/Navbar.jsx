import {Link} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

    return(
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/vehiclemanagement">Vehicle Management</Link></li>
                <li><Link to="/drivermanagement">Driver Management</Link></li>
                <li><Link to="/transportassignment">Transport Assignment</Link></li>
            </ul>
        </nav>
    );

};

export default Navbar;