import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navbarClassName: true,
            expanded: false,
            navbarDivClassName: true
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState((state) => {
            return {
                navbarClassName: !this.state.navbarClassName,
                expanded: !this.state.expanded,
                navbarDivClassName: !this.state.navbarDivClassName
            }
        })
    }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">Cat Tinder</Link>
        <button className={this.state.navbarClassName ? "navbar-toggler collapsed" : "navbar-toggler"} type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded={this.state.expanded ? "false" : "true"} aria-label="Toggle navigation" onClick={this.handleClick}>
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className={this.state.navbarDivClassName ? "navbar-collapse collapse" : "navbar-collapse collapse show"} id="navbarColor01">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="./NewCat">Create Profile</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Like/Dislike</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="./cats">Cats</Link>
                </li>
            </ul>
        </div>
    </nav>
    );
  }
}

export default Header;
