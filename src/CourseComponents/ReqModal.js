import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button'
import { Modal } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import ReqModalCard from './ReqModalCard';


class ReqModal extends React.Component {
    constructor() {
        super();
        this.state = {
            open: '',
            setOpen: '',
        };
    }

    setOpen(data) {
        var previouseState = data;
        this.setState({ setOpen: previouseState })
        this.setState({ open: previouseState })
    }

    getReqBoolean() {
        let req = this.props.require;
        if (req === undefined || req.length === 0)
            return true;
        else
            return false;
    }
 
    getReq(){
        let req = this.props.require;
        let className = [];
        let data = this.props.allCourse;

        for (const course of Object.entries(data)) {
        if (req.length !== 0){
            for(const require of req){
                if(course[0] === require){
                    className.push(<ReqModalCard courses = {course[1]}/>);
                }
            }
        }
    }
        return className;
    }


    render() {
        var req = this.getReqBoolean();
        return (
            <div>
                <ButtonToolbar>
                    {req ? (
                        <Button variant="outline-success" onClick={() => this.setOpen(true)} > check requirement status</Button>
                    ) : (
                            <Button variant="outline-warning" onClick={() => this.setOpen(true)}> check requirement status</Button>
                        )}
                    <Modal
                        size="md"
                        show={this.state.open}
                        onHide={() => this.setOpen(false)}
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg">
                            {req ? (<p>Congratulations!</p>) : (
                            <h3>You still need to take :</h3>)}
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {req ? (<p>You Meet all the requirements!</p>) : (
                            this.getReq())}
                        </Modal.Body>
                    </Modal>
                </ButtonToolbar>
            </div>

        );
    }

}
export default ReqModal;
