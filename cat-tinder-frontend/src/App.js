import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootswatch/dist/sketchy/bootstrap.min.css'
import { getCats , createCat } from './api'


// import "/Users/learn/Desktop/Cat-Tinder/cat-tinder-frontend/public/bootstrap.min.css"
// import "bootstrap"

import Cats from "./pages/Cats"
import NewCat from "./pages/NewCat"
import Header from "./Header"
import Home from "./Home"

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        cats: []
    }
  }

  // resetForm = () => {
  //     this.setState({form: {name: '', age: '', enjoys: ''}})
  // }

  handleNewCat = (newCatInfo) => {
	return createCat(newCatInfo)
    .then(successCat => {
        console.log("SUCCESS! New cat: ", successCat);
    }).then( e => {
        this.loadCats()
    })


}

  componentDidMount() {
      this.loadCats()
  }

  loadCats = () => {
      getCats()
    	.then(APIcats => {
    	  this.setState({
    		cats: APIcats
    	  })
      })
  }
  render() {
    return (
		<div>

			<Router>
              <Header />
				<Switch>
                  <Route exact path="/cats" render={( props) => <Cats cats={this.state.cats}/> } />

				  <Route exact path="/NewCat" render={( props) => <NewCat handleNewCat={this.handleNewCat}
                  /> } />
                  <Route exact path="/" component={Home} />
				</Switch>
			</Router>
		</div>
    );
  }
}

export default App;
