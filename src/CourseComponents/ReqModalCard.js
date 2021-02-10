import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';

class ReqModalCard extends React.Component {

    render() {
        return (
            <div>
                <Card>
                <Card.Header>
                  {this.props.courses.name}
                </Card.Header>
                  <Card.Body>
                  <h5 class="card-title">{this.props.courses.name}</h5>
                <p class="card-text">{this.props.courses.credits} cr </p>
                <p class="card-text">{this.props.courses.subject}</p>
                  </Card.Body>
              </Card>
            </div>
        );
    }

}
export default ReqModalCard;
