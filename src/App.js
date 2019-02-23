import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Components/Home/home';
import { connect } from 'react-redux';
import './App.css';
import Login from './Components/Login/login';
import formulario from './Components/Formulario/formulario';

class App extends Component {
  render() {
    const Login = props => {
      if (this.props.user) {
        const { from } = props.location.state || { from: { pathname: '/' } };

        return <Redirect to={from} />;
      }
    };
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/formulario" component={formulario} />
        </Switch>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.Auth.user
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
