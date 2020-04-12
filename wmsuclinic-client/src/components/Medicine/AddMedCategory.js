import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

const AddMedCategory = (props) => {
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
                        <Label for="cname">Category Name</Label>
                        <Input type="text" name="cname" id="cname" placeholder="Category Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="astored">Area Stored</Label>
                        <Input type="text" name="astored" id="astored" placeholder="astored" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="dosage">Dosage</Label>
                        <Input type="text" name="dosage" id="dosage" placeholder="Dosage" />
                    </FormGroup>
                    {/* <FormGroup>
                        <Label for="exampleSelect">Account Type</Label>
                        <Input defaultValue="1" type="select" name="select" id="exampleSelect">
                        <option value="1" disabled>Choose...</option>
                        <option value={"PUTVALUEHERE"}>PUTVALUEHERE</option>
                        <option value={"PUTVALUEHERE"}>PUTVALUEHERE</option>
                        <option value={"PUTVALUEHERE"}>PUTVALUEHERE</option>
                        </Input>
                    </FormGroup> */}
                    <Button>Save</Button>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </Form>
            </ModalBody>
        </Modal>
    </React.Fragment>
  );
}

export default AddMedCategory;