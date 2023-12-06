import { image } from '@tensorflow/tfjs';
import path from 'path';
import React, { useState } from 'react';

const CustomTileForm: React.FC = () => {
  const [formData, setFormData] = useState({
    image:'',
    imageExt:'',
    sound:'',
    text: '',
    tileColor: '',
    email: '', 
  });

  // Define the url for the backend
  const url = process.env.NEXT_PUBLIC_PROG_MODE === 'PROD' ? process.env.NEXT_PUBLIC_BACKEND_URL_PROD : process.env.NEXT_PUBLIC_BACKEND_URL_DEV;
  
  // changes input data as a file or text
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

// activate the submit button
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  }

//collects the input data as list to use later
  const postData = new FormData();
  postData.append('image', formData.image);
  postData.append('imageExt', formData.imageExt);
  postData.append('sound', formData.sound);
  postData.append('text', formData.text);
  postData.append('tileColor', formData.tileColor);
  postData.append('email', formData.email);

 // extract the image filename for the extension
 const extension= path.extname(formData.image); 
 formData.imageExt = extension;


// make api call
fetch(url + '/custom-tile', {
    method: 'POST',
    body: postData,
  })
    .then((response) => response.json())
    .then((response) => {
      // Handle the response data
      console.log("response", response);
    })
    .catch((error) => {
      // Handle any errors
      console.log("error", error);
    });


  return (
    <div>
    <div className='text-xl font-bold text-center justify-center'> 
      <h1 >Customize Tiles:</h1>
      <br/>
      <br/>
    </div>
    <form onSubmit={handleSubmit}>
      <label>
        <div className='text-m font-bold'>
        Upload Image File:&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <input className='border-black rounded-md shadow-lg' type="file" name="image" value={formData.image} onChange={handleInputChange} />
      </label>
      <br/>
      <br/>
      <label>
        <div className='text-m font-bold'>
        Enter Tile Text Sound Associate:&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <input className='border-black rounded-md shadow-lg' type="sound" name="sound" value={formData.sound} onChange={handleInputChange} />
      </label>
      <br/>
      <br/>
      <label>
      <div className='text-m font-bold'>
        Enter Tile Name:&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <input className='border-black rounded-md shadow-lg' type="text" name="text" value={formData.text} onChange={handleInputChange} />
      </label>  
      <br/>
      <br/>
      <label>
      <div className='text-m font-bold'>
        Enter Tile Color (red, orange, yellow, green, blue, & purple):&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <input className=' border-black rounded-md shadow-lg' type="text" name="tileColor" value={formData.tileColor} onChange={handleInputChange} />
      </label>
      <br/>
      <br/>
      <label>
      <div className='text-m font-bold'>
        Enter Email: &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <input className='border-black rounded-md shadow-lg' type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </label>
      <br/>
      <br/>
      <br/>
      <div className='bg-purple-200 flex font-bold text-center justify-center border-black rounded-md hover shadow-lg'>
        <button  type="submit" name="button" value="submit">Submit</button>
      </div>

      
    </form>
    </div>
  );
};

export default CustomTileForm;