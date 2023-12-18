import UNavbar from "./UNavbar";
import { useEffect, useState } from "react";
import axios from 'axios';

import Image from '../Images/icons8-upload-64.png';

const Upload = () => {

    const [selectedImage, setSelectedImage] = useState(null);
    const [title, setTitle] = useState('');
    const [keywords, setKeywords] = useState('');

    useEffect(() => {
        const selectImage = document.querySelector('.upload-area');
        const inputFile = document.querySelector('#file');

        const handleClick = () => {
            inputFile.click();
        };

        selectImage.addEventListener('click', handleClick);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            selectImage.removeEventListener('click', handleClick);
        };
    }, []); // Empty dependency array ensures this runs only on mount and unmount

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setSelectedImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            setSelectedImage(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const checks = {
            selectedImage,
            title,
            userId,
            keywords,
          };
    
        console.log('Values to be sent to the backend:', checks);

        const formData = new FormData();
        formData.append('file', selectedImage);
        formData.append('title', title);
        formData.append('user_id', userId);
        formData.append('keywords', keywords.split(',')); // assuming keywords are comma-separated

        try {
            const response = await axios.post('https://myartgallery.onrender.com/images/upload', formData);
            console.log('Response:', response.data);
            // Handle response accordingly
        } catch (error) {
            console.error('Error:', error);
            console.log('Error Details:', error.response.data);
            alert('An error occurred while uploading the image.');
        }
        

        // try {
        //     const response = await axios.post('http://localhost:8080/images/upload', formData);

        //     if (response.status === 200) {
        //         alert('Image uploaded successfully!');
        //         // ... handle successful upload ...
        //     } else {
        //         alert('Failed to upload image.');
        //     }
        // } catch (error) {
        //     console.error('Error:', error);
        //     console.log('Error Details:', error.response);
        //     alert('An error occurred while uploading the image.');
        // }
    };

    const userId = sessionStorage.getItem('userId');
    const username = sessionStorage.getItem('username');
    const email = sessionStorage.getItem('email');
    const name = sessionStorage.getItem('name');

    return (
        <>
        <div className="mainup">
            <UNavbar />

            <form onSubmit={handleSubmit}>
                <div className="whitebox">
                    <div className="upload">
                        {selectedImage ? <img src={selectedImage} alt="Selected" className="uploaded" /> : <img src={Image} hidden />}
                    
                        <div className="upload-area">
                            <img src={Image} />
                            <h3 style={{ paddingTop: 19, }}>Upload Image</h3>
                            <p style={{ width: '90%', margin: 'auto', padding: 15, }}>Click Here to Upload any Image of your Choice</p>
                        </div>
                        <input type="file" id="file" name="file" accept="image/*" required hidden onChange={handleImageChange} />
                    </div>
                    <div className="description">
                        <h1 style={{ padding: 20, paddingLeft: 0, }}>Publish Your Work</h1>
                        <label htmlFor="title" style={{display: 'block' }}>Title</label>
                        <input type="text" placeholder="Provide a Title" required name="title" id="title" className="inputs" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <br /><br />
                        <label htmlFor="title" style={{ display: 'block', }}>Enter Keywords</label>
                        <input type="text" placeholder="Provide Tags related to the Image" required name="title" id="title" className="inputs" value={keywords} onChange={(e) => setKeywords(e.target.value)} />
                        <br />
                        <p style={{ padding: 17, paddingLeft: 0,}}>Keywords:</p>
                        <div className="keyword-box">
                            <div className="keyword">Portrait</div>
                            <div className="keyword">Street</div>
                            <div className="keyword">Portrait</div>
                            <div className="keyword">Street</div>
                            <div className="keyword">Portrait</div>
                            <div className="keyword">Street</div>
                            <div className="keyword">Portrait</div>
                            <div className="keyword">Street</div>
                            <div className="keyword">Portrait</div>
                            <div className="keyword">Street</div>
                            <div className="keyword">Portrait</div>
                            <div className="keyword">Street</div>
                            <div className="keyword">Street</div>
                            <div className="keyword">Portrait</div>
                            <div className="keyword">Street</div>
                            <div className="keyword">Street</div>
                            <div className="keyword">Street</div>
                            <div className="keyword">Portrait</div>
                            <div className="keyword">Street</div>
                        </div>
                        <br />
                        <input type="submit" value="Publish" className="edits" />
                    </div>
                </div>
            </form> 
        </div>
        </>
    );
}
 
export default Upload;