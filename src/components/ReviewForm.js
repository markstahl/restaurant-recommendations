import React from 'react'

const ReviewForm = (props) => (
  <form onSubmit={props.submitHandler}>
    <label htmlFor="name">Name: </label>
    <input type="text" name="name"></input>
    <label htmlFor="rating">Score: </label>
    <input type="number" name="rating"></input>
    <label htmlFor="content">Review: </label>
    <input type="text" name="content"></input>
    <input type="hidden" name="restaurant"></input>
    <input type="submit" value="Submit"/>
  </form>
)


export default ReviewForm;
