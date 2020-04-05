import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

import { login } from "../store/features/auth";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // console.log("handleSubmit");
    event.preventDefault();
    this.props.login({ email: this.state.email, password: this.state.password });
  }

  handleChange(event) {
    // console.log("handleChange");
    event.preventDefault();

    let newState = {};
    newState[event.target.id] = event.target.value;

    this.setState(newState);
  }

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/dashboard" />
    } else {
      return (
        <form>
          <input type="input" id="email" placeholder="email" onChange={this.handleChange} /><br />
          <input type="password" id="password" placeholder="password" onChange={this.handleChange} /><br />
          <button onClick={this.handleSubmit}>login</button>
        </form>
      );
    }
  }
}


const mapStateToProps = (state) => ({
  loggedIn: state.auth.loggedIn
})

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
