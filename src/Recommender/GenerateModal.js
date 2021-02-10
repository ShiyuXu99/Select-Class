import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button'
import ModalClassArea from "./ModalClassArea"
import { Modal } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';


class GenerateModal extends React.Component {
    constructor() {
        super();
        this.state = {
            open: '',
            setOpen: ''
        };
    }

    setOpen(data) {
        var previouseState = data;
        this.setState({ setOpen: previouseState })
        this.setState({ open: previouseState })
    }


    render() {
        return (
            <div>
                <ButtonToolbar>
                    <Button variant="success" onClick={() => this.setOpen(true)}>Generate Class of Interests</Button>
                    <Modal
                        size="lg"
                        show={this.state.open}
                        onHide={() => this.setOpen(false)}
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg">
                                Large Modal
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                        <ModalClassArea 
                        courses={this.props.courses}             
                        setCart={(courses) => this.props.setCart(courses)}
                        generateClass = {this.props.generateClass}
                        />

                        </Modal.Body>
                    </Modal>
                </ButtonToolbar>
            </div>

        );
    }

}
export default GenerateModal;


