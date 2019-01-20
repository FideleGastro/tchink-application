import React, { Component } from 'react'
import AppBar from '../component/organism/Appbar';
import ProfilepageHeaderBlock from '../component/organism/ProfilepageHeaderBlock';
import ProfilForm from '../component/organism/ProfilpageForm';
import Layout from '../component/template/LayoutFullPage';

export default class profilepage extends Component {
    static getInitialProps({ query: { id, logged, data } }) {
        return { id, logged, data }
    }
    render() {
        return (
            <>
                <Layout>
                    <AppBar />
                    <ProfilepageHeaderBlock text={'Bonjour, ' + this.props.data.user.name.split(' ')[0]}></ProfilepageHeaderBlock>
                    <ProfilForm data={this.props.data} />
                </Layout>
            </>
        )
    }
}

