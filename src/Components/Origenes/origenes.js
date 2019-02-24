import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as auth from '../../api/actions/auth';
import * as login from '../../actions/auth';
import Autosuggest from 'react-autosuggest';
import ASMO from '../ASMO/asmo';
import ASED from '../ASED/ased';
import ASMD from '../ASMD/asmd';

import Maps from '../Maps/maps';
import './origenes.css';

class Origenes extends Component {
  state = {
    origen: '',
    destino: '',
    municipioOrigen: '',
    municipioDestino: '',
    estadoOrigen: '',
    value: '',
    suggestions: []
  };

  componentDidMount() {
    this.props.onLoadEstados();
  }

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

  getAsmo = val => {
    this.setState({ municipioOrigen: val });
  };
  getAsmoName = val => {
    this.props.guardarIdOrigen(val);
  };
  getAsmd = val => {
    this.setState({ municipioDestino: val });
  };
  getAsmdName = val => {
    this.props.guardarIdDestino(val);
  };
  getSuggestionValue = suggestion => {
    this.setState({ estadoOrigen: suggestion.id });
    this.props.onLoadMunicipios(suggestion.id);
    return suggestion.estado;
  };

  renderSuggestion = suggestion => <div>{suggestion.estado}</div>;

  render() {
    let estados = this.props.estados;

    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Estado',
      value,
      onChange: this.onChange
    };
    return (
      <div className="origenes-principal">
        <div className="origenes">
          <div>
            <div className="formTitle2">
              <label>
                <i className="fas fa-globe-americas" /> Seleccione el lugar de
                origen
              </label>
            </div>
            <div className="origen">
              <div className="inputSeparator">
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
              <div className="inputSeparator">
                <ASMO sendAsmo={this.getAsmo} sendAsmoName={this.getAsmoName} />
              </div>
            </div>
          </div>
          <div>
            <div className="formTitle2">
              <label>
                <i className="fas fa-globe-africa" /> Seleccione el lugar de
                destino
              </label>
            </div>
            <div className="destino">
              <div className="inputSeparator">
                <ASED />
              </div>
              <div className="inputSeparator">
                <ASMD sendAsmd={this.getAsmd} sendAsmdName={this.getAsmdName} />
              </div>
            </div>
          </div>
        </div>
        <div className="mapa-form">
          {' '}
          {this.state.municipioOrigen && this.state.municipioDestino ? (
            <Maps />
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
    estados: state.Api.Auth.estados,
    municipios: state.Api.Auth.municipios,
    locOrigen: state.Auth.origen,
    locDestino: state.Auth.destino
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLoadEstados: () => {
      return auth.getEstados()(dispatch);
    },
    onLoadMunicipios: id => {
      return auth.getMunicipios(id)(dispatch);
    },
    cargarOrigen: coo => {
      dispatch(login.ORIGEN(coo));
    },
    cargarDestino: coo => {
      dispatch(login.DESTINO(coo));
    },
    guardarIdDestino: id => {
      dispatch(login.idMunDestino(id));
    },
    guardarIdOrigen: id => {
      dispatch(login.idMunOrigen(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Origenes);
