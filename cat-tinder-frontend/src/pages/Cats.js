import React, { Component } from 'react'
import {
  Col, Container, Row, ListGroup
} from 'react-bootstrap'
import '../App.css'


class Cats extends Component {
  render() {
    return (
      <div className = "cat-cards-container">
        {this.props.cats.map((cat, index) =>{
          return (
            <div className = "cat-card">
                <div className="card mb-3">
                  <h3 className="card-header">
                    {cat.name}
                  </h3>
                  <div className="card-body">
                    <h5 className="card-title" className='cat-age'>{cat.age} years old</h5>
                  </div>
                  <img style={{height: "auto", width: "100%", display: "block"}} src="https://live.staticflickr.com/68/172629460_f55d8b084d_z.jpg" alt="Card image" />
                  <div className="card-body">
                  <p className="card-text" className='cat-enjoys'>{cat.enjoys}</p>
                  </div>
                  <div className="card-body">
                     <a href="#" class="card-link">Save</a>
                     <a href="#" class="card-link">Delete</a>
                   </div>
                   <div className="card-footer text-muted">
                     {`Joined at ${cat.created_at}`}
                   </div>
                </div>
                </div>
              )
            }
          )
        }
		</div>
    );
  }
}

export default Cats;
