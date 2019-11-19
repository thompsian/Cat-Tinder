import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class NewCat extends Component {
    constructor(props){
      super(props)
      this.state = {
        form:{
          name: '',
          age: '',
          enjoys: ''
        }
      }
    }

    handleChange = (event) => {
        let {form} = this.state
        form[event.target.name] = event.target.value
        this.setState({form: form})
    }
  render() {
    return (
		<div>
			<h2>Create a new Cat profile</h2>
            <label id="name">Name</label>
            <Form.Control
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.form.name}
            />
            <label id="age">Age</label>
            <Form.Control
                type="text"
                name="age"
                onChange={this.handleChange}
                value={this.state.form.age}
            />
            <label id="enjoys">Enjoys</label>
            <Form.Control
                type="text"
                name="enjoys"
                onChange={this.handleChange}
                value={this.state.form.enjoys}
            />
            <button type="button" className="btn btn-primary" id="submit">Create Cat Profile</button>
		</div>
    );
  }
}

export default NewCat;
