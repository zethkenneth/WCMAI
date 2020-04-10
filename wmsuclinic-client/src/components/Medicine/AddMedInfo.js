import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

const AddMedicine = (props) => {
  const {
    buttonColor,
    buttonLabel,
    className,
    modalTitle
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <React.Fragment>
        <Button color={buttonColor} onClick={toggle}>{buttonLabel}</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>{modalTitle}</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="mname">Medicine Name</Label>
                        <Input type="text" name="mname" id="mname" placeholder="Medicine Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="mdosage">Dosage</Label>
                        <Input type="text" name="mdosage" id="mdosage" placeholder="Dosage" />
                    </FormGroup>
                    {/* <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Password" />
                    </FormGroup> */}
                    <FormGroup>
                        <Label for="exampleSelect">Category</Label>
                        <Input defaultValue="1" type="select" name="select" id="exampleSelect">
                        <option value="1" disabled>Choose...</option>
                        <option value={"PUTVALUEHERE"}>PUTVALUEHERE</option>
                        <option value={"PUTVALUEHERE"}>PUTVALUEHERE</option>
                        <option value={"PUTVALUEHERE"}>PUTVALUEHERE</option>
                        </Input>
                    </FormGroup>
                    <Button>Save</Button>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </Form>
            </ModalBody>
        </Modal>
    </React.Fragment>
  );
}

export default AddMedicine;