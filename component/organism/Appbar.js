import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Home from '@material-ui/icons/Home';
import { Store } from '../../src/context/store';
import Link from 'next/link'

const styles = theme => ({
    text: {
        paddingTop: theme.spacing.unit * 2,
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
    },
    paper: {
        paddingBottom: 50,
    },
    list: {
        marginBottom: theme.spacing.unit * 2,
    },
    subHeader: {
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    toolbar: {
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
});

class Appbar extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar position="fixed" color="primary" className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        <a href='/'>
                            <IconButton color="inherit" aria-label="Home">
                                <Home />
                                {/* test :
                            <Store.Consumer>
                                {value => value.logged}
                            </Store.Consumer> */}

                            </IconButton>
                        </a>
                        <a href='/bar'>
                            <Fab color="secondary" aria-label="Search" className={classes.fabButton}>
                                <SearchIcon />
                            </Fab>
                        </a>
                        <div>
                            <IconButton color="inherit" aria-label="Account">
                                <a href='/profile'><AccountCircle /></a>
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(Appbar);
