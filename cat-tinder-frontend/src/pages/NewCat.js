import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class NewCat extends Component {
    constructor(props){
      super(props)

      this.state = {
          success: false,
          form: {
              name:"",
              age:"Choose...",
              enjoys:""
          }
      }
    }

    handleChange = (event) => {
        let {form} = this.state
        form[event.target.name] = event.target.value
        this.setState({form: form})
    }

    handleClick = () => {
        const { form } = this.state
        this.props.handleNewCat(form)
        .then( () => {
            this.setState({
                success: true,
                form: {
                    name:"",
                    age:"Choose...",
                    enjoys:""                }
            })
        })
    }

  render() {
    return (
		<div className="new-profile-form">
			<h2>Create a new Cat profile</h2>
      <br />
      <label id="name">Name</label>
      <Form.Control
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.state.form.name}
          className = {this.state.form.name.length>0 ? "form-control is-valid" : "form-control"}
      />
      <br />
      <label id="age">Age</label>
      <Form.Control
        as="select"
        name="age"
        placeholder="how old am I?"
        onChange={this.handleChange}
        value={this.state.form.age}
        className = {this.state.form.age === "Choose..." ? "form-control" : "form-control is-valid"}>
        <option>Choose...</option>
        <option>0-1 year old</option>
        <option>1 years old</option>
        <option>2 years old</option>
        <option>3 years old</option>
        <option>4 years old</option>
        <option>5 years old</option>
        <option>5+ years old</option>
        <option>Prefer not to tell 🤫</option>
      </Form.Control>
      <br />
      <label for="exampleTextarea" id="enjoys">Enjoys</label>
      <Form.Control
          as="textarea"
          name="enjoys"
          className="form-control"
          id="exampleTextarea"
          rows="3"
          spellcheck="true"
          placeholder="What do you enjoy doing? Give us at least 10 words please... Meow 🐱"
          onChange={this.handleChange}
          value={this.state.form.enjoys}
          className = {this.state.form.enjoys.length>10 ? "form-control is-valid" : "form-control"}
      />
      <br />
      <button
      type="button"
      className= {this.state.form.name.length===0 || this.state.form.age === "Choose..." ||  this.state.form.enjoys.length<10 ? "btn btn-primary" : "btn btn-success"}
      id="submit"
      onClick={this.handleClick}>Create Cat Profile</button>
      {this.state.success &&
          <Redirect to="/cats" />
      }
		</div>
    );
  }
}

export default NewCat;
