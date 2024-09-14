import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <NavLink 
                    to="/" 
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    About
                </NavLink>
                <NavLink 
                    to="/portfolio" 
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    Portfolio
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
