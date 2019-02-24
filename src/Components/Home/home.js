import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as auth from '../../api/actions/auth';
import * as login from '../../actions/auth';
import './home.css';
import Carousel from 'nuka-carousel';
import Formulario from '../Formulario/formulario';
import ListaEmbarques from '../ListaEmbarques/listaEmbarques';
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
        <Carousel autoplay autoplayInterval={3000} style={{width:'80%', marginTop: '0.4em', marginLeft: 'auto', marginRight: 'auto'}}>
          <img style={{maxHeight: '100%'}} src="https://firebasestorage.googleapis.com/v0/b/tracking-trucks-f68a7.appspot.com/o/truck_1.jpg?alt=media&token=554a1897-b9cf-41bf-bd8c-be4de0418861" />
          <img style={{maxHeight: '100%'}} src="https://firebasestorage.googleapis.com/v0/b/tracking-trucks-f68a7.appspot.com/o/truck_2.jpg?alt=media&token=f88503dc-e747-4fc7-b4f8-ffa7100508e3" />
          <img style={{maxHeight: '100%'}} src="https://firebasestorage.googleapis.com/v0/b/tracking-trucks-f68a7.appspot.com/o/truck_3.jpg?alt=media&token=3af59844-4a45-49dd-85f8-c2288517e8ec" />
          <img style={{maxHeight: '100%'}} src="https://firebasestorage.googleapis.com/v0/b/tracking-trucks-f68a7.appspot.com/o/truck_4.jpg?alt=media&token=ab80b955-b954-4f00-9d24-8ba3944ab0a2" />
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
              <label>
                <i className="fas fa-clipboard-list" /> Registrar embarque
              </label>
            </div>
            <div
              className="opcion"
              onClick={ev => {
                this.changeVista('revisar');
              }}
            >
              {' '}
              <label>
                <i className="fas fa-tasks" /> Revisar embarques
              </label>
            </div>
            <div
              className="opcion"
              onClick={ev => {
                this.changeVista('salidas');
              }}
            >
              {' '}
              <label>
                <i className="fas fa-truck-loading" /> Salida de embarque
              </label>
            </div>
            <div className="lo" onClick={this.logOut}>
              <label>
                <i className="fas fa-sign-out-alt" /> Cerrar sesión
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
