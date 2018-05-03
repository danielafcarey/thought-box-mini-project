import React, { Component } from 'react';

class CreateThought extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }
  }

  handleChange = (event) => {
    const { target } = event;
    this.setState({ [target.name]: target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createThought(this.state);
    this.setState({ title: '', body: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }> 
          <input className='titleInput'
            value={ this.state.title }
            name='title'
            placeholder='Title'
            type='text'
            onChange={ this.handleChange }
          />
          <input className='bodyInput'
            value={ this.state.body }
            name='body'
            placeholder='Body'
            type='text'
            onChange={ this.handleChange }
          />
          <button>Submit</button>
        </form>  
      </div>
    );
  }
}

export default CreateThought;
