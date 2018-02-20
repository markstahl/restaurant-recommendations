import React, { Component } from 'react'
import ReviewForm from '../components/ReviewForm'

class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurant_id: '',
      name: '',
      rating: 0,
      content: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let formPayload = {
      name: event.target.name.value,
      rating: event.target.rating.value,
      content: event.target.content.value,
      restaurant_id: this.props.selected
    }
    this.setState(formPayload);
    this.props.handler(formPayload);
  }

  render() {
    return(
      <ReviewForm
        submitHandler={this.handleSubmit}
        content={this.state.content}
        rating={this.state.rating}
        name={this.state.name}
      />
    )
  }
}

export default FormContainer;
