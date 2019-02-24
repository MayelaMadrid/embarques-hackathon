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

class Transportista extends Component {
  state = {
    transportistas: [],
    seleccionado: ''
  };

  componentDidMount() {
    this.props.getTransportista();
  }
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
        <div className="formBody">
          {this.props.transportistas ? (
            this.props.transportistas.map((label, index) => {
              return (
                <Card style={styles.card}>
                  <CardActionArea>
                    <CardMedia
                      style={styles.media}
                      image={img}
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
