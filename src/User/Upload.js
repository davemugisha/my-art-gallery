import UNavbar from "./UNavbar";

import Image from '../Images/icons8-upload-64.png';

const Upload = () => {

    // const selectImage = document.querySelector('.upload-area');
    // const inputFile = document.querySelector('#file');

    // selectImage.addEventListener('click', function() {
    //     inputFile.click();
    // })

    return (
        <>
        <div className="mainup">
            <UNavbar />

            <form method="POST">
                <div className="whitebox">
                    <div className="upload">
                        <div className="upload-area">
                            <img src={Image} />
                            <h3 style={{ paddingTop: 19, }}>Upload Image</h3>
                            <p style={{ width: '90%', margin: 'auto', padding: 15, }}>Click Here to Upload any Image of your Choice</p>
                        </div>
                        <input type="file" id="file" name="file" accept="image/*" required hidden />
                    </div>
                    <div className="description">
                        <h1 style={{ padding: 20, paddingLeft: 0, }}>Publish Your Work</h1>
                        <label for="title" style={{display: 'block' }}>Title</label>
                        <input type="text" placeholder="Provide a Title" required name="title" id="title" className="inputs" />
                        <br /><br />
                        <label for="title" style={{ display: 'block', }}>Enter Keywords</label>
                        <input type="text" placeholder="Provide Tags related to the Image" required name="title" id="title" className="inputs" />
                        <br />
                        <p style={{ padding: 17, paddingLeft: 0,}}>Keywords:</p>
                        <div className="keyword-box">
                            <div class="keyword">Portrait</div>
                            <div class="keyword">Street</div>
                            <div class="keyword">Portrait</div>
                            <div class="keyword">Street</div>
                            <div class="keyword">Portrait</div>
                            <div class="keyword">Street</div>
                            <div class="keyword">Portrait</div>
                            <div class="keyword">Street</div>
                            <div class="keyword">Portrait</div>
                            <div class="keyword">Street</div>
                            <div class="keyword">Portrait</div>
                            <div class="keyword">Street</div>
                            <div class="keyword">Street</div>
                            <div class="keyword">Portrait</div>
                            <div class="keyword">Street</div>
                            <div class="keyword">Street</div>
                            <div class="keyword">Street</div>
                            <div class="keyword">Portrait</div>
                            <div class="keyword">Street</div>
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