import React from 'react';
import Card from 'react-bootstrap/Card';
import { Accordion } from 'react-bootstrap';
import AllSecTime from './AllTime';
import { Button } from 'react-bootstrap';



class Subsection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        };
    }

    deleteCourseFromCart() {
        this.setState({ display: false })
    }

    addSubsctionToCart() {
        const subsection = this.props.data
        const subsections = {}
        subsections[this.props.name] = subsection;
        const section = { ...this.props.section, subsections }

        const sections = {}
        sections[this.props.secName] = section
        const course = { ...this.props.course, sections }
        this.props.setCart(course)
    }
    render() {
        if (!this.state.display) return <></>
        return (
            <div class="sub">
                <Accordion defaultActiveKey="0">
                    <Card style={{ width: '30rem' }}>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <div>
                                {this.props.name}
                                <div class="float-right">
                                    <Button
                                        variant="outline-secondary"
                                        onClick={() => this.addSubsctionToCart()}
                                    > Add to Cart</Button>
                                </div>
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body><h6>Location:</h6>
                                <div>{this.props.data.location}</div>
                                <br></br>
                                <h6>Time:</h6>
                                <AllSecTime data={this.props.data.time} />
                                {this.props.hideCartButton &&
                                    <p> <Button variant="danger" onClick={() => this.deleteCourseFromCart()}> Delete </Button></p>
                                }
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        )
    }
}


export default Subsection;