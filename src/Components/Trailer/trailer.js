import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import img from '../Login/img/road.jpeg';
// import * as auth from '../../api/actions/auth';
import './trailer.css';

class Trailer extends Component {
  state = {
    trailerList: [
      {
        nombre: 'Trailer 1',
        urlImage: '../Login/img/road.jpeg'
      },
      {
        nombre: 'Trailer 2',
        urlImage: '../Login/img/road.jpeg'
      },
      {
        nombre: 'Trailer 3',
        urlImage: '../Login/img/road.jpeg'
      },
      {
        nombre: 'Trailer 4',
        urlImage: '../Login/img/road.jpeg'
      },
      {
        nombre: 'Trailer 5',
        urlImage: '../Login/img/road.jpeg'
      },
      {
        nombre: 'Trailer 6',
        urlImage: '../Login/img/road.jpeg'
      },
      {
        nombre: 'Trailer 7',
        urlImage: '../Login/img/road.jpeg'
      },
      {
        nombre: 'Trailer 8',
        urlImage: '../Login/img/road.jpeg'
      },
      {
        nombre: 'Trailer 9',
        urlImage: '../Login/img/road.jpeg'
      },
      {
        nombre: 'Trailer 10',
        urlImage: '../Login/img/road.jpeg'
      }
    ]
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
      <div className="trailerBackground">
        <div className="formTitle">
          <i className="fas fa-truck-moving" /> Seleccione un camion
        </div>
        <div className="formBody">
          {this.state.trailerList.map((label, index) => {
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
                      {label.nombre}
                    </h2>
                  </CardContent>
                </CardActionArea>
                <CardActions style={{ justifyContent: 'center' }}>
                  <Button size="large" style={styles.acceptButton}>
                    Seleccionar
                  </Button>
                </CardActions>
              </Card>
            );
          })}
          });
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // trailerList: state.Api.getTrailers.getTrailers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    /*getTrailers: () => {
            return auth.getTrailers()(dispatch);
        }*/
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trailer);
