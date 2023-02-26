import React, { useState } from 'react';
import './Form.css'

const CreatePostForm = () => {
  const [image, setImage] = useState(null);
  const [author, setAuthor] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code here to store the new post data in the database
    
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="image">Select an image:</label>
        <input type="file" id="file" placeholder='no file change' onChange={handleImageChange} />
        </div>
        
        <br></br>
      <div>
      <label htmlFor="author">Author:</label>
      <input type="text" id="author" placeholder='Author' value={author} onChange={handleAuthorChange} />
      </div>
        
        <br></br>
      <div>
      <label htmlFor="location">Location:</label>
        <input type="text" id="location" placeholder='Location' value={location} onChange={handleLocationChange} />
      </div>
        
        <br></br>
      <div>
      <label htmlFor="description">Description:</label>
        <textarea id="description" placeholder='Description' value={description} onChange={handleDescriptionChange} />
      </div> 
        <br></br>
      <div>
      <button type="submit">Post</button></div>  
      
    </form>
    </div>
    
  );
};

export default CreatePostForm;
