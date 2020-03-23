import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FormGroup, Input, Button, Modal, ModalHeader, ModalBody, Label, FormFeedback } from 'reactstrap';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';

const initialValues = {
  user: '',
  pass: ''
};

class LoginModal extends Component {

  render() {
    return (
      <div>
        
        <Modal isOpen={this.props.opened} toggle={this.props.toggle} >
          <ModalHeader toggle={this.props.toggle}>Welcome</ModalHeader>
          <ModalBody>
            <LoginForm />
          </ModalBody>
          {/* <ModalFooter>
            <Link to="/admin/dashboard"> <Button color="primary" onClick={this.onSubmitSignIn}>Login</Button></Link>
            <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
          </ModalFooter> */}
        </Modal>
      </div>
    );

  }
}

function LoginForm() {
  return (
    <Formik 
      validationSchema={
        object({
            user: string().required().min(2).max(30),
            pass: string().required().min(4).max(30)
        })
      }
      initialValues={initialValues} 
      onSubmit={(values, formikHelpers) => {
          return new Promise(res => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 4))
                  console.log(values);
                  console.log(formikHelpers);
                  console.log('.................');
                  res();
              }, 3000)
          })
      }}
    >
      {({ values, errors, touched, isSubmitting }) => (
        <Form>
          <FormGroup>
            <Label for="user">Username</Label>
            <Field invalid={touched.user && Boolean(errors.user)} id="user" name="user" as={Input} placeholder="Username" type="user" />
            <FormFeedback>{<ErrorMessage name="user" />}</FormFeedback>
          </FormGroup>
            
          <FormGroup>
            <Label for="pass">Password</Label>
            <Field invalid={touched.pass && Boolean(errors.pass)} id="pass" name="pass" as={Input} placeholder="Password" type="password" />
            <FormFeedback>{<ErrorMessage name="pass" />}</FormFeedback>
          </FormGroup>

            <Button disabled={isSubmitting} variant="outlined" color="secondary" type="submit">Login</Button>
            <Link to="/admin/dashboard"> <Button color="primary">Login</Button></Link>
            <pre>Note: Login button will be disabled for three seconds when you click the button, to simulate a loading</pre>
            <pre>Error{JSON.stringify(errors, null, 4)}</pre>
            <pre>State{JSON.stringify(values, null, 4)}</pre>
        </Form>
      )}
    </Formik>
  )
}

export default LoginModal;