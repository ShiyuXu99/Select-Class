import React from 'react';
import '../App.css';
import TakenCourse from './TakenCourse';

class TakenCourseArea extends React.Component {

  getCourses() {
    let allCourses = [];
    for (const course of (this.props.takenCourse)) {

      allCourses.push(<TakenCourse
        takenCourseData={course[1]}
        setCheckBoxLike={(name, on) => this.props.setCheckBoxLike(name, on)}
        setCheckBoxDislike={(name, on) => this.props.setCheckBoxDislike(name, on)}
      />);
    }

    return allCourses;
  }

  render() {
    return (
      <div style={{
        width: '70vw',
        marginTop: '5px',
        marginLeft:'5px',
        marginRight:'5px',
        height: '93.4%',
        position: 'fixed',
        overflow: 'auto'
      }}>
        <div>{this.getCourses()}</div>
      </div>
    )
  }
}

export default TakenCourseArea;
