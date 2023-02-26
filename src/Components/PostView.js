import React, { useEffect, useState } from 'react'
import './PostView.css'
import logo from '../Images/logo.PNG'
import likeButton from '../Images/likeButton.png'
import camera_icon from '../Images/camera_icon.jpg'
import shareButton from '../Images/shareButton.png'
import three_dot from '../Images/three_dot.png'
import { Link } from 'react-router-dom';
//import Form from '../Components/Form'

const Postview = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
      fetch("http://localhost:3004/user")
          .then(res => res.json())
          .then((res) => {
              // console.log(res);
              setPosts(res)
          }).catch((e) => console.log("error message-->", e));
  }, [])



  return (

      <div className="site-container">
          <header>
              <img src={logo} className="logo" alt='Cannot load logo' />
              <Link to="Form" className='camera-icon-link'><img className='camera-icon' src={camera_icon} alt='camera icon not found'/></Link>
          </header>
          <div className='blank'></div>

          <ul className='Posts'>
              {posts.map((post, index) => {
                  return (
                      <li className='post-block' key={index}>
                          <div className='post-header'>
                              <div className='person-info'>
                                  <p className='person-name'>{post.name}</p>
                                  <p className='person-location'>{post.location}</p>
                              </div>
                              <a href="https://www.google.com" className='more-options'><img className='threedot' src={three_dot} alt='more not found' /></a>
                          </div>
                          <div className='postImage'>
                              <img className="image" src={post.PostImage} alt="post ima" />
                          </div>
                          <div className='postBody'>
                              <div className='buttons'>
                                  <img src={likeButton} alt="like button" className='like-button' />
                                  <img src={shareButton} alt="share button" className='share-button' />
                                  <span className='date'>{post.date}</span>
                              </div>
                              <div className='likes'>{post.likes} likes</div> <br />
                              <div className='description'>{post.description}</div>
                          </div>
                      </li>
                  )
              })}
          </ul>
          
      </div>
  );
}
export default Postview;
