import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import * as auth from '../../api/actions/auth';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import * as saving from '../../actions/auth';
import './trailer.css';

import img1 from './img/car-carrier-truck-clipart-13.png';
import img2 from './img/Cargo-Truck-PNG-Transparent-Image.png';
import img3 from './img/colonialtruckofrichmond-type-tipper.png';
import img4 from './img/lorry-truck-png-4.png';
import img5 from './img/Mack_cars_3.png';
import img6 from './img/truck_PNG16212.png';
import img7 from './img/truck_PNG16269.png';
import img8 from './img/truck_PNG16271.png';
import img9 from './img/truck-hd-png-cargo-truck-png-3136.png';
import img10 from './img/Truck-PNG-Free-Download.png';

class Trailer extends Component {
  state = {
    seleccionado: undefined
  };
  componentDidMount() {
    this.props.getTrailers();
  }
  seleccionTrailer = ev => {
    this.setState({ seleccionado: ev.target.id });
    this.props.guardarTrailer(ev.target.id);
  };
  trailerImage = index => {
    switch (index) {
      case 0:
        return img1;
        break;
      case 1:
        return img2;
        break;
      case 2:
        return img3;
        break;
      case 3:
        return img4;
        break;
      case 4:
        return img5;
        break;
      case 5:
        return img6;
        break;
      case 6:
        return img7;
        break;
      case 7:
        return img8;
        break;
      case 8:
        return img9;
        break;
      case 9:
        return img10;
        break;
    }
  };

  render() {
    let trailers = this.props.trailerList;
    const styles = {
      card: {
        minWidth: 250,
        marginRight: '1%',
        border: '1px #c4c4ff solid'
      },
      media: {
        height: 0,
        paddingTop: '56.25%',
        marginTop: '30'
      },
      acceptButton: {
        backgroundColor: '#0000ff',
        color: '#fff',
        borderRadius: '20px',
        fontSize: '16px',
        border: '1px #0000ff solid',
        width: '70%',
        padding: '1% 3% 1% 3%'
      },
      selected: {
        backgroundColor: '#27C657',
        color: '#fff',
        borderRadius: '20px',
        fontSize: '16px',
        border: '1px #27C657 solid',
        width: '70%',
        padding: '1% 3% 1% 3%'
      }
    };

    return (
      <div className="trailerBackground">
        <div className="formTitle">
          <i className="fas fa-truck-moving" /> Seleccione un camion
        </div>
        <div className="formBody scroll_lista">
          {trailers ? (
            trailers.map((label, index) => {
              return (
                <Card style={styles.card} key={index}>
                  <CardActionArea>
                    <CardMedia
                      style={styles.media}
                      image={this.trailerImage(index)}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <h2 style={{ color: 'black', alignContent: 'flex-end' }}>
                        {label.nombre}
                      </h2>
                    </CardContent>
                  </CardActionArea>
                  <CardActions style={{ justifyContent: 'center' }}>
                    <button
                      size="large"
                      id={label.id}
                      style={
                        this.state.seleccionado !== label.id
                          ? styles.acceptButton
                          : styles.selected
                      }
                      onClick={this.seleccionTrailer}
                    >
                      Seleccionar
                    </button>
                  </CardActions>
                </Card>
              );
            })
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    trailerList: state.Api.Auth.trailers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTrailers: () => {
      return auth.getTrailers()(dispatch);
    },
    guardarTrailer: id => {
      dispatch(saving.idTrailer(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trailer);
