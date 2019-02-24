import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import * as auth from '../../api/actions/auth';
import { Redirect } from 'react-router-dom';
import * as login from '../../actions/auth';
import './home.css';
import img from './img/chofer.jpg';
import Carousel from 'nuka-carousel';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Formulario from '../Formulario/formulario';
import ListaEmbarques from '../Formulario/formulario';
import Salidas from '../Formulario/formulario';
import Maps from '../Maps/maps';
class Home extends Component {
  state = {
    username: '',
    password: '',
    errorLogin: '',
    mensajeError: '',
    home: undefined
  };
  changeVista = name => {
    console.log(name);
    this.setState({
      home: name
    });
  };
  logOut = () => {
    let nl = null;
    this.props.logOut(nl);
  };
  render() {
    console.log(this.state.home);
    let body;
    if (this.state.home === 'registro') {
      body = <Formulario />;
    } else if (this.state.home === 'revisar') {
      body = <ListaEmbarques />;
    } else if (this.state.home === 'salidas') {
      body = <Salidas />;
    } else {
      body = (
        <Carousel autoplay autoplayInterval={1000}>
          <img src="https://www.google.com.mx/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjzv5jDj9LgAhUpi1QKHYUFAawQjRx6BAgBEAU&url=https%3A%2F%2Fwww.purina.es%2Fgatos%2Fetapas-clave-de-su-vida%2Fgatitos%2Fnuevo-gatito-en-casa&psig=AOvVaw0THCzBw0a0tkGX1Wmw_tbF&ust=1551020436557136" />
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
        </Carousel>
      );
    }
    return (
      <div className="home">
        <div className="header">
          <div
            className="logo"
            onClick={ev => {
              this.changeVista('home');
            }}
          >
            <label className="label">
              <i className="fas fa-truck-moving" /> Tracking Trucks
            </label>
          </div>
          <div className="opciones">
            {' '}
            <div
              className="opcion"
              onClick={ev => {
                this.changeVista('registro');
              }}
            >
              {' '}
              <label>Registrar embarque</label>
            </div>
            <div
              className="opcion"
              onClick={ev => {
                this.changeVista('revisar');
              }}
            >
              {' '}
              <label>Revisar embarques</label>
            </div>
            <div
              className="opcion"
              onClick={ev => {
                this.changeVista('salidas');
              }}
            >
              {' '}
              <label>Salida de embarque</label>
            </div>
            <div className="lo" onClick={this.logOut}>
              <label>
                Cerrar sesión <i className="fas fa-sign-out-alt" />
              </label>
            </div>
          </div>
        </div>
        <div className="body">{body}</div>
        {/* <Maps /> */}
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
)(Home);
