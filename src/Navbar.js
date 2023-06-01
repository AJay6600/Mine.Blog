
import { Link } from "react-router-dom";
const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="logo">               
               <p> mine.<span>BLOG</span></p>
            </div>
            <div className="links">
                <Link to="/"><span>Home</span></Link>
                <Link to="/create"><span>New Blog</span></Link>
            </div>
        </nav>
      );
}
 
export default Navbar;