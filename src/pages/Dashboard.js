import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Dashboard</h1>
      </React.Fragment>
    );
  }
}

export default connect()(Dashboard);
