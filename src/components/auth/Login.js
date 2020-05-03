import React, { useState } from 'react';
import { Alert, Button, Form, FormGroup, Input, Label, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { LogIn, LogOut } from 'react-feather';
import { useSelector, useDispatch } from "react-redux";
import {
  // action creators
  login, logout,
  // selectors
  isLoadingSelector, errorSelector, isLoggedInSelector
} from "../../store/features/auth";
import useInput from '../../hooks/useInput'


const LoginForm = (props) => {
  const dispatch = useDispatch();

  // redux state
  const loading = useSelector(isLoadingSelector);
  const error = useSelector(errorSelector);

  // input hooks for form state
  const { value: email, bind: bindEmail } = useInput('');
  const { value: password, bind: bindPassword } = useInput('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(login({ email, password }));
  }

  return (
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
      </div>
    </Form>
  );
};

const Login = (props) => {
  const dispatch = useDispatch();

  // redux state
  const loggedIn = useSelector(isLoggedInSelector);

  // state of login modal
  const [modalOpened, setModalOpened] = useState(false);
  const openModal = () => setModalOpened(true);
  const closeModal = () => setModalOpened(false);

  const handleLogout = () => {
    dispatch(logout());
    closeModal();
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
          <LoginForm />
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default Login;
