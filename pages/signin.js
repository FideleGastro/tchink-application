import React, { Component } from 'react'
import AppBar from './../component/organism/Appbar';
import HomepageHeaderBlock from './../component/organism/HomepageHeaderBlock';

import SigninForm from './../component/organism/SigninForm';
import Layout from './../component/template/LayoutFullPage';

export default class signinpage extends Component {
    static getInitialProps({ query: { id, logged } }) {
        return { id, logged }
    }
    render() {
        return (
            <>
                <Layout>
                    <AppBar />
                    <HomepageHeaderBlock />
                    <SigninForm />
                </Layout>
            </>
        )
    }
}

