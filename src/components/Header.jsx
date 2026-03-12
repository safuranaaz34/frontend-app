import "./Header.css"
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="App-Header">
      <h1>My Store</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Cart">Cart</Link></li>
        <li><Link to="/Orders">Orders</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Logout">Logout</Link></li>
    
      </ul>
    </div>
  );
}
export default Header;