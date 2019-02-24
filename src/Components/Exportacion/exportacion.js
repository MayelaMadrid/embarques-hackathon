import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import * as auth from '../../api/actions/auth';
import { Redirect } from 'react-router-dom';
import * as login from '../../actions/auth';
import './exportacion.css';

class Exportacion extends Component {
  state = {};

  render() {
    return (
      <div className="exportacion">
        <div>fd</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.Api.Auth.auth,
    userid: state.Auth.user,
    home: state.Auth.vistas
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLogin: (username, password) => {
      return auth.authTracking(username, password)(dispatch);
    },
    setUser: name => {
      dispatch(login.setUser(name));
    },
    vistasHome: vista => {
      dispatch(login.vistasHome(vista));
    },
    logOut: nl => {
      dispatch(login.logout(nl));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Exportacion);
