import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import * as auth from '../../api/actions/auth';
import { Redirect } from 'react-router-dom';
import * as login from '../../actions/auth';
import './login.css';
import Button from '@material-ui/core/Button';

const buttonStyle = {
  color: '#fff',
  fontWeight: 'bold',
  width: '80%',
  backgroundColor: '#5353c5'
}

const inputStyle = {
  borderRadius: '5px'
}

class Login extends Component {
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

  onLogin = () => {
    if (this.state.username === '' || this.state.password === '') {
      this.setState({
        errorLogin: true,
        mensajeError: 'Los campos no deben ir vacios.'
      });

      setTimeout(() => {
        this.setState({
          errorLogin: false,
          mensajeError: ''
        });
      }, 2000);
    } else {
      this.props.onLogin(this.state.username, this.state.password).then(() => {
        let authInfo = this.props.auth;
        console.log('fgdf', authInfo[0].success);
        if (authInfo && authInfo[0].success === true) {
          console.log('fgdf');
          this.props.setUser('25');
        }
        if (!authInfo.success) {
          this.setState({
            errorLogin: true,
            mensajeError: 'Usuario o contraseña incorrecta.'
          });
          setTimeout(() => {
            this.setState({
              errorLogin: false,
              mensajeError: ''
            });
          }, 2000);
        }
      });
    }
  };
  onEnter = e => {
    if (e.which === 13) {
      this.onLogin();
    }
  };
  render() {
    let authInfo = this.props.auth;
    // let errorLogin = this.state.errorLogin;
    console.log(authInfo, this.props.userid, localStorage.getItem('userid'));
    if (
      (authInfo && authInfo.success && this.props.userid) ||
      localStorage.getItem('userid')
    ) {
      return (
        <Redirect
          to={{
            pathname: '/home',
            state: { from: this.props.location }
          }}
        />
      );
    }
    return (
      <div className="login">
        <div className="login-background">
          <div className="login-form">
            <div>
              <h2 className="login-text">INICIO DE SESIÓN</h2>
              <TextField
                id="outlined-username"
                label="Usuario"
                className="txt-login"
                value={this.state.username}
                onChange={ev => this.handleChange(ev, 'username')}
                margin="normal"
                variant="outlined"
                onKeyPress={this.onEnter}
                style={inputStyle}
              />
            </div>
            <div>
              <TextField
                id="outlined-pass"
                label="Contraseña"
                className="txt-login"
                value={this.state.password}
                onChange={ev => this.handleChange(ev, 'password')}
                margin="normal"
                type="password"
                variant="outlined"
                onKeyPress={this.onEnter}
                style = {inputStyle}
              />
            </div><br/>
            <div>
              <Button
                variant="contained"
                color="primary"
                onClick={this.onLogin}
                style={buttonStyle}
              >
                Iniciar Sesión
              </Button>
            </div>
          </div>
        </div>
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
)(Login);
