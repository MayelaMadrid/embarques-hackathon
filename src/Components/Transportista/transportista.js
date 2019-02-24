import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import img from '../Login/img/road.jpeg';
import * as saving from '../../actions/auth';
import * as auth from '../../api/actions/auth';
import './transportista.css';

import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
import img7 from './img/7.jpg';
import img8 from './img/8.jpg';
import img9 from './img/9.png';
import img10 from './img/10.jpg';
import img11 from './img/11.jpg';
import img12 from './img/12.jpg';
import img13 from './img/13.jpg';

class Transportista extends Component {
  state = {
    transportistas: [],
    seleccionado: ''
  };

  componentDidMount() {
    this.props.getTransportista();
  }

  choferImage = index => {
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

  seleccionChofer = ev => {
    this.setState({ seleccionado: ev.target.id });
    this.props.guardarChofer(ev.target.id);
  };
  render() {
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
      }
    };

    return (
      <div className="transportistaBackground">
        <div className="formTitle">
          <i className="fas fa-user" /> Seleccione un Transportista
        </div>
        <div className="formBody scroll_lista">
          {this.props.transportistas ? (
            this.props.transportistas.map((label, index) => {
              return (
                <Card style={styles.card}>
                  <CardActionArea>
                    <CardMedia
                      style={styles.media}
                      image={this.choferImage(index)}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <h2 style={{ color: 'black', alignContent: 'flex-end' }}>
                        <i className="fas fa-user" /> {label.nombre}
                      </h2>
                    </CardContent>
                  </CardActionArea>
                  <CardActions style={{ justifyContent: 'center' }}>
                    <button
                      size="large"
                      style={styles.acceptButton}
                      id={label.id}
                      onClick={this.seleccionChofer}
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
    transportistas: state.Api.Auth.transportistas
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTransportista: () => {
      return auth.getTransportista()(dispatch);
    },
    guardarChofer: id => {
      dispatch(saving.guardarChofer(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Transportista);
