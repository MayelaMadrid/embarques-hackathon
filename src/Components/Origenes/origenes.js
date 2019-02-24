import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import * as auth from '../../api/actions/auth';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import * as login from '../../actions/auth';
import Autosuggest from 'react-autosuggest';
import Select from '@material-ui/core/Select';
import ASMO from '../ASMO/asmo';

import Maps from '../Maps/maps';
import './origenes.css';
import Button from '@material-ui/core/Button';

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

  getSuggestionValue = suggestion => {
    this.setState({ estadoOrigen: suggestion.id });
    this.props.onLoadMunicipios(suggestion.id);
    return suggestion.estado;
  };

  renderSuggestion = suggestion => <div>{suggestion.estado}</div>;

  render() {
    let estados = this.props.estados;
    console.log(
      estados,
      this.state.estadoOrigen,
      this.props.locOrigen,
      this.state.municipioOrigen
    );
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Ingresa una busqueda',
      value,
      onChange: this.onChange
    };
    return (
      <div className="origenes-principal">
        <div className="origenes">
          <div className="">
            <div>
              <label>Seleccione el lugar de origen</label>
            </div>
            <div className="origen">
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
              <div>
                <ASMO sendAsmo={this.getAsmo} />
              </div>
            </div>
          </div>
          <div className="">
            <div>
              <label>Seleccione el lugar de destino</label>
            </div>
            <div className="destino">
              <div>
                {' '}
                <FormControl
                  variant="outlined"
                  className="{classes.formControl}"
                >
                  <InputLabel
                    ref={ref => {
                      this.InputLabelRef = ref;
                    }}
                    htmlFor="outlined-age-simple"
                  >
                    Estado
                  </InputLabel>
                  <Select
                    className="select-origenes"
                    value={this.state.estadoOrigen}
                    onChange={this.handleChange}
                    input={
                      <OutlinedInput
                        labelWidth={1}
                        name="estadoOrigen"
                        id="outlined-age-simple"
                      />
                    }
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenxxxty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div>
                {' '}
                <FormControl
                  variant="outlined"
                  className="{classes.formControl}"
                >
                  <InputLabel
                    ref={ref => {
                      this.InputLabelRef = ref;
                    }}
                    htmlFor="outlined-age-simple"
                  >
                    Municipio
                  </InputLabel>
                  <Select
                    className="select-origenes"
                    value={this.state.municipioOrigen}
                    onChange={this.handleChange}
                    input={
                      <OutlinedInput
                        labelWidth={20}
                        name="municipioOrigen"
                        id="outlined-age-simple"
                      />
                    }
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenxxxty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>{' '}
          </div>
        </div>
        <div className="mapa-form">
          {' '}
          {this.state.municipioOrigen ? <Maps /> : <div />}
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Origenes);
