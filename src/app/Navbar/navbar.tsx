import Link from "next/link";
import {
  FaHome,
  FaSearch,
  FaTicketAlt,
  FaStar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
function Navbar(props: any) {
  return (
    <div className="navbar">
      <h1>
        <span className="black-text">Mima</span>
        <span className="red-text">Booking</span>
      </h1>

      <nav>
        <li className="list-items">
          <Link href="/Dashboard">
            <FaHome className="icon" />
            Dashboard
          </Link>
          <Link href="/ExploreCity">
            <FaSearch className="icon" />
            Explore City
          </Link>
          <Link href="/Ticket">
            <FaTicketAlt className="icon" />
            Ticket
          </Link>
          <Link href="/Favorite">
            <FaStar className="icon" />
            Favourites
          </Link>
          <Link href="/Settings">
            <FaCog className="icon" />
            Setting
          </Link>
          <div className="logout">
            <Link href="/logout">
              <FaSignOutAlt className="icon" />
              Logout
            </Link>
          </div>
        </li>
      </nav>

      {props.children}
    </div>
  );
}

export default Navbar;
