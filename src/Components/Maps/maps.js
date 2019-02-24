import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';

const Destino = ({ text }) => (
  <div>
    Destino
    <i className="fas fa-truck-loading" style={{ fontSize: 10 + 'px' }} />
  </div>
);
const Origen = ({ text }) => (
  <div>
    Origen
    <i className="fas fa-truck-moving" style={{ fontSize: 10 + 'px' }} />
  </div>
);
class Maps extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    let locDestino = this.props.locDestino;
    let locOrigen = this.props.locOrigen;
    console.log(locDestino, locOrigen);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%', borderRadius: '10px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBQ8W6NaSJTVXlygy5et73HL41ah8WuCPs' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Origen
            lat={locOrigen[0].latitud}
            lng={locOrigen[0].longitud}
            text="My Marker"
          />
          <Destino
            lat={locDestino.latitud}
            lng={locDestino.longitud}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    locOrigen: state.Auth.origen,
    locDestino: state.Auth.destino
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Maps);
