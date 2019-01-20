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
  width: 100%;
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
        axios.post(window.location.host + ':' + window.location.port + '/signin/inscription', { ...form }).then(response => {
            console.log('res =>', response.data)
            //return response.data
        })
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes, user } = this.props;
        return (
            <Container>
                {console.log('state =>', this.state)}
                <StyledForm noValidate autoComplete="off" method="post" >
                    <TextField
                        id="inscription-nom-prenom"
                        label="Nom / Prenom"
                        style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                        type="email"
                        value={user.name}
                        onChange={this.handleChange('name')}
                    />
                    <TextField
                        id="inscription-email"
                        label="Email"
                        style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                        type="email"
                        value={user.email}
                        onChange={this.handleChange('email')}
                    />
                    <TextField
                        id="inscription-date"
                        label="Date de naissance"
                        style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                        type="date"
                        value={user.age.split('T')[0]}
                        onChange={this.handleChange('age')}
                        InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                        id="inscription-password"
                        label="Mot de passe"
                        style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                        type="password"
                        value={user.password}
                        onChange={this.handleChange('password')}
                    />
                    <TextField
                        id="inscription-tel"
                        label="Téléphone"
                        style={{ margin: 8 }}
                        fullWidth
                        margin="normal"
                        type="number"
                        value={user.phone}
                        onChange={this.handleChange('phone')}
                    />
                    <Button onClick={() => this.onSubmit(this.state)} variant="contained" color="primary" className={classes.button}>
                        MODIFIFER SES INFOS
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