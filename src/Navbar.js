import { Link } from 'react-router-dom';
import Logo from './Images/logo.png'

const Navbar = () => {
    return (
        <div className="heading">
            <ul>
                <li style={{ float: 'left' }}><img src={Logo} width="50px" alt="Logo" /></li>
                <li style={{ float: 'left' }}><a href="#">My Art Gallery</a></li>
                <li><Link to="/Signup">Join</Link></li>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/Trending">Trending</Link></li>
                <li><Link to="/">Explore</Link></li>
            </ul>
        </div>
    );
}
 
export default Navbar;