/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import API from "../utils/API";


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
});

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator
      prefix="$"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

class TotalDisplay extends React.Component {
  state = {

    numberformat: '',
  };

  componentDidMount() {
    this.loadTrips();
  }

  loadTrips = () => {
    API.getTrips()
      .then(res => console.log(res))
      .then(res =>
        this.setState({ numberformat: res.data[0].amountSpent }))
      .catch(err => console.log(err))
  }

  render() {
    const { classes } = this.props;
    const { numberformat } = this.state;

    return (
      <div className={classes.container}>

        <TextField
          className={classes.formControl}
          label="Total Spent"
          value={numberformat}
          id="formatted-numberformat-input"
          InputProps={{
            inputComponent: NumberFormatCustom,
          }}
        />
      </div>
    );
  }
}

TotalDisplay.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TotalDisplay);