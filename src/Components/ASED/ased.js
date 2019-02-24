import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as auth from '../../api/actions/auth';
import * as login from '../../actions/auth';
import Autosuggest from 'react-autosuggest';

class ASED extends Component {
  state = {
    origen: '',
    destino: '',
    municipioDestino: '',
    estadoDestino: '',
    value: '',
    suggestions: []
  };

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onSuggestionSelected = (
    event,
    { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
  ) => {};

  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    // Data
    const estados = this.props.estados;

    return inputLength === 0
      ? []
      : estados.filter(
          lang => lang.estado.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  getSuggestionValue = suggestion => {
    this.setState({ estadoDestino: suggestion.id });
    this.props.onLoadMunicipios(suggestion.id);
    return suggestion.estado;
  };

  renderSuggestion = suggestion => <div>{suggestion.estado}</div>;

  render() {
    let municipios = this.props.municipios;
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Estado',
      value,
      onChange: this.onChange
    };
    return (
      <div>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          onSuggestionSelected={this.onSuggestionSelected}
          inputProps={inputProps}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    estados: state.Api.Auth.estados
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLoadMunicipios: id => {
      return auth.getMunicipios(id)(dispatch);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ASED);
