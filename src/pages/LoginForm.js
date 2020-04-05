import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

// import action creator to trigger login
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
    if (this.props.loading) {
      // show a loading screen
      return <div>Loading...</div>
    } else {
      if (this.props.loggedIn) {
        // if user is logged in redirect to dashboard
        return <Redirect to="/dashboard" />
      } else {
        // if user is not logged in show login form
        return (
          <div id="login-form">
            <h1>Login</h1>
            <span>
              This is an example application to showcase the usage of the redux-toolkit. <br />
            To login use the credentials:
            <ul>
                <li>test@test.com</li>
                <li>PASSWORD</li>
              </ul>
            </span>
            {(this.props.error) ? (<div><b>{this.props.error}</b></div>) : ""}
            <form>
              <input type="input" id="email" placeholder="email" onChange={this.handleChange} /><br />
              <input type="password" id="password" placeholder="password" onChange={this.handleChange} /><br />
              <button onClick={this.handleSubmit}>login</button>
            </form>
          </div>
        );
      }
    }
  }
}

// The function mapStateToProps is part of react-redux, it selects the necessary
// variables from the global state and maps the state variables to the component's 
// properties.
const mapStateToProps = (state) => ({
  loggedIn: state.auth.loggedIn,
  loading: state.auth.loading,
  error: state.auth.error
})

// The function mapDispatchToProps is part of react-redux, it adds action creators 
// to the component's properties, which dispatch actions to change the application's
// state.
const mapDispatchToProps = { login };

// The connect function is part of react-redux, it connects the component with the
// redux store and triggers rendering, if the state changes. 
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
