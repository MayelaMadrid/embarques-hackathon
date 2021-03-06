import React, { Component } from 'react';
import { connect } from 'react-redux';
import './salidas.css';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import * as saving from '../../api/actions/auth';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Transportista from '../Transportista/transportista';
import Embarque from '../Embarque/embarque';
import Dispositivo from '../Dispositivo/dispositivo';

function getSteps() {
  return ['Seleccionar embarque.', 'Asignar chofer.', 'Asignar dispositivo'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Embarque />;
    case 1:
      return <Transportista />;
    case 2:
      return <Dispositivo />;
    default:
      return 'Unknown step';
  }
}

class Salidas extends Component {
  state = {
    activeStep: 0,
    skipped: new Set()
  };

  handleNext = () => {
    const { activeStep } = this.state;
    let { skipped } = this.state;
    const { idEmbarque, idChofer, idDispositivo, fechaSalida } = this.props;
    const steps = getSteps();

    if (activeStep === steps.length - 1) {
      this.props.guardarSalida(
        idEmbarque,
        idChofer,
        idDispositivo,
        fechaSalida
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
                Se ha guardado su embarque.
              </Typography>
            </div>
          ) : (
            <div>
              <Typography className="{classes.instructions}">
                {getStepContent(activeStep)}
              </Typography>

              <div className="buttonSpaced">
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
    idEmbarque: state.Auth.idEmbarque,
    idChofer: state.Auth.idChofer,
    idDispositivo: state.Auth.idDispositivo,
    fechaSalida: state.Auth.fechaSalida
  };
};
const mapDispatchToProps = dispatch => {
  return {
    guardarSalida: (idEmbarque, idChofer, idDispositivo, fechaSalida) => {
      return saving.guardarSalida(
        idEmbarque,
        idChofer,
        idDispositivo,
        fechaSalida
      )(dispatch);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Salidas);
