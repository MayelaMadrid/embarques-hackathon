import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import * as auth from '../../api/actions/auth';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import img from '../Login/img/road.jpeg';
import { Redirect } from 'react-router-dom';
import * as login from '../../actions/auth';
import './listaEmbarques.css';
import Button from '@material-ui/core/Button';

class ListaEmbarques extends Component {
  state = {
    username: '',
    password: '',
    errorLogin: '',
    mensajeError: ''
  };

  handleChange = (ev, name) => {
    this.setState({
      [name]: ev.target.value
    });
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
      <div className="ListaEmbarques">
        <Card style={styles.card}>
          <CardActionArea>
            <CardMedia
              style={styles.media}
              image={img}
              title="Contemplative Reptile"
            />
            <CardContent>
              <h2 style={{ color: 'black', alignContent: 'flex-end' }}>
                sushishaha
              </h2>
              <TextField
                label="No. Tarimas"
                onChange={this.handleChange}
                type="number"
                className="{classes.textField}"
                InputLabelProps={{
                  shrink: true
                }}
                margin="normal"
                variant="outlined"
              />
            </CardContent>
          </CardActionArea>
          <CardActions style={{ justifyContent: 'center' }} />
        </Card>

        <div />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.Api.Auth.auth,
    userid: state.Auth.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLogin: (username, password) => {
      return auth.authTracking(username, password)(dispatch);
    },
    setUser: name => {
      dispatch(login.setUser(name));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListaEmbarques);
