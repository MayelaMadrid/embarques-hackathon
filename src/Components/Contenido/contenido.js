import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autosuggest from 'react-autosuggest';
import img from '../Login/img/road.jpeg';
import * as auth from '../../api/actions/auth';
import './contenido.css';

class Contenido extends Component {
  state = {
    value: '',
    suggestions: [],
    agente: ''
  };
  componentDidMount() {
    this.props.getAgentes();
    this.props.getProductos();
  }
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
    const agentes = this.props.agentes;

    return inputLength === 0
      ? []
      : agentes.filter(
          lang =>
            lang.nombreCompleto.toLowerCase().slice(0, inputLength) ===
            inputValue
        );
  };

  getSuggestionValue = suggestion => {
    this.setState({ agente: suggestion.id });
    return suggestion.nombreCompleto;
  };

  renderSuggestion = suggestion => <div>{suggestion.nombreCompleto}</div>;
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
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Ingresa una busqueda',
      value,
      onChange: this.onChange
    };
    let productos = this.props.productos;
    return (
      <div className="contenido">
        <div className="as">
          <div>
            <label>Seleccione al agente de expotacion</label>
          </div>
          <div className="asi">
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
        </div>
        <div className="formContenido">
          <Card style={styles.card}>
            <CardActionArea>
              <CardMedia
                style={styles.media}
                image={img}
                title="Contemplative Reptile"
              />
              <CardContent>
                <h2 style={{ color: 'black', alignContent: 'flex-end' }}>
                  Hojuelas
                </h2>
                <TextField
                  id="outlined-number"
                  label="Number"
                  value={this.state.age}
                  onChange={this.handleChange('age')}
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
            <CardActions style={{ justifyContent: 'center' }}>
              <Button size="large" style={styles.acceptButton}>
                Seleccionar
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  debugger;
  return {
    agentes: state.Api.Auth.agentes,
    productos: state.Api.Auth.productos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAgentes: () => {
      return auth.getAgentesExportacion()(dispatch);
    },
    getProductos: () => {
      return auth.getProductos()(dispatch);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contenido);
