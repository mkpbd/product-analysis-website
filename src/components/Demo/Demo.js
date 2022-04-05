import React,{useState} from 'react';
import { Modal, Button } from 'react-bootstrap';
import ReactPlayer from 'react-player'
import './Demo.css'
const Demo = () => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button className='w-50 bg-secondary'  onClick={handleShow}>
            View Demo
        </Button>
  
        <Modal show={show} onHide={handleClose} >
          <Modal.Header closeButton>
            <Modal.Title>Drone Demo</Modal.Title>
          </Modal.Header>
          <Modal.Body >
          <ReactPlayer url='https://youtu.be/gQV1rEdo2Bk' style={{width:'400px'}} />

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
           
          </Modal.Footer>
        </Modal>
      </>
    );





    
};

export default Demo;