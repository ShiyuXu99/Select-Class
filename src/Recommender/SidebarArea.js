import React from 'react';
import '../App.css';
import SubjectsList from './SubjectsList'
import KeywordsList from './KeywordsList'

import Card from 'react-bootstrap/Card';
import GenerateModal from './GenerateModal'

class SidebarArea extends React.Component {

  //get all the subjects 
  getSubjects(data) {
    let subjects = [];
    for (const course of Object.values(data)) {
      if (subjects.indexOf(course.subject) === -1)
        subjects.push(course.subject);
    }
    return subjects;
  }

  //pass the subjects to sidebar
  getCourses() {
    let courses = [];
    let Subjects = this.getSubjects(this.props.courses);
    for (const course of Subjects) {
      courses.push(
        <SubjectsList
          data={course}
          setCheckBoxLike={(name, on) => this.props.setCheckBoxLike(name, on)}
        />
      )
    }
    return courses;
  }

  getKeywords() {
    let keywords = [];
    let keyword = (this.props.keywords);
    for (const course of keyword) {
      keywords.push(
        <KeywordsList
          data={course}
          setCheckBoxLike={(name, on) => this.props.setCheckBoxLike(name, on)}
        />
      )
    }
    return keywords;
  }



  render() {
    return (

      <div >
        <Card style={{
           width: '30vw',
           marginTop: '5px',
           marginLeft: '70vw',
           position: 'fixed',
           height: "93.4%",
           overflow: 'auto'
        }}>
          <Card.Body>
            <Card.Title>Click on the subject of Interests:</Card.Title>
            <div class = "keywordSidebar">
            {this.getCourses()}
            </div>
            <br></br>
            <Card.Title>Click on the keywords of Interests:</Card.Title>
            <div class = "keywordSidebar">
            {this.getKeywords()}
            </div>
            

            <br></br>
            <GenerateModal
              courses={this.props.courses}
              setCart={(courses) => this.props.setCart(courses)}
              generateClass = {this.props.generateClass}
              />
          </Card.Body>
        </Card>
      </div>
    )
  }
}


export default SidebarArea;


