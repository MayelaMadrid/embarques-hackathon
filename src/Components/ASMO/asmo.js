import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as auth from '../../api/actions/auth';
import * as login from '../../actions/auth';
import Autosuggest from 'react-autosuggest';

class ASMO extends Component {
  state = {
    origen: '',
    destino: '',
    municipioOrigen: '',
    estadoOrigen: '',
    value: '',
    suggestions: []
  };

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
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
    const municipios = this.props.municipios;

    return inputLength === 0
      ? []
      : municipios.filter(
          lang => lang.nombre.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  getSuggestionValue = suggestion => {
    let municipioOrigen = [
      {
        latitud: suggestion.latitud,
        longitud: suggestion.longitud
      }
    ];
    this.props.cargarOrigen(municipioOrigen);
    this.setState({
      municipioOrigen: {
        latitud: suggestion.latitud,
        longitud: suggestion.longitud
      }
    });
    this.props.sendAsmo(municipioOrigen);
    this.props.sendAsmoName(suggestion.id);

    return suggestion.nombre;
  };

  renderSuggestion = suggestion => <div>{suggestion.nombre}</div>;

  render() {
    let municipios = this.props.municipios;
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Municipio',
      value,
      onChange: this.onChange
    };
    return (
      <div>
        {' '}
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
    municipios: state.Api.Auth.municipios
  };
};
const mapDispatchToProps = dispatch => {
  return {
    cargarOrigen: coo => {
      dispatch(login.ORIGEN(coo));
    },
    cargarDestino: coo => {
      dispatch(login.DESTINO(coo));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ASMO);
