import React, { Component } from 'react'
import {
  Col, Container, Row, ListGroup
} from 'react-bootstrap'

class Cats extends Component {
  render() {
    return (
		<div>
          <Row>
            <Col xs={12}>
            <ListGroup>
            {this.props.cats.map((cat, index) =>{
              return (
                <ListGroup.Item key={index}>
                    <div class="card mb-3">
                      <h3 class="card-header">
                        <span className='cat-name'>{cat.name}</span>
                      </h3>
                      <div class="card-body">
                        <h5 class="card-title" className='cat-age'>{cat.age} years old</h5>
                      </div>
                      <img style={{height: 200, width: "100%", display: "block"}} src="https://live.staticflickr.com/68/172629460_f55d8b084d_z.jpg" alt="Card image" />

                        <span className='cat-enjoys'>{cat.enjoys}</span>
                    </div>
                </ListGroup.Item>
    )
  })}
</ListGroup>
</Col>
</Row>
		</div>
    );
  }
}

export default Cats;
