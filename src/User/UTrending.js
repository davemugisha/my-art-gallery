import UNavbar from "./UNavbar";

import Art1 from '../Images/pexels-ike-louie-natividad-6121165.jpg';
import Art2 from '../Images/pexels-aleksandr-slobodianyk-989917.jpg';
import Art3 from '../Images/pexels-eliška-krejčová-14539605.jpg';
import Art4 from '../Images/pexels-jnm-thapa-6851831.jpg';
import Art5 from '../Images/pexels-jnm-thapa-6851831.jpg';
import Art6 from '../Images/pexels-ike-louie-natividad-6121165.jpg';
import Art7 from '../Images/pexels-aleksandr-slobodianyk-989917.jpg';
import Art8 from '../Images/pexels-eliška-krejčová-14539605.jpg';
import Art9 from '../Images/pexels-aleksandr-slobodianyk-989917.jpg';
import Art10 from '../Images/pexels-eliška-krejčová-14539605.jpg';
import Art11 from '../Images/pexels-jnm-thapa-6851831.jpg';
import Art12 from '../Images/pexels-ike-louie-natividad-6121165.jpg';

const UTrending = () => {
    return (
        <>
            <div className="main">
                <UNavbar />

                <div className="search">
                    <p style={{ fontFamily: 'poppins', fontSize: '100px', margin: '0px', paddingTop: '130px', color: '#fff' }}>
                    Trending Artworks
                    </p>
                    <br /><br />
                    <input type="text" name="search" placeholder="Enter a username" style={{ height: '40px', width: '500px', border: '0px solid', paddingLeft: '15px', borderRadius: '5px', fontSize: '17px', fontWeight: '550', marginRight: '5px',}}/>
                    <button type="submit" className="searchbtn">Search</button>
                </div>
            </div>
  
            <div className="images">
                <div className="column" style={{ float: 'left' }}>
                    <div className="row">
                        <img src={Art1} alt="Art 1" />
                        <img src={Art2} alt="Art 2" />
                        <img src={Art3} alt="Art 3" />
                        <img src={Art4} alt="Art 4" />
                    </div>
                </div>
                <div className="column" style={{ float: 'left' }}>
                    <div className="row">
                        <img src={Art5} alt="Art 5" />
                        <img src={Art6} alt="Art 6" />
                        <img src={Art7} alt="Art 7" />
                        <img src={Art8} alt="Art 8" />
                    </div>
                </div>
                <div className="column" style={{ float: 'left', margin: '0' }}>
                    <div className="row">
                        <img src={Art9} alt="Art 9" />
                        <img src={Art10} alt="Art 10" />
                        <img src={Art11} alt="Art 11" />
                        <img src={Art12} alt="Art 12" />
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default UTrending;