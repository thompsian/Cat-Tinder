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
                  <h4>
                    <span className='cat-name'>{cat.name}</span> - <small className='cat-age'>{cat.age} years old</small>
                  </h4>
                    <span className='cat-enjoys'>{cat.enjoys}</span>
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
