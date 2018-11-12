import React from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types';
import PasswordInput from './PasswordInput'
import LoginCard from './LoginCard'

const styles = theme => ({
    form: {
        padding: '30px',
        margin: '30px'
    },
    input: {
        margin: '10px'
    }
});

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            password: '',
        };
    }

    onChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value});
    };
    
    render() {
        const { classes } = this.props;
        const { password } = this.state;

        return (
            <div>
                <LoginCard></LoginCard>
                <FormControl className={ classes.form } margin='normal'>
                    <Input id="username" className={ classes.input }
                    placeholder="Username"
                        startAdornment={
                            <InputAdornment position='start'>
                                <AccountCircle />
                            </InputAdornment>
                        }
                    />
                    <PasswordInput 
                        className={ classes.input } 
                        name="password"
                        value={password}
                        onChange={this.onChange}
                    />
                    <Button variant='contained' color='primary'>
                        Submit
                    </Button>
                </FormControl>
            </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Login);