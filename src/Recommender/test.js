import React from 'react';
import '../App.css';

class Test extends React.Component {
      getResult(){
        let allCourses = [];
        for (const course of Object.values(this.props.checkBox)) {
            console.log(course);
      }
      return allCourses;
    }

  render() {
    return (
      <div>
          {this.getResult()}
      </div>
    )
  }
}

export default Test;
