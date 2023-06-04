import React from 'react'
import './PostCard.scss'

export default function PostCard( {posts} ) {
  return ( 
  <div className='postsCard'>
    <div className='personalInfo'>
      <p className='name'>{posts.userName}</p>
      <p className='timeStamp'>{posts.timeStamp}</p>
    </div>
    <p className='status'>{posts.status}</p>
  </div>
    );
}
