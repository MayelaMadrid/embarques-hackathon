import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import * as auth from '../../api/actions/auth';
import { Redirect } from 'react-router-dom';
import * as login from '../../actions/auth';
import './home.css';
import img from './img/chofer.jpg';
import Carousel from 'nuka-carousel';
import Button from '@material-ui/core/Button';

class Home extends Component {
  state = {
    username: '',
    password: '',
    errorLogin: '',
    mensajeError: ''
  };

  render() {
    return (
      <div className="home">
        <div className="header">
          <div className="logo">
            <label className="label">
              Tracking Trunks <i className="fas fa-truck-moving" />
            </label>
          </div>
          <div className="opciones">
            <div className="opcion">
              {' '}
              <label>Registrar embarque</label>
            </div>
            <div className="opcion">
              {' '}
              <label>Revisar embarques</label>
            </div>
            <div className="opcion">
              {' '}
              <label>Salida de embarque</label>
            </div>
            <div className="lo">
              <label>
                Cerrar sesión <i className="fas fa-sign-out-alt" />
              </label>
            </div>
          </div>
        </div>
        <div className="body">
          <Carousel>
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
          </Carousel>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.Api.Auth.auth,
    userid: state.Auth.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLogin: (username, password) => {
      return auth.authTracking(username, password)(dispatch);
    },
    setUser: name => {
      dispatch(login.setUser(name));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
