import React from 'react';
import '../App.css';
import Form from 'react-bootstrap/Form';



class KeywordsList extends React.Component {
  checkItemLike(e){
    this.props.setCheckBoxLike(e.target.name, e.target.checked)   
}
  render() {
    return (
      <>
        <Form>
          <Form.Check
            type="checkbox"
            label={this.props.data}
            name={this.props.data}
            onClick= {this.checkItemLike.bind(this)}/>
            </Form>

      </>
    )
  }
}

export default KeywordsList;
