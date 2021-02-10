import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import { Accordion } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import AllSection from '../CourseComponents/AllSection'

class ModalClasses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    };
  }

  addCourseToCart() {
    this.props.setCart(this.props.data)
  }

  deleteCourseFromCart() {
    this.setState({ display: false })
  }

  render() {
    if (!this.state.display) return <></>
    return (
      <div>
        <div class="card">
          <div className="card-header">
            {this.props.data.number}
          </div>
          <div class="card-body">
            <h5 class="card-title">{this.props.data.name}</h5>
            <p class="card-text">{this.props.data.credits} cr </p>
            <p class="card-text">{this.props.data.subject}</p>
            <p class="card-text">{this.props.data.description}</p>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    See Sections
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <AllSection
                      hideCartButton={this.props.hideCartButton}
                      data={this.props.data}
                      setCart={(courses) => this.props.setCart(courses)}
                    />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <br></br>
            {!this.props.hideCartButton &&
              <div class="float-right">
                <p> <Button variant="outline-secondary" onClick={() => this.addCourseToCart()}> Add to Cart</Button></p>
              </div>
            }
            {this.props.hideCartButton &&
              <p> <Button variant="danger" onClick={() => this.deleteCourseFromCart()}> Delete </Button></p>
            }
          </div>
        </div>
        <br></br>
      </div>
    )
  }



  getCredits() {
    if (this.props.data.credits === 1)
      return '1 credit';
    else
      return this.props.data.credits + ' credits';
  }
}




export default ModalClasses;
