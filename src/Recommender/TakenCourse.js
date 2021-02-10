import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import Test from './test'

class TakenCourse extends React.Component {
    constructor() {
        super();
        this.state = {
          checkBoxLike: [],
          checkBoxDislike:[],
        };
      }

    checkItemLike(e){
        this.props.setCheckBoxLike(e.target.name, e.target.checked)   
    }
    checkItemDisLike(e){
        this.props.setCheckBoxDislike(e.target.name, e.target.checked)          
    }
    render() {
        return (
            <div>
                <Card>
                    <Card.Header>
                        {this.props.takenCourseData.number}
                        </Card.Header>
                        <Card.Body>
                        <Card.Title>{this.props.takenCourseData.name}</Card.Title>
                        <Card.Text>
                            {this.props.takenCourseData.description}
                        </Card.Text>
                        <Form>
                            <Form.Check 
                            type="checkbox" 
                            label="Like" 
                            name = {this.props.takenCourseData.subject}
                            onClick= {this.checkItemLike.bind(this)}/>

                            <Form.Check 
                            type="checkbox" 
                            label="Dislike" 
                            name = {this.props.takenCourseData.subject}
                            onChange= {this.checkItemDisLike.bind(this)}
                            />
                        </Form>
                    </Card.Body>
                </Card>
                <Test checkBox = {this.state.checkBoxLike}/>
            </div>
        )
    }

}


export default TakenCourse;
