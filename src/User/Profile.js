import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Style.css';
import Logo from '../Images/logo.png';

import pp from '../Images/pexels-ike-louie-natividad-6121165.jpg';
import Art1 from '../Images/pexels-ike-louie-natividad-6121165.jpg';
import Art2 from '../Images/pexels-aleksandr-slobodianyk-989917.jpg';
import Art3 from '../Images/pexels-eliška-krejčová-14539605.jpg';
import Art4 from '../Images/pexels-jnm-thapa-6851831.jpg';

const Profile = () => {
    const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from the server for the logged-in user
    const fetchImages = async () => {
        try {
            const userId = sessionStorage.getItem('userId');
    
            // Check if userId is defined
            if (!userId) {
                console.error('User ID is not defined.');
                return;
            }
    
            const response = await axios.get(`https://myartgallery.onrender.com/images/user/${userId}`);
            setImages(response.data);
        } catch (error) {
            console.error('Error fetching images:', error.message);
        }
    };

    fetchImages();
  }, []);

    const userId = sessionStorage.getItem('userId');
    const username = sessionStorage.getItem('username');
    const email = sessionStorage.getItem('email');
    const name = sessionStorage.getItem('name');
    const imageList = sessionStorage.getItem('images');

    return (
        <>
            <div className="heading">
                <ul className='UserMenu2'>
                    <li style={{ float: 'left', }}><img src={Logo} width="50px" /></li>
                    <li style={{ float: 'left', }}><a>My Art Gallery</a></li>
                    <li><Link to="/Login">Logout</Link></li>
                    <li><Link to="/User/Profile">Profile</Link></li>
                    <li><Link to="/User/Upload">Upload</Link></li>
                    <li><Link to="/User/UTrending">Trending</Link></li>
                    <li><Link to="/User/UExplore">Explore</Link></li>
                </ul>
            </div>
            <div className="profile-rectangle">
                <div className="profilebox">
                    <form method="POST">
                        <div className="pp">
                            <img src={pp} />
                        </div>
                        <h1 style={{ textAlign: 'center', }}>{name}</h1>
                        <h3 style={{ textAlign: 'center', }}>@{username}</h3>    
                        <p style={{ textAlign: 'center', padding: 15, }}>{email}</p>  
                        <p style={{ textAlign: 'center', paddingBottom: 15, }}>{userId} Page Link Goes Here Page Link Goes Here</p>
                        <div style={{ margin: 'auto', width: '30%', }}>
                            <Link to=""><button className="edit">Edit Profile</button></Link>   
                        </div>
                    </form>
                </div>
            </div>
            <hr width="80%" color="#e6e6e6" />
            <h3 style={{ textAlign: 'center', padding: 10, }}>All Posts</h3>
            <hr width="80%" color="#e6e6e6" />
            <div className="images">

                {/* <h1 style={{ color: 'white', textAlign: 'center',}}>Image Gallery</h1> */}
                {images.map((image) => (
                    <div key={image.imageId} className="image-card">
                    <img src={image.url} alt={image.imageTitle} style={{ width: '20px', }}/>
                    <p>Title: {image.imageTitle}</p>
                    <p>User ID: {image.user.userId}</p>
                    <p>Keywords: {image.keywordList.map((keyword) => keyword.keywordName).join(', ')}</p>
                    </div>
                ))}

                <div className="column" style={{ float: 'left', }}>
                    <div className="row">
                        <img src={Art1} />
                        <img src={Art2} />
                        <img src={Art3} />
                        <img src={Art4} />
                    </div>
                </div>
                <div className="column" style={{ float: 'left', }}>
                    <div className="row">
                        <img src={Art4} />
                        <img src={Art1} />
                        <img src={Art2} />
                        <img src={Art3} />
                    </div>
                </div>
                <div className="column" style={{ float: 'left', margin: '0', }}>
                    <div className="row">
                        <img src={Art2} />
                        <img src={Art3} />
                        <img src={Art4} />
                        <img src={Art1} />
                    </div> 
                </div>
            </div>
        </>
    );
}
 
export default Profile;