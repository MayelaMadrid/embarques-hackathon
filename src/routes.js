import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Components/Login/login';
import App from '../src/App';
import AuthRoute from './routers';
class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <AuthRoute path="/" component={App} />
        </Switch>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.Auth.user
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);
