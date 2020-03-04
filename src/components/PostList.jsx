import React from 'react'

import PostCard from '../components/PostCard'
import PostCardBackground from './PostCard/PostCardBackground'

function PostList (props) {
  return (
    <div className='row'>
      {
        props.list.map((post, index) => (
          <div
            key={post.id || `post-${index}`}
            className='col-12 col-md-6 col-lg-4'
          >
            <PostCard
              name={post.name}
              createdAt={post.private}
              avatar={post.owner ? post.owner.avatar_url : ''}
              id={post.id}
            >
            </PostCard>
          </div>
        ))
      }
    </div>
  )
}

export default PostList
