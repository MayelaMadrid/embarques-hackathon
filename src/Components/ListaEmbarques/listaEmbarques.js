import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import img from '../Login/img/road.jpeg';
import * as auth from '../../api/actions/auth';
import './listaEmbarques.css';
import ModalMapa from '../ModalMapa/modalMapa';

class ListaEmbarques extends Component {
  state = {
    embarques: [],
    modal: false,
    origen: undefined,
    destino: undefined,
    detalle: undefined
  };

  componentDidMount() {
    this.props.getEmbarque();
  }
  openModal = (ev, origen, destino, detalle, id) => {
    this.setState({ origen: origen });
    this.setState({ destino: destino });
    this.setState({ detalle: detalle });
    this.setState({ id: id });
    this.setState({ modal: true });
  };

  getBack = val => {
    this.setState({ modal: val });
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
        borderRadius: '20px'
      }
    };

    return (
      <div className="transportistaBackground">
        {!this.state.modal ? (
          <div>
            {' '}
            <div className="formTitle">
              <i className="fas fa-truck" /> Seleccione un Embarque para mostrar
              su detalle.
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
                          <h3
                            style={{
                              color: 'purple',
                              alignContent: 'flex-end'
                            }}
                          >
                            <i className="fab fa-slack-hash" /> Folio:{' '}
                            <span style={{ color: '#2a122a' }}>{label.id}</span>
                          </h3>
                          <h3
                            style={{
                              color: 'purple',
                              alignContent: 'flex-end'
                            }}
                          >
                            <i className="fas fa-truck-moving" /> Transporte:{' '}
                            <span style={{ color: '#2a122a' }}>
                              {label.idTrailer}
                            </span>
                          </h3>
                          <h4
                            style={{
                              color: 'purple',
                              alignContent: 'flex-end'
                            }}
                          >
                            <i className="fas fa-globe-americas" /> Origen:{' '}
                            <span style={{ color: '#2a122a' }}>
                              {label.nombreMunicipioOrigen}
                            </span>
                          </h4>
                          <h4
                            style={{
                              color: 'purple',
                              alignContent: 'flex-end'
                            }}
                          >
                            <i class="fas fa-globe-africa" /> Destino{' '}
                            <span style={{ color: '#2a122a' }}>
                              {label.nombreMunicipioDestino}
                            </span>
                          </h4>
                        </CardContent>
                      </CardActionArea>
                      <CardActions style={{ justifyContent: 'center' }}>
                        <Button
                          size="large"
                          style={styles.acceptButton}
                          onClick={ev => {
                            this.openModal(
                              ev,
                              label.municipioOrigen,
                              label.municipioDestino,
                              label.embarqueDetalles,
                              label.id
                            );
                          }}
                        >
                          VER DETALLES
                        </Button>
                      </CardActions>
                    </Card>
                  );
                })
              ) : (
                <div />
              )}
            </div>
          </div>
        ) : (
          <ModalMapa
            origen={this.state.origen}
            destino={this.state.destino}
            detalles={this.state.detalle}
            id={this.state.id}
            sendBack={this.getBack}
          />
        )}
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
      return auth.getEmbarque(3)(dispatch);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListaEmbarques);
