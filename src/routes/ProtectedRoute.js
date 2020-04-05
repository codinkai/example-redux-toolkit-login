import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom';

class ProtectedRouted extends Component {
  render() {
    if (this.props.loggedIn) {
      return <Route
        path={this.props.path}
        component={this.props.component}
      />
    } else {
      return <Redirect to="/login" />
    }
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.auth.loggedIn
})

export default connect(mapStateToProps)(ProtectedRouted);