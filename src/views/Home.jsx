import React, { Component } from 'react'

import AppLoading from '../components/AppLoading'
import PostList from '../components/PostList'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: [],
      loading: true
    }
  }

  componentDidMount () {
    setInterval(async () => {
      this.setState({
        loading: true
      })

      const response = await window.fetch('https://api.github.com/users/kodemia/repos')

      const posts = await response.json()
      //console.log(posts)

      //const posts = payload.map((badPost) => ({
        //name: badPost.name,
        //createdAt: badPost.private,
        //avatar: badPost.owner.avatar_url
      //}))

      this.setState({
        posts,
        loading: false
      })
    }, 300)
  }

  render () {

    return <PostList list={this.state.posts} />
  }
}

export default Home
