import { Link } from 'react-router-dom';
import Logo from '../Images/logo.png';

const UNavbar = () => {
    return (
        <>
            <div className="heading">
                <ul className='UserMenu'>
                    <li style={{ float: 'left', }}><img src={Logo} width="50px" /></li>
                    <li style={{ float: 'left', }}><a>My Art Gallery</a></li>
                    <li><Link to="/User/Logout">Logout</Link></li>
                    <li><Link to="/User/Profile">Profile</Link></li>
                    <li><Link to="/User/Upload">Upload</Link></li>
                    <li><Link to="/User/UTrending">Trending</Link></li>
                    <li><Link to="/User/UExplore">Explore</Link></li>
                </ul>
            </div>
        </>
    );
}
 
export default UNavbar