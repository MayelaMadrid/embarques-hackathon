import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';

import './formulario.css';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
function getSteps() {
  return [
    'Información del embarque',
    'Seleccione origen y destino.',
    'Agente de exportacion y contenido de embarque.'
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Información del embarque';
    case 1:
      return 'Seleccione origen y destino.';
    case 2:
      return 'Agente de exportacion y contenido de embarque.';
    default:
      return 'Unknown step';
  }
}
class Formulario extends Component {
  state = {
    activeStep: 0,
    skipped: new Set()
  };

  handleNext = () => {
    const { activeStep } = this.state;
    let { skipped } = this.state;

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
              <Button onClick={this.handleReset} className="{classes.button}">
                Reset
              </Button>
            </div>
          ) : (
            <div>
              <Typography className="{classes.instructions}">
                {getStepContent(activeStep)}
              </Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className="{classes.button}"
                >
                  Anterior
                </Button>

                <Button
                  variant="contained"
                  color="primary"
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
  return {};
};
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Formulario);
