import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

class OutlinedTextFields extends React.Component {
    state = {
        city: 'Cat in the Hat',
        nightsStayed: '',
        multiline: 'Controlled',
        currency: 'EUR',
        currencySymbol: '',
        amountSpent: ''
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    componentDidMount() {
        console.log(currencies)
    }

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="outlined-textarea"
                    label="City"
                    placeholder="Chicago"
                    multiline
                    onChange={this.handleChange('city')}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />

                <TextField
                    onChange={this.handleChange('nightsStayed')}
                    id="outlined-number"
                    label="Nights Stayed"
                    placeholder="5"
                    value={this.state.nightsStayed}
                    type="number"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />

                <TextField
                    id="outlined-number"
                    label="Amount Spent"
                    value={this.state.amountSpent}
                    onChange={this.handleChange('amountSpent')}
                    type="number"
                    placeholder="700"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />

                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    className={classes.textField}
                    value={this.state.currency}
                    onChange={this.handleChange('currency')}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    helperText="Please select your currency"
                    margin="normal"
                    variant="outlined"
                >
                    {currencies.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label} {option.value}
                        </MenuItem>
                    ))}
                </TextField>
            </form>
        );
    }
}

OutlinedTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);