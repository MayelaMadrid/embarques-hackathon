import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as auth from '../../api/actions/auth';
import * as login from '../../actions/auth';
import Autosuggest from 'react-autosuggest';

class ASMD extends Component {
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
    let municipioDestino = [
      {
        latitud: suggestion.latitud,
        longitud: suggestion.longitud
      }
    ];
    this.props.cargarDestino(municipioDestino);
    this.setState({
      municipioDestino: {
        latitud: suggestion.latitud,
        longitud: suggestion.longitud
      }
    });

    this.props.sendAsmd(municipioDestino);

    return suggestion.nombre;
  };

  renderSuggestion = suggestion => <div>{suggestion.nombre}</div>;

  render() {
    let municipios = this.props.municipios;
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Ingresa una busqueda',
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
)(ASMD);
