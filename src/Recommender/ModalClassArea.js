import React from 'react';
import '../App.css';
import ModalClasses from './ModalClasses';

class ModalClassArea extends React.Component {
 
getRanked(){
   var generateClass = this.props.generateClass;
   var num = [];
   for (let i=0;i<generateClass.length;i++) {
     num.push(generateClass[i].p);
   }
   num.sort(function(a , b){return b - a});

   var rankedClass = [];
   for (let i=0;i<num.length;i++) {
    for (let j=0;j<generateClass.length;j++) {
      if(generateClass[j].p === num[i]){
        let insert = generateClass[j];
        generateClass.splice(j,1);
        rankedClass.push(insert);
      }
    }
   }
   return rankedClass;
}
  getCourses() {
    let ranked = this.getRanked();
    var courses = [];
   
    for (let i=0;i<ranked.length;i++) {
      courses.push(
        <ModalClasses  data={ranked[i].courseInfo} setCart={(courses) => this.props.setCart(courses)} />
      )
    }
    return courses;
  }
  

  render() {
    return (
      <div style={{ margin: '5px' }}>
        {this.getCourses()}
        {this.getRanked()}

      </div>
    )
  }
}

export default ModalClassArea;
