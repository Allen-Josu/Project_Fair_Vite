import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import upload_image from "../assets/image-upload-concept-illustration_114360-996-removebg-preview.png"

function AddProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div>
        <button className="btn btn-success" onClick={handleShow}>Add Project</button>
      </div>
      <Modal size="lg" centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="img">
                <input type="file"  id='img' style={{display:"none"}}/>
                <img src={upload_image} width="100%" alt="image-upload" />
              </label>
            </div>
            <div className="col-md-6">
              <div className="w-100 d-flex flex-column">
                <input type="text" placeholder='Project Title' className='form-control my-2' />
                <input type="text" placeholder='Languague' className='form-control my-2' />
                <input type="text" placeholder='Github Link' className='form-control my-2' />
                <input type="text" placeholder='Website Link' className='form-control my-2' />
                <textarea  cols="30" rows="4" placeholder='Overview' className='form-control my-2' />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddProject