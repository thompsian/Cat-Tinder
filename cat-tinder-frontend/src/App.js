import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootswatch/dist/sketchy/bootstrap.min.css'


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
        cats: [
          {
            id: 1,
            name: 'Morris',
            age: 2,
            enjoys: "Long walks on the beach."
          },
          {
            id: 2,
            name: 'Paws',
            age: 4,
            enjoys: "Snuggling by the fire."
          },
          {
            id: 3,
            name: 'Mr. Meowsalot',
            age: 12,
            enjoys: "Being in charge."
          }
        ]
      }
  }
  render() {
    return (
		<div>
			<Header />
			<Router>
				<Switch>
                  <Route exact path="/cats" render={( props) => <Cats cats={this.state.cats}/> } />

				  <Route exact path="/NewCat" component={NewCat} />
                  <Route exact path="/" component={Home} />
				</Switch>
			</Router>
		</div>
    );
  }
}

export default App;
