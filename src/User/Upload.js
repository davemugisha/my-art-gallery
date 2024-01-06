import React, { useState, useRef } from 'react';
import axios from 'axios';
import UNavbar from './UNavbar';

import Image from '../Images/icons8-upload-64.png';

const Uploadimage = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [keywords, setKeywords] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [serverMessage, setServerMessage] = useState('');

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // Display image preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    } else {
      setImagePreview(null);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleKeywordsChange = (e) => {
    setKeywords(e.target.value);
  };

  const handleUploadAreaClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('user_id', userId);
    formData.append('keywords', keywords.split(','));

    try {
      const response = await axios.post('https://myartgallery.onrender.com/images/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setServerMessage(response.data.message); // Assuming the server sends a message in the response

      
      setServerMessage(`Image Successfully Published!`);
      // Handle success (e.g., show a success message to the user)
      console.log(response.data);
    } catch (error) {
      setServerMessage(`Error uploading image: ${error.message}`);
      // Handle error (e.g., show an error message to the user)
      console.error('Error uploading image:', error.message);
    }
  };

  const userId = sessionStorage.getItem('userId');

  return (
    <div className='mainup'>
        <UNavbar />
        <form onSubmit={handleSubmit}>
            <div className="whitebox">
                <div className="upload">
                    <div>
                        {!imagePreview ? (
                            <div className="upload-area" onClick={handleUploadAreaClick}>
                                <img src={Image} />
                                <h3 style={{ paddingTop: 19 }}>Upload Image</h3>
                                <p style={{ width: '90%', margin: 'auto', padding: 15 }}> Click Here to Upload any Image of your Choice </p>
                            </div>
                        ) : null}
                        <input type="file" id="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} /> {imagePreview && (<img src={imagePreview} alt="Preview" style={{ maxWidth: '100%', }} />)}
                    </div>
                </div>
                <div className='description'>
                    <h1 style={{ padding: 20, paddingLeft: 0 }}>Publish Your Work</h1>
                    <label htmlFor="title" style={{ display: 'block' }}>Title</label>
                    <input type="text" placeholder="Provide a Title" required name="title" id="title" className="inputs" onChange={handleTitleChange} />
                    <br /><br />
                    <label htmlFor="title" style={{ display: 'block' }}>Enter Keywords (comma-separated):</label>
                    <input type="text" placeholder="Provide Tags related to the Image" required name="title" id="title" className="inputs" value={keywords} onChange={handleKeywordsChange} />
                    <br />
                    <p style={{ padding: 17, paddingLeft: 0 }}>Keywords:</p>
                    <div className="keyword-box">
                        <div className="keyword">Portrait</div>
                        <div className="keyword">Street</div>
                        <div className="keyword">Portrait</div>
                        <div className="keyword">Street</div>
                    </div>
                    {serverMessage && <p style={{ color: serverMessage.includes('Error') ? 'red' : 'green' }}>{serverMessage}</p>}
                    <br />
                    <input type="submit" value="Publish" className="edits" />
                </div>
            </div>
        </form>
    </div>
  );
};

export default Uploadimage;
