import React from 'react';
import Card from 'react-bootstrap/Card';
import AllSub from './AllSubSection';
import { Button } from 'react-bootstrap';

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    };
  }

  addSectionToCart() {
    let sections = {}
    sections[this.props.secName] = this.props.sectionData;
    this.props.setCart({ ...this.props.course, sections })
  }

  deleteCourseFromCart() {
    this.setState({ display: false })
  }

  render() {
    if (!this.state.display) return <></>
    return (

      <div>
        <Card>
          <Card.Header>
            <div class="float-left"><h5>{this.props.secName}</h5></div>
            {!this.props.hideCartButton &&
              <div class="float-right">
                <Button variant="outline-secondary" onClick={() => this.addSectionToCart()}> Add to Cart</Button>
              </div>
            }
          </Card.Header>
          <Card.Body>
            <h6>Instructor: </h6>
            <div>{this.props.sectionData.instructor}</div>
            <p></p>
            <h6>Location: </h6>
            <div>{this.props.sectionData.location}</div>
            <br></br>
            <AllSub
              hideCartButton={this.props.hideCartButton}
              secName={this.props.secName}
              course={this.props.course}
              section={this.props.sectionData}
              subSectionData={this.props.sectionData.subsections}
              setCart={this.props.setCart}
            />
            {this.props.hideCartButton &&
              <p> <Button variant="danger" onClick={() => this.deleteCourseFromCart()}> Delete </Button></p>
            }
          </Card.Body>
        </Card>
        <br></br>
      </div>
    )
  }
}

export default Section;