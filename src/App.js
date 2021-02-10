import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import SidebarArea from './Recommender/SidebarArea'
import CourseArea from './CourseComponents/CourseArea';
import TakenCourseArea from './Recommender/TakenCourseArea';
import Cart from './Cart';
import { Tab } from 'react-bootstrap';
import { Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCourses: {},
      filteredCourses: {},
      subjects: [],
      cartCourse: [],
      takenCourse: [],
      keywords: [],
      Like: [],
      Dislike: [],
      generateClass: []
    };
  }


  componentDidMount() {

    Promise.all([fetch('https://mysqlcs639.cs.wisc.edu/classes'),
    fetch('https://mysqlcs639.cs.wisc.edu/students/5022025924/classes/completed')])

      .then(([res1, res2]) => {
        return Promise.all([res1.json(), res2.json()])
      })
      .then(([data, takenData]) => {
        this.setState({
          allCourses: data,
          filteredCourses: data,
          subjects: this.getSubjects(data),
          keywords: this.getKeywords(data),
          takenCourse: this.takenCourses(takenData, data),
        })
      });
  }


  //get all the taken course's information
  takenCourses(takenData, data) {
    let insert = [];
    for (const course of Object.entries(data)) {
      for (const takenCourse of Object.entries(takenData)) {
        var allTakenCourses = takenCourse[1];
        for (const taken of allTakenCourses) {
          if (course[0] === taken)
            insert.push(course);
        }
      }
    }
    return insert;
  }

  //get all the subjects of classes
  getSubjects(data) {
    let subjects = [];
    subjects.push("All");
    for (const course of Object.values(data)) {
      if (subjects.indexOf(course.subject) === -1)
        subjects.push(course.subject);
    }
    return subjects;
  }

  //get all the keywords of classes
  getKeywords(data) {
    let keyword = [];
    for (const course of Object.values(data)) {
      for (const key of course.keywords) {
        if (keyword.indexOf(key) === -1 && key !== course.subject.toLowerCase())
          keyword.push(key);
      }
    }
    return keyword;
  }


  setCart(courses) {
    let newCartCourse = this.state.cartCourse;
    newCartCourse.push(courses);
    this.setState({ cartCourse: newCartCourse });
  }


  setCourses(courses) {
    this.setState({ filteredCourses: courses })
  }



  setCheckBoxLike(name, on) {
    let checkBoxTemp = this.state.Like;
    if (on) {
      if (checkBoxTemp.length === 0) {
        checkBoxTemp.push(name);
      }
      else {
        for (const subject of checkBoxTemp) {
          if (subject !== name) {
            checkBoxTemp.push(name);
            break;
          }
        }
      }
    }
    else {
      for (var i = 0; i < checkBoxTemp.length; i++) {
        if (checkBoxTemp[i] === name)
          checkBoxTemp.splice(i, 1);
      }
    }

    this.setState({ Like: checkBoxTemp });
    this.generateClass(this.state.allCourses);
  }

  //Get classes that are disliked
  setCheckBoxDislike(name, on) {
    let checkBoxTemp = this.state.Dislike;
    if (on) {
      if (checkBoxTemp.length === 0) {
        checkBoxTemp.push(name);
      }
      else {
        for (const subject of checkBoxTemp) {
          if (subject !== name) {
            checkBoxTemp.push(name);
            break;
          }
        }
      }
    }
    else {
      for (var i = 0; i < checkBoxTemp.length; i++) {
        if (checkBoxTemp[i] === name)
          checkBoxTemp.splice(i, 1);
      }
    }
    this.setState({ Dislike: checkBoxTemp });
    this.generateClass(this.state.allCourses);
  }


  generateClass(allCourses) {
    var rankCourse = [];
    var points = 5;
    let Like = this.state.Like;
    let Dislike = this.state.Dislike;


    for (const course of Object.values(allCourses)) {
      rankCourse.push({ p: points, courseInfo: course });
    }

    for (let i=0;i<rankCourse.length;i++) {
      for (const likeCourse of Like) {
          if (rankCourse[i].courseInfo.subject === likeCourse) {
            let newp = rankCourse[i].p + 3;
            rankCourse.splice(i,1,{p:newp,courseInfo:rankCourse[i].courseInfo})
        }
        for (const key of rankCourse[i].courseInfo.keywords) {
          if (key === likeCourse) {
            let newp = rankCourse[i].p + 2;
            rankCourse.splice(i,1,{p:newp,courseInfo:rankCourse[i].courseInfo})
        }
        }
      }
    }

    for (let i=0;i<rankCourse.length;i++) {

      for (const dislike of Dislike) {
        if (rankCourse[i].courseInfo.subject === dislike) {
          let newp = rankCourse[i].p - 5;
          rankCourse.splice(i,1,{p:newp,courseInfo:rankCourse[i].courseInfo})
      }
    }
  }
    console.log(rankCourse);
    this.setState({generateClass:rankCourse});
  }

  render() {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />

        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Home">
            <Sidebar setCourses={(courses) => this.setCourses(courses)} courses={this.state.allCourses} subjects={this.state.subjects} />
            <div style={{ marginLeft: '20vw' }}>
              <CourseArea data={this.state.filteredCourses} setCart={(courses) => this.setCart(courses)} />
            </div>
          </Tab>

          <Tab eventKey="Cart" title="Cart">
            <Cart data={this.state.cartCourse} />
          </Tab>

          <Tab eventKey="RecommendedCourse" title="Recommended Course">
            <SidebarArea
              courses={this.state.allCourses}
              keywords={this.state.keywords}
              generateClass = {this.state.generateClass}
              setCheckBoxLike={(name, on) => this.setCheckBoxLike(name, on)}
              setCart={(courses) => this.setCart(courses)}
            />

            <div>


              <TakenCourseArea
                takenCourse={this.state.takenCourse}
                courses={this.state.allCourses}
                setCheckBoxLike={(name, on) => this.setCheckBoxLike(name, on)}
                setCheckBoxDislike={(name, on) => this.setCheckBoxDislike(name, on)} />
            </div>
          </Tab>


        </Tabs>
      </>
    )
  }
}

export default App;
