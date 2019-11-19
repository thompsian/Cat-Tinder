import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class NewCat extends Component {
  render() {
    return (
		<div>
			<h2>NewCat</h2>
            <label id="name">Name</label>
            <input type="text"></input>
		</div>
    );
  }
}

export default NewCat;
