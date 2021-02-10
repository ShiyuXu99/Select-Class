import React from 'react';
import '../App.css';
  
  class Time extends React.Component {
    render() {
      return (
          <div>
             {this.props.name} :  {this.props.weektime}
          </div>
      )
    }
  }

  export default Time;