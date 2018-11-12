import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import { TextField, InputAdornment } from '@material-ui/core';
import { RemoveRedEye } from '@material-ui/icons';
import PropTypes from 'prop-types';

const styles = theme => ({
    eye: {
        cursor: 'pointer'
    },
})

class PasswordInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            passwordIsMasked: true,
        };
    }

    togglePasswordMask = () => {
        this.setState(prevState => ({
            passwordIsMasked: !prevState.passwordIsMasked,
        }));
    }

    render() {
        const { classes } = this.props;
        const { passwordIsMasked } = this.state;

        return(
            <TextField 
                label="Password" 
                type={ passwordIsMasked ? 'password' : 'text' } 
                {...this.props} 
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <RemoveRedEye 
                                className={classes.eye}
                                onClick={this.togglePasswordMask} />
                        </InputAdornment>
                    )
            }}/>
        );
    }
}

PasswordInput.propTypes = {
    classes: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}

export default withStyles(styles)(PasswordInput);