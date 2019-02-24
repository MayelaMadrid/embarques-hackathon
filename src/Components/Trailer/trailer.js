import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import * as auth from '../../api/actions/auth';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import * as saving from '../../actions/auth';
import img from '../Login/img/road.jpeg';
// import * as auth from '../../api/actions/auth';
import './trailer.css';

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
        <div className="formBody">
          {trailers ? (
            trailers.map((label, index) => {
              return (
                <Card style={styles.card} key={index}>
                  <CardActionArea>
                    <CardMedia
                      style={styles.media}
                      image={img}
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
