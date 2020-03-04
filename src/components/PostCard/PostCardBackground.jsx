import React from 'react'

function PostCardBackground (props) {
  return (
    <img
      className='bd-placeholder-img card-img-top'
      src={props.avatar}
      alt={props.alt}
    />
  )
}

export default PostCardBackground
