import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faChartLine  } from '@fortawesome/free-solid-svg-icons';
import { faListUl  } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    

    return (
        <div className="navbar">
            <ul className="nav-link-list">
                <li className="nav-link-item">
                    <NavLink exact to="/">
                        <FontAwesomeIcon icon={faHouse} />
                        <span className="link-text">Home</span>
                    </NavLink>
                </li>
                <li className="nav-link-item">
                    <NavLink exact to="/cards">
                        <FontAwesomeIcon icon={faCreditCard} />
                        <span className="link-text">Cards</span>
                    </NavLink>
                </li>
                <li className="nav-link-item">
                    <NavLink exact to="/history">
                        <FontAwesomeIcon icon={faListUl} />
                        <span className="link-text">History</span>
                    </NavLink>
                </li>
                <li className="nav-link-item">
                    <NavLink exact to="/investments">
                        <FontAwesomeIcon icon={faChartLine} />
                        <span className="link-text">Investments</span>
                    </NavLink>
                </li>
                <li className="nav-link-item">
                    <NavLink exact to="/more">
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                        <span className="link-text">More</span>
                    </NavLink>
                </li>
            </ul>
        </div>
      );
}
 
export default Navbar;