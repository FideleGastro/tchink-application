import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from '../src/getPageContext';
import { Store } from '../src/context/store';


class MyApp extends App {
    constructor() {
        super();
        this.pageContext = getPageContext();
    }

    isLogged = () => {
        console.log('logged');
        return 'titi';
    }

    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }

        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('/service-worker.js')
                .then(registration => {
                    console.log('service worker registration successful')
                })
                .catch(err => {
                    console.warn('service worker registration failed', err.message)
                })
        }
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Head>
                    <title>My page</title>
                    <link rel="manifest" href="/static/manifest.json"></link>
                </Head>
                {/* Wrap every page in Jss and Theme providers */}
                <JssProvider
                    registry={this.pageContext.sheetsRegistry}
                    generateClassName={this.pageContext.generateClassName}
                >
                    {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
                    <MuiThemeProvider
                        theme={this.pageContext.theme}
                        sheetsManager={this.pageContext.sheetsManager}
                    >
                        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                        <CssBaseline />
                        {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server-side. */}

                        <Store.Provider value={{ logged: this.isLogged() }}>
                            <Component pageContext={this.pageContext} {...pageProps} />
                        </Store.Provider>
                    </MuiThemeProvider>
                </JssProvider>
            </Container >
        );
    }
}

export default MyApp;