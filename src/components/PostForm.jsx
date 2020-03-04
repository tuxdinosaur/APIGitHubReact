import React, { Component } from 'react'

class PostForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      author: '',
      description: '',
      createdAt: new Date(),
      image: ''
    }
  }

  get readTime () {
    return this.state.description.length * 60
  }

  onChange (event) {
    const { id, value } = event.target

    this.setState({ [id]: value })
  }

  onSubmit (event) {
    event.preventDefault()

    if (this.props.onSubmit) {
      this.props.onSubmit({
        ...this.state,
        readTime: this.readTime
      })
    }

    this.setState({
      name: '',
      author: '',
      description: '',
      createdAt: new Date()
    })
  }

  render () {
    return (
      <div className='row post-form'>
        <form
          onSubmit={this.onSubmit.bind(this)}
          className=''
        >
          <h1>Repositorios públicos Kodemia</h1>

        </form>
      </div>
    )
  }
}

export default PostForm
