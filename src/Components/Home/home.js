import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as auth from '../../api/actions/auth';
import * as login from '../../actions/auth';
import './home.css';
import Carousel from 'nuka-carousel';
import Formulario from '../Formulario/formulario';
import ListaEmbarques from '../Formulario/formulario';
import Salidas from '../Salidas/salidas';
class Home extends Component {
  state = {
    username: '',
    password: '',
    errorLogin: '',
    mensajeError: '',
    home: undefined
  };
  changeVista = name => {
    this.setState({
      home: name
    });
  };
  logOut = () => {
    let nl = null;
    this.props.logOut(nl);
  };
  render() {
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
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
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
              <label><i className="fas fa-clipboard-list"></i> Registrar embarque</label>
            </div>
            <div
              className="opcion"
              onClick={ev => {
                this.changeVista('revisar');
              }}
            >
              {' '}
              <label><i className="fas fa-tasks"></i> Revisar embarques</label>
            </div>
            <div
              className="opcion"
              onClick={ev => {
                this.changeVista('salidas');
              }}
            >
              {' '}
              <label><i className="fas fa-truck-loading"></i> Salida de embarque</label>
            </div>
            <div className="lo" onClick={this.logOut}>
              <label>
                <i className="fas fa-sign-out-alt"></i> Cerrar sesión
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
