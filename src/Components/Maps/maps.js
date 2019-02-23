import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

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
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBQ8W6NaSJTVXlygy5et73HL41ah8WuCPs' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Destino lat={59.955413} lng={30.337844} text="My Marker" />
          <Origen lat={59.955413} lng={30.444444} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Maps;
