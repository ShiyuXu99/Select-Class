import React from 'react';
import Time from './SubTime'
import '../App.css';

class AllSecTime extends React.Component {
    getAllTime() {
      let times = [];
      for (const time of Object.entries(this.props.data)) {
        times.push(
          <Time key={time[0]} name={time[0]} weektime={time[1]} />
        )
      }
      return times;
    }
    render() {
      return (
        <div>{this.getAllTime()}</div>
      )
    }
  }

  export default AllSecTime;