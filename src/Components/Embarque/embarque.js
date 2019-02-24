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
import './embarque.css';

class Embarque extends Component {
  state = {
    embarques: [],
    seleccionado: undefined
  };

  componentDidMount() {
    this.props.getEmbarque();
  }
  seleccionEmbarque = ev => {
    this.setState({ seleccionado: ev.target.id });
    this.props.guardarEmbarque(ev.target.id);
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
      <div className="transportistaBackground">
        <div className="formTitle">
          <i className="fas fa-truck" /> Seleccione un Embarque
        </div>
        <div className="formBody">
          {this.props.embarques ? (
            this.props.embarques.map((label, index) => {
              return (
                <Card style={styles.card}>
                  <CardActionArea>
                    <CardMedia
                      style={styles.media}
                      image={img}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <h3 style={{ color: 'purple', alignContent: 'flex-end' }}>
                        <i className="fab fa-slack-hash" /> Folio:{' '}
                        <span style={{ color: '#2a122a' }}>{label.id}</span>
                      </h3>
                      <h3 style={{ color: 'purple', alignContent: 'flex-end' }}>
                        <i className="fas fa-truck-moving" /> Transporte:{' '}
                        <span style={{ color: '#2a122a' }}>
                          {label.idTrailer}
                        </span>
                      </h3>
                      <h4 style={{ color: 'purple', alignContent: 'flex-end' }}>
                        <i className="fas fa-globe-americas" /> Origen:{' '}
                        <span style={{ color: '#2a122a' }}>
                          {label.municipioOrigen.nombre}
                        </span>
                      </h4>
                      <h4 style={{ color: 'purple', alignContent: 'flex-end' }}>
                        <i class="fas fa-globe-africa" /> Destino{' '}
                        <span style={{ color: '#2a122a' }}>
                          {label.municipioDestino.nombre}
                        </span>
                      </h4>
                    </CardContent>
                  </CardActionArea>
                  <CardActions style={{ justifyContent: 'center' }}>
                    <button
                      id={label.id}
                      onClick={this.seleccionEmbarque}
                      size="large"
                      style={styles.acceptButton}
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
    embarques: state.Api.Auth.embarques
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEmbarque: () => {
      return auth.getEmbarque(1)(dispatch);
    },
    guardarEmbarque: id => {
      dispatch(saving.guardarEmbarque(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Embarque);
