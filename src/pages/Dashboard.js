import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Dashboard</h1>
        <h2>Welcome <i>{this.props.user.name}</i>.</h2>
        <div>The highlighted text in the welcome message is derived from the user object stored in the redux store 'auth.user'. The user object was returned from the mock-api, as a result of the login request.</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user
})

export default connect(mapStateToProps)(Dashboard);
