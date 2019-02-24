import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as saving from '../../api/actions/auth';
import './formulario.css';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Trailer from '../Trailer/trailer';
import Origenes from '../Origenes/origenes';
import Contenido from '../Contenido/contenido';

function getSteps() {
  return ['Modelo del embarque', 'Origen y destino.', 'Contenido de embarque.'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Trailer />;
    case 1:
      return <Origenes />;
    case 2:
      return <Contenido />;
    default:
      return 'Unknown step';
  }
}

class Formulario extends Component {
  state = {
    activeStep: 0,
    skipped: new Set()
  };

  handleNext = ev => {
    const {
      idTrailer,
      idMunicipioOrigen,
      idMunicipioDestino,
      idAgenteExportacion,
      embarqueDetalles
    } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
    let { skipped } = this.state;
    if (activeStep === steps.length - 1) {
      this.props.guardarEmbarque(
        idTrailer,
        idMunicipioOrigen,
        idMunicipioDestino,
        idAgenteExportacion,
        embarqueDetalles
      );
    }
    this.setState({
      activeStep: activeStep + 1,
      skipped
    });
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className="formulario">
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            return (
              <Step key={label} {...props}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className="{classes.instructions">
                Completado
              </Typography>
            </div>
          ) : (
            <div>
              <Typography className="{classes.instructions}">
                {getStepContent(activeStep)}
              </Typography>

              <div>
                <br />
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className="{classes.button}"
                  style={{
                    backgroundColor: '#85ca85',
                    color: '#fff',
                    fontWeight: 'bold',
                    marginRight: '5px'
                  }}
                >
                  Anterior
                </Button>

                <Button
                  variant="contained"
                  id="btn-finish"
                  style={{
                    backgroundColor: '#5cb85c',
                    color: '#fff',
                    fontWeight: 'bold'
                  }}
                  onClick={this.handleNext}
                  className="{classes.button}"
                >
                  {activeStep === steps.length - 1 ? 'Terminar' : 'Siguiente'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    idTrailer: state.Auth.idTrailer,
    idMunicipioOrigen: state.Auth.idOrigen,
    idMunicipioDestino: state.Auth.idDestino,
    idAgenteExportacion: state.Auth.idAgente,
    embarqueDetalles: state.Auth.embarqueDetalles
  };
};
const mapDispatchToProps = dispatch => {
  return {
    guardarEmbarque: (
      idTrailer,
      idMunicipioOrigen,
      idMunicipioDestino,
      idAgenteExportacion,
      embarqueDetalles
    ) => {
      return saving.guardarEmbarque(
        idTrailer,
        idMunicipioOrigen,
        idMunicipioDestino,
        idAgenteExportacion,
        embarqueDetalles
      )(dispatch);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Formulario);
