import React, { Component } from 'react'

import PostForm from '../components/PostForm'

class Post extends Component {
  async onSubmit (post) {
    const token = window.sessionStorage.getItem('authorization')

    const response = await window.fetch('https://api.github.com/users/kodemia/repos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: token
      },
      body: JSON.stringify({
        name: post.name,
        createdAt: post.private,
        id: post.id
      })
    })

    const payload = await response.json()

    window.alert(payload.data.posts._id)
  }

  render () {
    return (
      <PostForm
        onSubmit={this.onSubmit.bind(this)}
      />
    )
  }
}

export default Post
