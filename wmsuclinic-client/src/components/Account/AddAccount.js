import React, { useState } from 'react';
import { toast } from "react-toastify";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

const AddAccount = (props) => {
  const {
    buttonColor,
    buttonLabel,
    className,
    modalTitle
  } = props;

  const [modal, setModal] = useState(false);



    const [inputs, setInputs] = useState({
        name: "",
        username: "",
        password: "",
        usertype: ""
    })
    
    const { name, username, password, usertype } = inputs;

    const toggle = () => setModal(!modal);
    
   
    const onChange = e => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { name, username, password, usertype }
            const response = await fetch("http://localhost:5000/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            const parseRes = await response.json();
                if (parseRes.token) {
                    toast.success("Succesfully Added");
                } else {
                    toast.error(parseRes);
                }
        } catch (err) {
            console.error(err.message);
        }
    }
  return (
    <React.Fragment>
        <Button color={buttonColor} onClick={toggle}>{buttonLabel}</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>{modalTitle}</ModalHeader>
            <ModalBody>
                  <Form onSubmit={onSubmitForm}>
                    <FormGroup>
                        <Label for="name">Full Name</Label>
                          <Input 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="Given Name Surname" 
                            onChange={e => onChange(e)}
                            value={name}
                          />
                    </FormGroup>
                    <FormGroup>
                        <Label for="username">Username</Label>
                          <Input 
                            type="text" name="username" 
                            id="username" 
                            placeholder="Username" 
                            onChange={e => onChange(e)}
                            value={username}
                          />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                          <Input 
                          type="password" 
                          name="password"
                          id="password" 
                          placeholder="Password" 
                          onChange={e => onChange(e)}
                          value={password}
                        />
                    </FormGroup>
                      <FormGroup>
                        <Label for="exampleSelect">Account Type</Label>
                          <Input defaultValue="1" type="select" id="exampleSelect" name="usertype"  value={usertype} onChange={e => onChange(e)}>
                            <option value="1" disabled>Choose...</option>
                              <option value={"Administrator"}>Administrator</option>
                              <option value={"Doctor"}>Doctor</option>
                              <option value={"Nurse"}>Nurse</option>
                              <option value={"Assistant Nurse"}>Assistant Nurse</option>
                        </Input>
                    </FormGroup>
                    <Button>Submit</Button>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </Form>
            </ModalBody>
        </Modal>
    </React.Fragment>
  );
}

export default AddAccount;