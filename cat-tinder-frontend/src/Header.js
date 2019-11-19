import React, { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navbarClassName: false,
            expanded: false,
            navbarDivClassName: false
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
        <a className="navbar-brand" href="/">Cat Tinder</a>
        <button className={this.state.navbarClassName ? "navbar-toggler collapsed" : "navbar-toggler"} type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded={this.state.expanded ? "false" : "true"} aria-label="Toggle navigation" onClick={this.handleClick}>
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className={this.state.navbarDivClassName ? "navbar-collapse collapse" : "navbar-collapse collapse show"} id="navbarColor01">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./NewCat">Create Profile</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Like/Dislike</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./cats">Cats</a>
                </li>
            </ul>
        </div>
    </nav>
    );
  }
}

export default Header;
