import React, { useState } from 'react';
import { Alert, Button, Form, FormGroup, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { LogIn, LogOut } from 'react-feather';
import { useSelector, useDispatch } from "react-redux";
import {
  // action creators
  login, logout,
  // selectors
  isLoadingSelector, errorSelector, isLoggedInSelector
} from "../../store/features/auth";
import useInput from '../../hooks/useInput'


const Login = () => {
  const dispatch = useDispatch();

  // redux state
  const loggedIn = useSelector(isLoggedInSelector);
  const loading = useSelector(isLoadingSelector);
  const error = useSelector(errorSelector);

  // state of login modal
  const [modalOpened, setModalOpened] = useState(false);
  const openModal = () => setModalOpened(true);
  const closeModal = () => setModalOpened(false);

  // input hooks for form state
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
  const { value: password, bind: bindPassword, reset: resetPassword } = useInput('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(login({ email, password }));
  }

  const handleLogout = () => {
    closeModal();
    resetEmail();
    resetPassword();
    dispatch(logout());
  }

  // render logout button
  if (loggedIn) {
    return (
      <Button color="primary" onClick={handleLogout}>
        <LogOut />{" "} Logout
      </Button >
    );
  }

  // render login button with login modal
  return (
    <React.Fragment>
      <Button color="primary" onClick={openModal}>
        <LogIn />{" "}Login
      </Button>
      <Modal isOpen={modalOpened} >
        <ModalHeader>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            {error &&
              (<Alert color="danger">
                {error}
              </Alert>)
            }
            <ul>
              <li>test@test.com</li>
              <li>PASSWORD</li>
            </ul>

            <FormGroup>
              <Label for="login-email">Email:</Label>
              <Input type="email" name="email" id="login-email" {...bindEmail} disabled={loading} />
            </FormGroup>
            <FormGroup>
              <Label for="login-password">Password:</Label>
              <Input type="password" name="password" id="login-password" {...bindPassword} disabled={loading} />
            </FormGroup>
            <div className="float-right">
              {loading === false ?
                <Button color="primary" type="submit">Login</Button>
                :
                <Button disabled>Loading</Button>
              }
              <Button className="ml-2" color="secondary" onClick={closeModal}>Cancel</Button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
}

export default Login;
