import React, { Component } from 'react';
import { connect } from 'react-redux';
import './modalMapa.css';
import Maps from '../Maps/maps';
import Modal from '@material-ui/core/Modal';
import GoogleMapReact from 'google-map-react';
import firebase from '../../Config.js';
const Destino = ({ text }) => (
  <div>
    Destino
    <i
      className="fas fa-truck-loading"
      style={{ fontSize: 10 + 'px', color: 'red' }}
    />
  </div>
);
const Origen = ({ text }) => (
  <div>
    Origen
    <i
      className="fas fa-truck-moving"
      style={{ fontSize: 10 + 'px', color: 'red' }}
    />
  </div>
);
const EnCamino = ({ text }) => (
  <div>
    Curso
    <i
      className="fas fa-location-arrow"
      style={{ fontSize: 10 + 'px', color: 'blue' }}
    />
  </div>
);
class ModalMapa extends Component {
  static defaultProps = {
    center: {
      lat: 23.6345005,
      lng: -102.5527878
    },
    zoom: 5
  };
  constructor(props) {
    super(props);
    this.state = {
      latitud: 20.6668205,
      open: true,
      longitud: -103.3918228,
      humedad: 0,
      velocidad: 0,
      minTemp: 0,
      maxTemp: 0
    };
  }
  handleClose = () => {
    this.setState({ open: false });
  };
  componentDidMount() {
    console.log(this.props.id);
  }
  componentWillMount() {
    const lat = firebase
      .database()
      .ref()
      .child('Latitud');
    lat.on('value', snapshot => {
      this.setState({ latitud: snapshot.val() });
    });
    const lon = firebase
      .database()
      .ref()
      .child('Longitud');
    lon.on('value', snapshot => {
      this.setState({ longitud: snapshot.val() });
    });
    const hum = firebase
      .database()
      .ref()
      .child('Humedad');
    hum.on('value', snapshot => {
      this.setState({ humedad: snapshot.val() });
    });
    const vel = firebase
      .database()
      .ref()
      .child('Velocidad-Km');
    vel.on('value', snapshot => {
      this.setState({ velocidad: snapshot.val() });
    });
    const max = firebase
      .database()
      .ref()
      .child('Max');
    max.on('value', snapshot => {
      this.setState({ maxTemp: snapshot.val() });
    });
    const min = firebase
      .database()
      .ref()
      .child('Min');
    min.on('value', snapshot => {
      this.setState({ minTemp: snapshot.val() });
    });
  }
  volver = () => {
    this.props.sendBack(false);
  };

  render() {
    let { origen, destino, detalles } = this.props;

    return (
      <div style={{ height: '75%', width: '100%', borderRadius: '10px' }}>
        <div className="regreso" onClick={this.volver}>
          <i className="fas fa-arrow-left" style={{ marginRight: '3vw' }} />
          Regresar a embarques
        </div>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyBQ8W6NaSJTVXlygy5et73HL41ah8WuCPs'
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Origen lat={origen.latitud} lng={origen.longitud} text="My Marker" />
          <Destino
            lat={destino.latitud}
            lng={destino.longitud}
            text="My Marker"
          />
          <EnCamino
            lat={this.state.latitud}
            lng={this.state.longitud}
            text="My Marker"
          />
        </GoogleMapReact>
        <div className="valores">
          <div className="contiene">
            <div>
              <label>Contiene: </label>
            </div>
            {detalles.map((e, k) => {
              return (
                <div>
                  <label>{`${e.nombreProducto} = ${
                    e.cantidadProducto
                  } tarimas`}</label>
                </div>
              );
            })}
          </div>
          <div>
            <label>Humedad Actual: {this.state.humedad}</label>
          </div>
          <div>
            <label>Velocidad Actual: {this.state.velocidad}km</label>
          </div>
          <div>
            <label>Temperatura Maxima: {this.state.maxTemp}</label>
          </div>
          <div>
            <label> Temperatura Minima: {this.state.minTemp}</label>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalMapa);
