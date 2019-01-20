import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'
import axios from 'axios';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
    },
});

const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Container = styled.div`
    height: auto;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

class TextFields extends React.Component {
    state = {
    };

    onSubmit = (form) => {
        axios.post(window.location.host + ':' + window.location.port + '/signin/connection', { ...form }).then(response => {
            console.log('res =>', response)
            //return response.data
        })
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <Container>
                {console.log('state =>', this.state)}
                <StyledForm noValidate autoComplete="off" method="post" >
                    <TextField
                        id="connect-email"
                        label="Email"
                        style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                        type="email"
                        onChange={this.handleChange('email')}
                    />
                    <TextField
                        id="connect-password"
                        label="Mot de passe"
                        style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                        name="3"
                        type="password"
                        onChange={this.handleChange('password')}
                    />

                    <Button onClick={() => this.onSubmit(this.state)} variant="contained" color="primary" className={classes.button}>
                        CONNEXION
                    </Button>

                </StyledForm>
            </Container>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);