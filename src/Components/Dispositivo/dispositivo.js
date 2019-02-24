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
import './dispositivo.css';

class Dispositivo extends Component {

  state = {
    dispositivos: []
  };

  componentDidMount() {
    this.props.getDispositivo();
  }

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
        <div className="formTitle">
          <i class="fab fa-raspberry-pi"></i> Seleccione un Dispositivo
        </div>
        <div className="formBody">
          {this.props.dispositivos?
          this.props.dispositivos.map((label, index) => {
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
                      <i className="fab fa-slack-hash"></i> Folio: <span style={{color: '#2a122a'}}>{label.id}</span>
                    </h3>
                    <h3 style={{ color: 'purple', alignContent: 'flex-end' }}>
                      <i className="fas fa-truck-moving"></i> Transporte: <span style={{color: '#2a122a'}}>{label.idTrailer}</span>
                    </h3>
                    <h4 style={{ color: 'purple', alignContent: 'flex-end' }}>
                      <i className="fas fa-globe-americas"></i> Origen: <span style={{color: '#2a122a'}}>{label.nombreMunicipioOrigen}</span> 
                    </h4>
                    <h4 style={{ color: 'purple', alignContent: 'flex-end' }}>
                      <i class="fas fa-globe-africa"></i> Destino <span style={{color: '#2a122a'}}>{label.nombreMunicipioDestino}</span>
                    </h4>
                  </CardContent>
                </CardActionArea>
                <CardActions style={{ justifyContent: 'center' }}>
                  <Button size="large" style={styles.acceptButton}>
                    Seleccionar
                  </Button>
                </CardActions>
              </Card>
            );
          }):
          <div></div>
        }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {  
  return {
    dispositivos: state.Api.Auth.dispositivos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDispositivo: () => {
        return auth.getDispositivo()(dispatch);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dispositivo);
